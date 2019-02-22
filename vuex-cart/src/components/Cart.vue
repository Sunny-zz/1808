<template>
  <div>
    <transition-group tag="ul" name="fade">
      <li v-for="product in cartProducts" :key="product.id">
        <span>{{product.title}}</span> -
        <span>${{product.price}}</span> *
        <span>{{quantityById[product.id]}}</span>
      </li>
    </transition-group>

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
<style scoped>
.fade-enter-active {
  transition: all 0.5s;
}
.fade-enter {
  transform: translateX(200px);
  opacity: 0;
}
/* @keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
.fade-enter-active {
  animation: bounce-in 0.5s;
} */
</style>

