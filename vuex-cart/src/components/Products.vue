<template>
  <div>
    <ul>
      <li v-for="product in products" :key="product.id">
        <div>
          <span>{{product.title}}</span> -
          <span>${{product.price}}</span>
        </div>
        <button @click="addToCart(product.id)">add to cart</button>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "products",
  created() {
    this.getProducts();
  },
  computed: {
    ...mapState({
      products: state => state.products.all
    })
  },
  methods: {
    // 这个mapActions生成了一个 getProducts函数 并且该函数自带 dispatch 功能
    ...mapActions(["getProducts", "addToCart"])
  }
};
</script>

