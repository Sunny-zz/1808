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
  // created() {
  //   this.getPosts(this.tab);
  // },

  watch: {
    tab: {
      handler() {
        this.getPosts(this.tab);
      },
      immediate: true
    }
  },
  data: () => ({
    posts: []
  }),
  computed: {
    tab() {
      // recommend   frontend  backend  android
      // /   /welcome/frontend  /welcome/backend  /welcome/android
      // const { path } = this.$route;
      // return path === "/" ? "recommend" : path.replace("/welcome/", "");
      const { type } = this.$route.params;
      return type ? type : "recommend";
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
