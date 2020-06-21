<template>
    <div class="detail-option" v-if="detailOption">
      <div class="size-wrapper">
        <div class="size-list" v-for="(item,index) in detailOption.size" :key="index">
          <div class="size-text">{{ item[0] }}</div>
          <div class="size-num-wrapper">
            <div class="size-num-item" v-for="(num,i) in item.length" :key="i">{{ item[num] }}</div>
          </div>
        </div>
        
      </div>
      <div class="product-wrapper" v-for="(item,index) in detailOption.product" :key="index">
        <div class="product-text">{{ item.key }}</div>
        <div class="product-desc">{{ item.value }}</div>
      </div>
    </div>
</template>

<script>
export default {
    props: {
      detailOption: {
        type: Object,
        default() {
          return {}
        }
      }
    }
};
</script>

<style scoped>
.detail-option {
  padding: 15px 10px;
   box-sizing: border-box;
  border-bottom:1px solid #ccc;
}
.size-list {
  display: flex;
  border-bottom:1px solid #ccc;
}
.size-text {
  width: 50px;
  height: 30px;
  line-height: 30px;
  margin-right: 50px;
}
.size-num-wrapper {
  flex: 1;
  display: flex;
  height: 40px;
  line-height: 40px;
  text-align: center;
}
.size-num-item {
  flex: 1;
}
.product-wrapper {
  border-top: 1px solid #ccc;
  display: flex;
}
.product-text {
  width: 30px;
  height: 40px;
  line-height: 40px;
}
.product-desc {
  flex: 1;
  margin-left: 55px;
  height: 40px;
  line-height: 40px;
  color: #ff8198;
  overflow:hidden;
  text-overflow: ellipsis;
}
</style>
