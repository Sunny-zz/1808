<template>
  <div>
    <ul>
      <li v-for="product in cartProducts" :key="product.id">
        <span>{{product.title}}</span> -
        <span>${{product.price}}</span> *
        <span>{{quantityById[product.id]}}</span>
      </li>
    </ul>
    <div>{{quantityById}}</div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "cart",
  computed: {
    ...mapState({
      cartProducts(state) {
        console.log(1);
        return state.products.all.filter(
          product => state.cart.cartProductsId.indexOf(product.id) !== -1
        );
      },
      quantityById(state) {
        return state.cart.quantityById;
      }
    })
  }
};
</script>
