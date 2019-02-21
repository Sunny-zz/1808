<template>
  <div v-if="post">
    <h2>{{post.title}}</h2>
    <p>{{post.body}}</p>
    <span>评论数：{{$store.getters.commentNum}}</span>
  </div>
  <div v-else>稍等。。。</div>
</template>
<script>
import axios from "axios";
export default {
  name: "postbody",
  props: ["postId"],
  data: () => ({
    post: null
  }),
  created() {
    // data  computed
    axios.get(`http://localhost:3008/posts/${this.postId}`).then(res => {
      this.post = res.data;
    });
  }
  // computed: {
  //   post() {
  //     //
  //     return this.$store.state.posts.posts.find(e => e.id == this.postId);
  //   }
  // }
};
</script>
