<template>
  <div id="app">
    <header>
      <div @click="$router.push('/cart')"><i class="material-icons">shopping_cart</i> {{amountOfProducts}}</div>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  computed: {
    amountOfProducts() {
      return this.$store.getters.shoppingCart.length;
    }
  }
};
</script>
