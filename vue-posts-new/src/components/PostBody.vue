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
  data: () => ({
    post: null
  }),
  props: ["postId"],
  created() {
    // data  computed
    axios.get(`http://localhost:3008/posts/${this.postId}`).then(res => {
      this.post = res.data;
    });
    console.log(this.$store);
  }
};
</script>
