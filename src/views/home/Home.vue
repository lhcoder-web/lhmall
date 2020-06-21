<template>
    <div id="home">
      <navbar class="navbar-bgcolor">
        <template v-slot:center>购物街</template>
      </navbar>
      <!-- 这里使用了两次tabControl组件是为了实现吸顶效果
        因为better-scroll 是用过 transform：translate进行滚动 会将position:fixed设置无效
        实现原理：将一个abControl组件固定到吸顶的位置并且隐藏，当滚到一定位置后将他显示
       -->
      <tab-control class="fixed" 
      ref="tabControl1"
      :tabList = "['流行','新款','精选']" 
      @tabType="tabType"
      v-show="isFixed"
      @click.native="active1"></tab-control>

      <scroll class="content"  ref="scroll" :probeType = '3' @bscroll="contentScroll" @pullingUp='pullingUp'> 
        <swiper :imgList = 'banners'></swiper>
        <recommend :recommendList = 'recommends'></recommend>
        <tab-control ref="tabControl" :tabList = "['流行','新款','精选']" @tabType="tabType" @click.native="active2"></tab-control>
        <list-item :lists = 'listType'></list-item>
      </scroll>
      <back-top @click.native = "backTop('scroll')" v-show="isTopBackShow"></back-top>
    </div>
</template>

<script>
//组件
import scroll from 'components/scroll/Scroll.vue';
import Navbar from 'components/navbar/Navbar.vue';
import Swiper from 'components/home/Swiper.vue';
import Recommend from 'components/home/Recommend.vue';
import TabControl from 'components/tabControl/TabControl.vue';
import ListItem from 'components/listItem/ListItem.vue';
import { backTopMixin } from 'utils/mixin.js';
//home数据
import { getHomeData,getHomeListData } from 'network/home.js';
export default {
  mixins:[backTopMixin],
  components: {
      Navbar,
      Swiper,
      Recommend,
      TabControl,
      ListItem,
      scroll,
  },
  data() {
    return {
      banners:[],
      recommends: [],
      //列表数据 page代表当前页数
      listItem: {
        'pop': {page: 0,list:[]},
        'new': {page: 0,list:[]},
        'sell': {page: 0,list:[]}
      },
      //当前列表名
      ListTypeIndex:0,
      //是否展示回到顶部 mixins混入
      // isTopBackShow: false,
      //tabContorl组件距离上方的高度
      TabControlTop:0,
      //判断tabControl是否吸顶
      isFixed: false,
      //当前滚动的距离，再次切换home组件时 保留这个位置
      homeOffsetY: 0
    }
  },
  computed: {
    //当前类型
    type() {
      return Object.keys(this.listItem)[this.ListTypeIndex];
    },
    //当前类型(pop/new/sell)的数据
    listType() {
      // 通过index获取listItem对象中的key
      return this.listItem[this.type].list;
    }
    
  },
  created() {
    //获取首页数据
    this.getTopData();
    this.getAllListData();
  },
  mounted() {
      this.$nextTick(() => {
        //this.$refs.tabControl.$el.offsetTop: tabContorl组件距离上放的高度
        this.TabControlTop = this.$refs.tabControl.$el.offsetTop - 30;
      })
  },
  activated() {
    this.$refs.scroll.scrollTo(0, this.homeOffsetY, 0);
  },
  deactivated() {
    this.homeOffsetY = this.$refs.scroll.offsetY;
  },
  methods: {
    //首页头部数据
    getTopData() {
      getHomeData().then(res => {
        this.banners = res.data.data.banner.list;
        this.recommends = res.data.data.recommend.list;
      })
    },
    //首页list数据
    getListData(type) {
      //按照listItem中的page请求数据 请求成功一次后 将page加1 
      const page = this.listItem[type].page + 1;
      getHomeListData(type,page).then(res => {
        this.listItem[type].list.push(...res.data.data.list);
        this.listItem[type].page += 1;
      })
    },
    getAllListData() {
      this.getListData('pop');
      this.getListData('new');
      this.getListData('sell');
    },
    tabType(i) {
      this.ListTypeIndex = i;
    },
    //回到顶部 mixins混入
    // backTop() {
    //   this.$refs.scroll.scrollTo(0,0)
    // },
    //滚动事件
    contentScroll(position) {
      this.showBackTop(position)
      //大于800返回顶部按钮出现 mixin混入
      // this.isTopBackShow = Math.abs(position.y) > 800;
      //超过tabControl的高度出现吸顶效果
      this.isFixed = Math.abs(position.y) > this.TabControlTop;
    },
    //上拉事件
    pullingUp() {
      //请求当前类型的数据
      this.getListData(this.type)
      //请求到了数据页面高度发生改变 需要调用refresh
      this.$nextTick(() => {
        this.$refs.scroll.refresh();
      })
    },
    //这两个active函数:因为吸顶效果其实是两个组件，每个组件中自己的 当前活跃都不一样 所以需要将他们统一
    active1() {
      this.$refs.tabControl.currentIndex = this.ListTypeIndex;
    },
    active2() {
      this.$refs.tabControl1.currentIndex = this.ListTypeIndex;
    }
  },
};
</script>

<style scoped>
#home {
  position: relative;
  width: 100%;
  height:100%;
}
.navbar-bgcolor {
  background-color: #ff8198;
}
.content {
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
.fixed {
  position: fixed;
  top: 44px;
  z-index: 9;
}
</style>
