<template>
  <div>
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
  created() {
    axios.get("http://localhost:3008/posts").then(res => {
      this.posts = res.data;
    });
  },
  data: () => ({
    posts: []
  })
};
</script>
