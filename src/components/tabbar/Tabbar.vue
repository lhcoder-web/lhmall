<template>
    <div class="tabbar" v-if="showTabbar">
      <div class="tabbar-item" v-for="(item,index) in tabList" :key="index" @click="tabbarClick(index,item.url)">
        <img :src="item.img" v-if="currentIndex !== index" alt="">
        <img :src="item.imgActive" v-else alt="">
        <div class="tabbar-text" :class="{active: currentIndex === index}">{{item.text}}</div>
      </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
   data() {
     return {
       currentIndex: 0,
       tabList: [
         {img: require('assets/img/tabbar/index.svg'),
         imgActive: require('assets/img/tabbar/index-active.svg'),
         text:'首页',url: '/home'},
         {img: require('assets/img/tabbar/fenlei.svg'),
         imgActive: require('assets/img/tabbar/fenlei-active.svg'),
         text:'分类',url: '/category'},
         {img: require('assets/img/tabbar/cart.svg'),
         imgActive: require('assets/img/tabbar/cart-active.svg'),
         text:'购物车',url: '/cart'},
         {img: require('assets/img/tabbar/profile.svg'),
         imgActive: require('assets/img/tabbar/profile-active.svg'),
         text:'我的',url: '/profile'}
       ]
     }
   },
   computed: {
     ...mapState(['showTabbar'])
   },
   methods: {
     tabbarClick(index,url) {
       this.currentIndex = index;
       this.$router.push(url);
     }
   }
};
</script>

<style scoped>
.tabbar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 49px;
  background-color: #f6f6f6;
  color: #666;
  display: flex;
  box-shadow: 0 0 3px rgba(0,0,0,.2);
  z-index: 2;
}
.tabbar-item {
  flex: 1;
  flex-direction: column;
  padding: 5px 5px;
  box-sizing: border-box;
  text-align: center;
}
.tabbar-item img {
  margin-bottom: 3px;
  width: 20px; 
  height: 20px; 
}
.active {
  color: #ff5777;
}
</style>
