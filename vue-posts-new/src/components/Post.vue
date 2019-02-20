<template>
  <div>
    <PostBody :postId="postId"/>
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
import PostBody from "./PostBody";
export default {
  name: "post",
  data: () => ({
    comments: []
  }),
  components: {
    PostBody
  },
  created() {
    // data  computed
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
