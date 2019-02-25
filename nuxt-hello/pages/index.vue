<template>
  <section class="container">
    <div>
      <Logo/>
      <h1 class="title">nuxt-hello</h1>
      <hr>
      <span>counter: {{counter}}</span>
      <button @click="counter++">counter++</button>
      <br>
      <hr>
      <nuxt-link to="/user">去 user 页</nuxt-link>
      <br>
      <hr>
      <nuxt-link to="/post/1">去 第一篇文章</nuxt-link>
      <br>
      <nuxt-link to="/post/2">去 第二篇文章</nuxt-link>
      <hr>
    </div>
  </section>
</template>

<script>
// nuxt 中 ～ 相当于根目录
import Logo from "~/components/Logo.vue";

export default {
  data: () => ({
    counter: 10
  }),
  components: {
    Logo
  }
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
