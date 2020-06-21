<template>
    <div class="detail-desc" v-if="detailInfo">
      <div class="desc-title">{{ detailInfo && detailInfo.title }}</div>
      <div class="price-wrapper">
        <span class="now-price">￥{{  detailInfo && detailInfo.nowPrice }}</span>
        <s class="old-price">￥{{  detailInfo && detailInfo.oldPrice }}</s>
        <span class="discount">{{  detailInfo && detailInfo.discount }}</span>
      </div>
      <div class="colmuns">
        <div class="colmuns-item" v-for="(item,index) in detailInfo.columns" :key="index">{{ item }}</div>
      </div>
      <div class="services" v-if="detailInfo.services">
        <div class="services-item" v-for="(item,index) in detailInfo.services.length-2" :key="index">
          <img v-if="detailInfo.services[item-1].icon" :src="detailInfo.services[item-1].icon" alt="">
          <span>{{ detailInfo.services[item-1].name }}</span>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    props: {
      detailInfo: {
        type: Object,
        default() {
          return {};
        }
      }
    }
};
</script>

<style scoped>
.detail-desc {
  margin-top: 15px;
  width: 100%;
  height: 220px;
  background-color: #fff;
  border-bottom:4px solid #ccc;
}
.desc-title {
  font-size: 16px;
  width: 100%;
  /* height: 60px; */
  line-height: 30px;
  text-indent: 1em;
}
.price-wrapper {
  width: 100%;
  height: 60px;
  line-height: 60px;
}
.now-price {
  font-size: 18px;
  color: #ff8198;
}
.old-price {
  font-size: 12px;
  margin-left: 15px;
}
.discount {
  display: inline-block;
  width: 50px;
  height: 20px;
  margin-left: 15px;
  line-height: 20px;
  border-radius: 20px;
  text-align: center;
  color: #fff;
  background-color: #ff8198;
}
.colmuns {
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid #ccc;
}
.colmuns-item {
  margin-top: 20px;
  text-align: center;
  color: #666;
}
.services {
  display: flex;
  height: 60px;
  line-height: 60px;
  text-align: center;
  justify-content: space-between;
}
.services-item {
  color: #666;
}
.services-item img {
  width: 10px;
  height: 10px;
}
</style>
