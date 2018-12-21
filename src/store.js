import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  products: [
    {
      id: "1",
      title: "Product 1",
      price: 200,
      image: "https://img.buzzfeed.com/buzzfeed-static/static/2014-01/campaign_images/webdr03/31/13/are-these-mind-blowing-products-real-1-13846-1391193694-12_big.jpg",
      availableSizes: ["S", "M", "L"],
      details: "Some product details"
    },
		{
      id: "2",
      title: "Product 2",
      price: 400,
      image: "https://img.buzzfeed.com/buzzfeed-static/static/2014-01/campaign_images/webdr03/31/13/are-these-mind-blowing-products-real-1-13846-1391193694-12_big.jpg",
      availableSizes: ["S", "M", "L"],
      details: "Some product details"
    },
    {
      id: "3",
      title: "Product 3",
      price: 250,
      image: "https://img.buzzfeed.com/buzzfeed-static/static/2014-01/campaign_images/webdr03/31/13/are-these-mind-blowing-products-real-1-13846-1391193694-12_big.jpg",
      availableSizes: ["S", "M", "L"],
      details: "Some product details"
    }
  ],
	shoppingCart: []
};

const mutations = {
	addToCart(state, product) {
		state.shoppingCart.push(product)
	},
	removeSingleProduct(state, index) {
		state.shoppingCart.splice(index, 1)
	},
	removeAll (state) {
		state.shoppingCart = []
	}
};

const getters = {
	getAllProducts: state => state.products,
	shoppingCart: state => state.shoppingCart
};

const actions = {
	addToCart ({commit}, product) {
		commit('addToCart', product)
	},
	removeSingleProduct({commit}, index) {
		commit('removeSingleProduct', index)
	},
	removeAll ({commit}) {
		commit('removeAll')
	}
};

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
});
