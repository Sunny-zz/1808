<template>
  <div>
    <h3>评论</h3>
    <input type="text" v-model.trim="commentText">
    <button @click="createComment">评论</button>
    <ul v-if="comments.length">
      <li v-for="comment in comments" :key="comment.id">{{comment.text}}</li>
    </ul>
    <div v-else>请添加评论</div>
  </div>
</template>
<script>
export default {
  name: "postcomment",
  props: ["comments", "addComment"],
  data: () => ({
    commentText: ""
  }),
  methods: {
    createComment() {
      this.addComment(this.commentText, this.clearInput);
    },
    clearInput() {
      this.commentText = "";
    }
  }
};
</script>