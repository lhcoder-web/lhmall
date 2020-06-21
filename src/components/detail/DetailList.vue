<template>
    <div class="listItem">
      <div class="item" v-for="(item,index) in lists" :key="index">
        <img :src="item" alt="">
      </div>
    </div>
</template>

<script>
export default {
    props: {
      lists: {
        type: Array,
        default() {
          return [];
        }
      }
    },
};
</script>

<style scoped>
.listItem {
  width: 100%;
  box-sizing: border-box;
  padding: 3px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  border-bottom: 2px solid #ccc;
}
.item {
  width: 100%;
}
.item>img {
  width: 100%;
  /* height: 265px; */
}
.title {
  width: 100%;
  overflow:hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
}
.info {
  width: 100%;
  height: 30px;
  text-align: center;
}
.info img {
  vertical-align:text-top;
}
.price {
  color: #ff8198;
  margin-right: 8px;
}
</style>
