<template>
  <div id="app">
    <tabbar></tabbar>
    <keep-alive exclude="detail"><router-view/></keep-alive>
  </div>
</template>
<script>
import Tabbar from 'components/tabbar/Tabbar.vue';

export default {
  components: {
    Tabbar,
  }
}
</script>
<style>
@import 'assets/css/normalize.css';
html,body,#app {
  font-size: 14px;
  width: 100%;
  height: 100%;
  /* color: #666;
    高亮文字:#ff5777
    topbarr背景 #ff8198
   */
}
</style>
