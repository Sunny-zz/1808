<template>
  <div>
    <button @click="show = !show">toggle</button>
    <transition appear name="fade">
      <h1 v-show="show">Vuex Cart</h1>
    </transition>
    <transition appear name="fadeInLeft">
      <h2>Vue</h2>
    </transition>
    <Products/>
    <hr>
    <Cart/>
  </div>
</template>

<script>
import Products from "./components/Products";
import Cart from "./components/Cart";
export default {
  name: "app",
  data: () => ({
    show: true
  }),
  components: {
    Products,
    Cart
  }
};
</script>

<style>
.fade-leave-active,
.fade-enter-active {
  /* 定义进入或离开的过渡的效果，时间，速度曲线 */
  transition: all 1.5s;
}
.fade-leave,
.fade-enter-to {
  /* 离开的开始样式 ,进入结束的样式*/
}
.fade-leave-to,
.fade-enter {
  /* 离开结束的样式，进入开始的样式 */
  transform: translateX(100px);
  opacity: 0;
}
.fadeInLeft-enter {
  transform: translateX(-100px);
  opacity: 0;
}

.fadeInLeft-enter-active {
  /* 定义进入或离开的过渡的效果，时间，速度曲线 */
  transition: all 1.5s;
}
</style>
