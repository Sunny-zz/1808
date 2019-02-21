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
  props: ["comments", "postId"],
  data: () => ({
    commentText: ""
  }),
  methods: {
    createComment() {
      const newComment = {
        text: this.commentText,
        postId: this.postId
      };
      // dispatch 和 commit 只能传递一个载荷数据,想传递多个数据请使用对象形式
      this.$store.dispatch("addComment", {
        newComment,
        clearInput: this.clearInput
      });
    },
    clearInput() {
      this.commentText = "";
    }
  }
};
</script>