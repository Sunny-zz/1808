<template>
  <div>
    <div>count: {{$store.state.count}}</div>
    <PostBody :postId="postId" :commentNum="commentNum"/>
    <PostComment :comments="comments" :addComment="addComment"/>
  </div>
</template>
<script>
import axios from "axios";
import PostBody from "./PostBody";
import PostComment from "./PostComment";
export default {
  name: "post",
  data: () => ({
    comments: []
  }),
  components: {
    PostBody,
    PostComment
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
    },
    commentNum() {
      return this.comments.length;
    }
  },
  methods: {
    addComment(commentText, clearInput) {
      const newComment = {
        text: commentText,
        postId: this.postId
      };
      axios.post(`http://localhost:3008/comments`, newComment).then(res => {
        console.log(res.data);
        this.comments.push(res.data);
        clearInput();
      });
    }
  }
};
</script>
