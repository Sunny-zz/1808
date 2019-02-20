<template>
  <div>
    <div v-if="post">
      <h2>{{post.title}}</h2>
      <p>{{post.body}}</p>
    </div>
    <div v-else>稍等</div>
    <div>
      <h3>评论</h3>
      <ul v-if="comments.length">
        <li v-for="comment in comments" :key="comment.id">{{comment.text}}</li>
      </ul>
      <div v-else>请添加评论</div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "post",
  data: () => ({
    post: null,
    comments: []
  }),
  created() {
    // data  computed
    axios.get(`http://localhost:3008/posts/${this.postId}`).then(res => {
      this.post = res.data;
    });
    axios
      .get(`http://localhost:3008/comments?postId=${this.postId}`)
      .then(res => {
        this.comments = res.data;
      });
  },
  computed: {
    postId() {
      return this.$route.params.id;
    }
  }
};
</script>
