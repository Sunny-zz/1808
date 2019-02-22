<template>
  <div>
    <ul>
      <li v-for="product in cartProducts" :key="product.id">
        <span>{{product.title}}</span> -
        <span>${{product.price}}</span> *
        <span>{{quantityById[product.id]}}</span>
      </li>
    </ul>
    <div>total: $ {{total}}</div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "cart",
  computed: {
    ...mapState({
      cartProducts(state) {
        return state.products.all.filter(
          product => state.cart.cartProductsId.indexOf(product.id) !== -1
        );
      },
      quantityById(state) {
        return state.cart.quantityById;
      },
      total() {
        return this.$store.getters.total.toFixed(2);
      }
    })
  }
};
</script>
