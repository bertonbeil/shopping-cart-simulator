<template>
  <div>
    <h1>Product Details</h1>
    <div class="product-details">
      <h2>{{product.title}}</h2>
      <p>Price: {{product.price}}</p>
      <img :src="product.image" alt="">
      <div>Size: {{product.availableSizes}}
        {{selectedSize}}
        <select v-model="selectedSize">
          <option value="">Not Selected</option>
          <option v-for="value in product.availableSizes" :value="value">
            {{value}}
          </option>
        </select>
      </div>
      <div>Details: {{product.details}}</div>
      <hr>
      <button type="button" @click="addToCart">Add To Card</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedSize: ""
    };
  },
  computed: {
    product() {
      return this.$store.getters.getAllProducts.filter(
        p => p.id === this.$route.params.id
      )[0];
    }
  },
  methods: {
    addToCart() {
      if (this.selectedSize) {
        const product = { ...this.product, selectedSize: this.selectedSize };
        this.$store.dispatch("addToCart", product);
      } else {
        alert("please select product size");
      }
    }
  }
};
</script>
