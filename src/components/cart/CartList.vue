<template>
    <div class="cart-list">
      <div v-if="cartList.length === 0">
        购物车为空
      </div>
      <div v-else>
        <table>
          <tr class="cart-item" v-for='(item,index) in cartList' :key="index">
            <td>
              <input type="checkbox" :checked='item.isChecked' @click="show(index)"  id="">
            </td>
            <td>
              <img :src="item.img" alt="">
            </td>
            <td class="cart-title">
              {{ item.title }}
            </td>
            <td class="cart-price">￥{{ item.price }}</td>
            <td>x {{ item.count }}</td>
          </tr>
       </table>
        <div class="cart-total">
          <input type="checkbox" v-model="isAllChecked" @click="allChecked(isAllChecked)">全选
          <span>合计:￥{{ totalPrice }} </span>
          <button>去计算({{ checkedLength }})</button>
        </div>
      </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
	computed: {
    ...mapState(['cartList']),
    //计算当前选中的总价
    totalPrice() {
      return this.cartList.reduce((total,item,index) => {
          // console.log(index,item)
        if (item.isChecked) {
          return total + item.price * item.count;
        } else {
          return total
        }
      },0)
    },
    checkedLength() {
      return this.cartList.filter(item => item.isChecked).length;
    }
  },
  data() {
    return {
      isAllChecked: false
    }
  },
  methods: {
    show(i) {
      this.cartList[i].isChecked = !this.cartList[i].isChecked;
    },
    allChecked(isAllChecked) {
      this.cartList.forEach(item => item.isChecked = !isAllChecked)
    }
  }
};
</script>

<style scoped>
.cart-list {
  margin-bottom: 100px;
}
table {
  width: 100%;
  border-collapse:collapse;
  margin: 0;
  padding: 0;

}
.cart-item {
  width: 100%;
  height: 100px;
  border-bottom: 1px solid #999;
}
.cart-item img {
  /* width: 80px; */
  height: 90px;
}
.cart-title {
  width: 200px;
  overflow: hidden;
}
.cart-price {
  color: orange;
}
.cart-total {
  width: 100%;
  line-height: 50px;
  height: 50px;
  background-color: #f6f6f6;
  padding-left: 30px;
  box-sizing: border-box;
  position: fixed;
  bottom: 49px;
  left: 0;
  right: 0;
}
.cart-total span {
  display: inline-block;
  width: 80px;
  margin-left: 20px;
}
.cart-total button {
  width: 90px;
  height: 30px;
  background-color: orange;
  color: #fff;
  border-radius: 20px;
  border:none;
  margin-left: 50px;
}
</style>
