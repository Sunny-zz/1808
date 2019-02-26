<template>
  <section class="container">
    <div>
      <Logo/>
      <h1 class="title">nuxt-hello</h1>
      <hr>
      <span>counter: {{$store.state.counter}}</span>
      <button @click="getCounter">getCounter</button>
      <br>
      <hr>
      <nuxt-link to="/user">去 user 页</nuxt-link>
      <br>
      <hr>
      <ul v-if="posts.length">
        <li v-for="post in posts" :key="post.id">
          <nuxt-link :to="`/post/${post.id}`">{{post.title}}</nuxt-link>
        </li>
      </ul>
      <hr>
    </div>
  </section>
</template>

<script>
// nuxt 中 ～ 相当于根目录
import Logo from "~/components/Logo.vue";

export default {
  components: {
    Logo
  },
  methods: {
    getCounter() {
      this.$store.dispatch("getCounter");
    }
  },
  // created() {
  //   // 发 action
  //   // 要触发模块内的 action 或 mutation ，函数名前要加上模块名
  //   this.$store.dispatch("posts/getPosts");
  // },
  async fetch({ store }) {
    // fetch 函数 替代 created,只是在页面组件中(pages文件夹下的组件)
    // fetch 函数的第一个参数 是 context
    // context 对象下都有哪些属性
    // https://zh.nuxtjs.org/api/#%E4%B8%8A%E4%B8%8B%E6%96%87%E5%AF%B9%E8%B1%A1
    await store.dispatch("posts/getPosts");
  },
  computed: {
    posts() {
      return this.$store.state.posts.posts;
    }
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
