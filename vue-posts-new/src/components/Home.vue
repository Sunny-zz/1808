<template>
  <div>
    <div>count:{{count}}</div>
    <button @click="addCount">+5</button>
    <ul v-if="posts.length">
      <li v-for="post in posts" :key="post.id">
        <router-link :to="`/post/${post.id}`">{{post.title}}</router-link>
      </li>
    </ul>
    <div v-else>请稍等。。。</div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "home",
  data: () => ({
    posts: []
  }),
  computed: {
    count() {
      return this.$store.state.count;
    }
  },
  methods: {
    addCount() {
      // 修改 store 的 count --->action---->mutation ----> state
      this.$store.dispatch("add", 5);
    }
  },
  created() {
    axios.get("http://localhost:3008/posts").then(res => {
      // 修改 data 中的 posts
      // console.log(res);
      this.posts = res.data;
    });
  },
  mounted() {
    // 对页面的真实 dom 去操作
  }
};
</script>
