<template>
    <div class="detail-navbar">
      <div class="navbar-item" v-for="(item,index) in navList"  
      :class="{active: index === currentIndex}"
      :key="index"
      @click="active(index)">{{ item }}</div>
    </div>
</template>

<script>
export default {
    props: {
       currentIndex: {
         type: Number,
         default: 0
       }
    },
    data() {
        return {
          navList: ['商品','参数','评论','推荐'],
        };
    },
    methods: {
      active(index) {
        // this.currentIndex = index;
        //点击跳转
        this.$emit('detail-navbar-click',index)
      }
    }
};
</script>

<style scoped>
.detail-navbar {
  display: flex;
  color: #000;
}
.navbar-item {
  flex: 1;
}
.active {
  color: #ff8198;
}
</style>
