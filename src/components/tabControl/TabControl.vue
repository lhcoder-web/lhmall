<template>
   <div class="tab-control" >
      <div class="item" v-for="(item,index) in tabList" :key="index">
        <div class="item-text" :class="{active: currentIndex === index}" @click="TabClick(index)">{{ item }}</div>
      </div>
    </div>
</template>

<script>
//二级导航
export default {
    props: {
      tabList: {
        type: Array,
        default() {
          return [];
        }
      }
    },
    data() {
      return {
        currentIndex: 0
      }
    },
    methods: {
      TabClick(index) {
        this.currentIndex = index;
        this.$emit('tabType',index);
      }
    }
};
</script>

<style scoped>
.tab-control {
  width: 100%;
  height: 40px;
  text-align: center;
  display: flex;
  background-color: #fff;
}
.item {
  flex: 1;
}
.item-text {
  width: 40px;
  height: 30px;
  line-height: 30px;
  margin: auto;
}
.active {
  border-bottom:3px solid #ff8198;
  color: #ff8198;
}
</style>
