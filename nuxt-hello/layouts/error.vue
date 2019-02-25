<template>
  <div class="container">
    <h1 v-if="error.statusCode === 404">页面不存在</h1>
    <h1 v-else>应用发生错误异常</h1>
    <nuxt-link to="/">首 页</nuxt-link>
  </div>
</template>

<script>
export default {
  // error.vue 组件会默认接收到一个 props ---> error 存储的一些错误信息，通过错误信息给出相应的提示
  props: ["error"]
};
</script>