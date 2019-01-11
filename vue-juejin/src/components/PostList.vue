<template>
  <div v-if="posts.length">
    <ul>
      <li v-for="post in posts" :key="post.id">
        <router-link :to="`/post/${post.id}`">{{post.title}}</router-link>
      </li>
    </ul>
  </div>
  <div v-else>请稍等...</div>
</template>
<script>
import axios from "axios";
export default {
  name: "postlist",
  created() {
    this.getPosts("recommend");
  },
  data: () => ({
    posts: []
  }),
  beforeUpdate() {
    console.log(this.path);
    // this.getPosts();
  },
  computed: {
    path() {
      return this.$route.path;
    }
  },
  methods: {
    getPosts(tab) {
      axios.get(`http://localhost:3008/posts?tab=${tab}`).then(res => {
        this.posts = res.data;
      });
    }
  }
};
</script>
