<template>
    <div class="recommend">
      <div class="recommend-item" v-for="(item,index) in recommendList" :key="index">
        <a :href="item.link">
          <img :src="item.image" alt="">
        </a>
        <div>{{ item.title }} </div>
      </div>
    </div>
</template>

<script>
export default {
    props: {
      recommendList: {
        type: Array,
        default() {
          return [];
        }
      }
    }
};
</script>

<style scoped>
.recommend {
  width: 100%;
  height: 130px;
  display: flex;
  text-align: center;
  border-bottom: 6px solid #ccc;
}
.recommend-item {
  flex: 1;
}
.recommend-item img {
  height: 70px;
}
</style>
