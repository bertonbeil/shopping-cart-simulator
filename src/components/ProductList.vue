<template>
  <div>
    <div class="filter">
      <span>Filter by price:</span>
      <label for="">From
        <input type="text" v-model="filter.from">
      </label>
      <label for="">To
        <input type="text" v-model="filter.to">
      </label>
    </div>
    <div class="product-card" v-for="product in products" @click="$router.push(`product/${product.id}`)">
      <img :src="product.image" alt="">
      <div class="product-details">
        <span>{{product.title}}</span> <br>
        <span>Price {{product.price}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "product-list",
  data() {
    return {
      filter: {
        from: null,
        to: null
      }
    };
  },
  computed: {
    products() {
      if (this.filter.from || this.filter.to) {
        const toReturn = this.$store.getters.getAllProducts.filter(prod => {
          if (prod.price >= this.filter.from && prod.price <= this.filter.to) {
            return prod;
          }
        });
        return toReturn;
      } else {
        return this.$store.getters.getAllProducts;
      }
    }
  }
};
</script>

<style lang="scss">
.product-card {
  padding: 20px;
}
</style>
