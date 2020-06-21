<template>
    <div class="cart-navbar-wrapper">
       <navbar class="cart-navbar">
        <template v-slot:center>
          购物街({{$store.state.cartList.length}})
        </template>
      </navbar>
    </div>
</template>

<script>
import Navbar from 'components/navbar/Navbar.vue';
export default {
    components: {
      Navbar
    }
};
</script>

<style scoped>
.cart-navbar-wrapper {
  position: relative;
  width: 100%;
  height: 49px;
  top: 0;
}
.cart-navbar {
  width: 100%;
  height: 49px;
  background-color: #ff8198;
  font-size: 16px;
  z-index: 9;
}
</style>
