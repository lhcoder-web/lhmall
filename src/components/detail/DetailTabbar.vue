<template>
    <div class="detail-tabbar">
      <div class="tabbar-left">
        <div class="tabbar-list" v-for="(item,index) in barList" :key="index">
           <img :src="item.img" v-if="currentIndex === index" alt="">
          <img :src="item.imgActive" v-else alt="">
          <div class="tabbar-text">{{ item.text }}</div>
        </div>
      </div>
      <div class="tabbar-right">
        <div class="add-cart" @click="addCart">加入购物车</div>
        <div class="buy">购买</div>
      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      barList:[
         {img: require('assets/img/detail/service.svg'),
         imgActive: require('assets/img/detail/service-active.svg'),
         text:'客服'},
         {img: require('assets/img/detail/shop.svg'),
         imgActive: require('assets/img/detail/shop-active.svg'),
         text: '店铺'},
         {img: require('assets/img/detail/collection.svg'),
         imgActive: require('assets/img/detail/collection-active.svg'),
         text:'收藏'}
      ],
      currentIndex: 0
    }
  },
  methods: {
    addCart() {
      this.$emit('add-cart');
    }
   
  }
};
</script>

<style scoped>
.detail-tabbar {
  width: 100%;
  height: 49px;
  display: flex;
  line-height: 49px;
  text-align: center;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #fff;
  box-shadow: 0 0 5px rgba(0, 0, 0, .3);
}
.tabbar-left {
  flex: 1;
  display: flex;
}
.tabbar-list {
  flex: 1;
  display: flex;
  flex-direction: column;
}
.tabbar-list>img {
  margin-top: 5px;
  margin-left: 18px;
  width: 25px;
}
.tabbar-text {
  text-align: center;
  line-height: 20px;
}
.tabbar-right {
  flex: 1;
  display: flex;
}
.add-cart {
  flex: 1;
  background-color: yellow;
}
.buy {
  flex: 1;
  color: #fff;
  background-color: #ff8198;
}
</style>
