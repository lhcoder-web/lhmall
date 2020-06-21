<template>
    <div class="detail">
      <Navbar class="navbar">
          <template v-slot:left><img src="~assets/img/content/back.png" alt=""></template>
          <template v-slot:center>
            <detail-navbar 
            :current-index = 'NavbarCurrentIndex' 
            @detail-navbar-click='navbarClick'></detail-navbar>
          </template>
      </Navbar>
      <scroll class="content" ref="detailScroll" :probeType = '3' @bscroll = 'bscroll'>
        <swiper :imgList = 'detailImage'></swiper>
        <detail-desc :detailInfo = 'detailInfo'></detail-desc>
        <detail-shop-info :detailShopInfo = 'detailShopInfo'></detail-shop-info>
        <detail-list :lists = 'detailListImage' ref="list"></detail-list>
        <detail-option :detailOption = 'DetailOptionData' ref="option"></detail-option>
        <detail-comment :comment = 'comment' ref="comment"></detail-comment>
        <bottom-list :lists = 'recommend' ref="recommend"></bottom-list>
      </scroll>
      <back-top v-show="isTopBackShow" @click.native="backTop('detailScroll')"/>
      <detail-tabbar @add-cart='addCart'></detail-tabbar>
      <toast text="添加购物车成功" v-show="toastShow"/>
    </div>
</template>

<script>
//组件
import scroll from 'components/scroll/Scroll.vue';
import Navbar from 'components/navbar/Navbar.vue';
import DetailNavbar from 'components/detail/DetailNavbar.vue';
import Swiper from 'components/detail/Swiper.vue';
import DetailDesc from 'components/detail/DetailDesc.vue';
import DetailShopInfo from 'components/detail/DetailShopInfo.vue';
import DetailList from 'components/detail/DetailList.vue';
import DetailOption from 'components/detail/DetailOption.vue';
import DetailComment from 'components/detail/DetailComment.vue';
import BottomList from 'components/listItem/ListItem.vue';
import DetailTabbar from 'components/detail/DetailTabbar.vue';
import Toast from 'components/toast/Toast.vue';
import { backTopMixin } from 'utils/mixin.js';
import { mapState,mapMutations } from 'vuex';
//请求数据
import { getDetailData, getRecommend, DetailInfo, ClassDetailShopInfo, ClassDetailOption } from 'network/detail';
export default {
  name: 'detail',
  mixins: [backTopMixin],
  computed: {
    ...mapState(['cartList'])
  },
  components: {
    scroll,
    Navbar,
    DetailNavbar,
    Swiper,
    DetailDesc,
    DetailShopInfo,
    DetailList,
    DetailOption,
    DetailComment,
    BottomList,
    DetailTabbar,
    Toast
  },
  data() {
    return {
      iid: null,
      //轮播图片
      detailImage: [],
      //desc信息
      detailInfo: {},
      //店铺信息
      detailShopInfo: {},
      //详情图片
      detailListImage: [],
      //参数数据
      DetailOptionData: {},
      //评论数据
      comment: [],
      //推荐
      recommend: [],
      //当前导航活跃状态
      NavbarCurrentIndex: 0,
      //toast显示与隐藏
      toastShow: false
    };
  },
  methods: {
   ...mapMutations(['SETCARTLIST']),
    bscroll(position) {
      // console.log(position.y)
      this.navbarActive(position.y)
      //展示backTop
      this.showBackTop(position);
    },
    //判断当前导航的活跃状态
    navbarActive(y) {
      if (this.NavbarCurrentIndex !== 0 && Math.abs(y) < this.$refs.option.$el.offsetTop) {
        this.NavbarCurrentIndex = 0;
      } 
       if (this.NavbarCurrentIndex !== 1 && Math.abs(y) > this.$refs.option.$el.offsetTop) {
        this.NavbarCurrentIndex = 1;
      }
       if (this.NavbarCurrentIndex !== 2 && Math.abs(y) > this.$refs.comment.$el.offsetTop) {
        this.NavbarCurrentIndex = 2;
      } 
      if(this.NavbarCurrentIndex !== 3 && Math.abs(y) > this.$refs.recommend.$el.offsetTop) {
        this.NavbarCurrentIndex = 3;
      }
    },
    //点击导航跳转
    navbarClick(index) {
      // console.log(index)
      this.NavbarCurrentIndex = index;
      //当前被点击的navbar项的ref名
      const arr = ['list','option','comment','recommend'];
      //offsetTop+10 加10的原因是 跳转过去后还差一点距离才能激活当前navbar
      this.$refs.detailScroll.scrollTo(0,-(this.$refs[arr[index]].$el.offsetTop+10))
    },
    //点击添加购物车
    addCart() {
      const cartObj = {};
      cartObj.img = this.detailImage[0];
      cartObj.title = this.detailInfo.title;
      cartObj.price = this.detailInfo.nowPrice;
      cartObj.count = 1;
      cartObj.iid = this.iid;
      cartObj.isChecked = false;
      this.SETCARTLIST(cartObj);
      // console.log(this.cartList)
      //展示toast
      this.toastShow = true;
      setTimeout(() => {
        this.toastShow = false;
      },1000)
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$refs.detailScroll.refresh();
      // console.log(this.$refs.comment.$el.offsetTop);
      // console.log(this.$refs.list.$el.offsetTop);
      // console.log(this.$refs.option.$el.offsetTop);
      // console.log(this.$refs.recommend.$el.offsetTop);
    })
  },
  created() {
    this.iid = this.$route.query.iid;
    getDetailData(this.iid).then(res => {
      // console.log(res);
      //detail整体数据
      const data = res.data.result;
      //轮播图片
      this.detailImage = res.data.result.itemInfo.topImages;
      //商品描述
      this.detailInfo = new DetailInfo(data.itemInfo,data.columns,data.shopInfo.services);
      //店铺信息
      this.detailShopInfo = new ClassDetailShopInfo(data.shopInfo);
      //列表图片
      this.detailListImage = data.detailInfo.detailImage[0].list;
      //参数数据
      this.DetailOptionData = new ClassDetailOption(data.itemParams);
      //评论
      this.comment = data.rate.list;
    })
    //推荐
    getRecommend().then(recommend => {
      // console.log(recommend.data.data.list)
      this.recommend = recommend.data.data.list
    })
  }
};
</script>

<style scoped>
.content {
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
.navbar {
  background-color: #fff;
}
.detail {
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 10;
  background-color: #fff;
}
</style>
