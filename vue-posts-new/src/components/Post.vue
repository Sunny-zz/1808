<template>
  <div>
    <PostBody :postId="postId" :commentNum="commentNum"/>
    <PostComment :comments="comments" :addComment="addComment"/>
  </div>
</template>
<script>
import PostBody from "./PostBody";
import PostComment from "./PostComment";
export default {
  name: "post",
  components: {
    PostBody,
    PostComment
  },
  created() {
    this.$store.dispatch("getComments", this.postId);
  },
  computed: {
    postId() {
      return this.$route.params.id;
    },
    comments() {
      return this.$store.state.comments;
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
