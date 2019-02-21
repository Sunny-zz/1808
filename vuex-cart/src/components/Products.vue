<template>
  <div>
    <ul>
      <li v-for="product in products" :key="product.id">
        <div>
          <span>{{product.title}}</span> -
          <span>${{product.price}}</span>
        </div>
        <button>add to cart</button>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "products",
  data: () => ({
    products: [
      { id: 1, title: "iPad 4 Mini", price: 500.01, inventory: 20 },
      { id: 2, title: "H&M T-Shirt White", price: 10.99, inventory: 10 },
      { id: 3, title: "Charli XCX - Sucker CD", price: 19.99, inventory: 50 }
    ]
  })
};
</script>

