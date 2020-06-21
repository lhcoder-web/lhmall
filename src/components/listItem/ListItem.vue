<template>
    <div class="listItem">
      <div class="item" v-for="(item,index) in lists" :key="index" @click="toDetail(item.iid)">
        <img :src="item.image || item.show.img" alt="">
        <div class="title" v-if="item.show">{{ item.title }}</div>
        <div class="info" v-if="item.show">
          <span class="price">{{ item.orgPrice }}</span>
          <img src="~assets/img/home/collection.svg" alt="">
          <span class="cfav">{{ item.cfav }}</span>
        </div>
      </div>
    </div>
</template>

<script>
import { mapState,mapMutations } from 'vuex';

export default {
    props: {
      lists: {
        type: Array,
        default() {
          return [];
        }
      }
    },
    computed: {
      ...mapState(['showTabbar'])
    },
    methods: {
      ...mapMutations(['SETSHOWTABBAR']),
     toDetail(iid) {
       //路由跳转
      this.$router.push({
        path: '/detail',
        query: {
          iid
        }
      })
      //隐藏全局tabbar
      this.SETSHOWTABBAR(false)
     }
   }
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
}
.item {
  width: 48%;
}
.item>img {
  width: 100%;
  height: 265px;
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
