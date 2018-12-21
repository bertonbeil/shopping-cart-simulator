<template>
  <div>
    <product-list></product-list>
  </div>
</template>

<script>
import ProductList from "@/components/ProductList";

export default {
  components: {
    ProductList
  },
  computed: {
    amountOfProducts() {
      return this.$store.getters.shoppingCart.length;
    }
  }
};
</script>
