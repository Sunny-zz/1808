<template>
  <div>
    <PostBody :postId="postId"/>
    <PostComment :comments="comments" :postId="postId"/>
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
      return this.$store.state.comments.comments;
    }
  }
};
</script>
