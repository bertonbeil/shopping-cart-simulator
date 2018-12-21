import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/Home";
import ProductDetails from "@/components/ProductDetails";
import ShoppingCart from "@/components/ShoppingCart";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/product/:id",
      name: "ProductDetails",
      component: ProductDetails
    },
		{
      path: "/cart",
      name: "ShoppingCart",
      component: ShoppingCart
    }
  ]
});
