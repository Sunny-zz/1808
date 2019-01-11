<template>
  <div v-if="posts.length">
    <ul>
      <li v-for="post in posts" :key="post.id">
        <router-link :to="`/post/${post.id}`">{{post.title}}</router-link>
      </li>
    </ul>
    <!-- <div>列表为空</div> -->
  </div>
  <div v-else>请稍等...</div>
</template>
<script>
import axios from "axios";
export default {
  name: "postlist",
  created() {
    // if (this.isSearch) {
    //   // 查询的请求
    //   console.log(this.$route.query.query);

    //   // 如果没有对应的查询请求，我们就拿全部，再筛选
    // } else {
    //   this.getPosts(this.tab);
    // }
    this.getPosts();
  },
  watch: {
    // tab: {
    //   handler() {
    //     this.getPosts(this.tab);
    //   },
    //   immediate: true
    // }
    "$route.query.query"() {
      this.getPosts();
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
    },
    isSearch() {
      return this.$route.path.indexOf("search") !== -1;
    }
  },
  methods: {
    getPosts() {
      const query = this.isSearch
        ? `title_like=${this.$route.query.query}`
        : `tab=${this.tab}`;
      console.log(query);

      axios.get(`http://localhost:3008/posts?${query}`).then(res => {
        setTimeout(() => {
          this.posts = res.data;
        }, 500);
      });
    }
  }
};
</script>
