<template>
  <div>
    <h1>Vuex cart</h1>
    <Products/>
    <Cart/>
  </div>
</template>

<script>
import Products from "./components/Products";
import Cart from "./components/Cart";
export default {
  name: "app",
  components: {
    Products,
    Cart
  }
};
</script>

<style>
</style>
