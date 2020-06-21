<template>
    <div id="cart">
      <cart-navbar />
     	<cart-list />
    </div>
</template>

<script>
import CartList from 'components/cart/CartList.vue';
import CartNavbar from 'components/cart/CartNavbar.vue';
export default {
 	components: {
    CartList,
    CartNavbar
 	}
};
</script>

<style scoped>
#cart {
  width: 100%;
}
</style>
