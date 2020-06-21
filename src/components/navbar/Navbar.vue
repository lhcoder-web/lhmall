<template>
    <div class="nav-bar">
      <div class="left" @click="back"><slot name="left"></slot></div>
      <div class="center"><slot name="center"></slot></div>
      <div class="right"><slot name="right"></slot></div>
    </div>
</template>

<script>
export default {
   name: 'Navbar',
   methods: {
     back() {
       this.$router.back();
       //显示全局tabbar
       this.$store.commit('SETSHOWTABBAR',true)
     }
   }
};
</script>

<style scoped>
.nav-bar {
  width: 100%;
  height: 44px;
  line-height: 44px;
  text-align: center;
  color: #fff;
  display: flex;
  box-shadow: 0 0 3px rgba(0,0,0,.2);
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}
.left, .right{
  width: 60px;
  height: 44px;
}
.center {
  flex: 1;
}
.left img {
  width: 25px;
  height: 25px;
  margin: 10px 20px 0 0;
}
</style>
