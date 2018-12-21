<template>
  <div>
    <template v-if="!amountOfProducts">
      <span>Your cart is empty</span>
    </template>
    <template v-else>
      <button type="button" @click="removeAll">remove All</button>
      <hr>
      <div class="product-card" v-for="(product, index) in products">
        <img :src="product.image" alt="">
        <div class="product-details">
          <span>{{product.title}}</span> <br>
          <span>Price {{product.price}}</span> <br>
          <span>Selected Size: {{product.selectedSize}}</span>
        </div>
        <button type="button" @click="removeItem(index)">remove product</button>
      </div>
      <hr>
      <button type="button" @click="buyProducts"> Buy </button>
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    products() {
      return this.$store.getters.shoppingCart;
    },
    amountOfProducts() {
      return this.$store.getters.shoppingCart.length;
    }
  },
  methods: {
    removeItem(index) {
      this.$store.dispatch("removeSingleProduct", index);
    },
    removeAll() {
      this.$store.dispatch("removeAll");
      this.$router.push("/");
    },
    buyProducts() {
      alert(`You just buy ${this.products.map(prod => prod.title).join(",")}`);
    }
  }
};
</script>
