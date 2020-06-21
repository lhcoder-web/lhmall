<template>
    <div class="shopInfo" v-if="detailShopInfo">
      <div class="shop-name">
        <img class="shop-logo" :src="detailShopInfo.shopLogo" alt="">
        <div class="name">{{ detailShopInfo.name }}</div>
      </div>
      <div class="shop-number-wrapper">
        <div class="shop-number-left">
           <div class="total-sales">
            <div class="shops-num">{{ detailShopInfo.cSells }}</div>
            <div>总销量</div>
          </div>
          <div class="all-shops">
            <div class="shops-num">{{ detailShopInfo.cGoods }}</div>
            <div>全部宝贝</div>
          </div>
        </div>
        <div class="shop-number-right">
          <div class="shop-score">
            <div class="score-item" v-for="(item,index) in detailShopInfo.score" :key="index">
              <div class="score-text">{{ item.name }}</div>
              <div class="score-num" :class="{active: item.isBetter}">{{ item.score }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    props: {
      detailShopInfo: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    data() {
        return {

        };
    }
};
</script>

<style scoped>
.shopInfo {
  width: 100%;
  border-bottom: 2px solid #ccc;
}
.shop-name {
  margin-top: 30px;
  width: 100%;
  height: 50px;
  line-height: 50px;
  display: flex;

}
.shop-logo {
  margin-left: 15px;
  width: 50px;
  height: 50px;
}
.name {
  margin-left:20px;
  font-size: 16px;
}

.shop-number-wrapper {
  display: flex;
}
.shop-number-left, .shop-number-right {
  height: 150px;
  flex: 1;
}
.shop-number-left {
  display: flex;
  text-align: center;
}
.total-sales, .all-shops {
  flex: 1;
  height:50px;
  margin-top: 50px;
}
.shops-num {
  margin-bottom: 10px;
}
.shop-score {
  margin-top: 35px;
}
.score-item {
  display: flex;
}
.score-text {
  margin: 0 20px 20px 30px;
}
.score-num {
  color: green;
}
.active {
  color: #f00;
}
</style>
