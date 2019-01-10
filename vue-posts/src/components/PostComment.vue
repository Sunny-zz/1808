<template>
  <div>
    <input v-model="commentTxt" type="text">
    <button @click="handleClick">评论</button>
    <ul v-if="reverseComments.length">
      <li v-for="comment in reverseComments" :key="comment.id">{{comment.txt}}</li>
    </ul>
    <div v-else>评论为空</div>
  </div>
</template>
<script>
export default {
  name: "postcomment",
  data: () => ({
    commentTxt: ""
  }),
  props: ["comments", "addComment"],
  methods: {
    handleClick() {
      this.addComment(this.commentTxt, this.clearInput);
      // $emit
    },
    clearInput() {
      this.commentTxt = "";
    }
  },
  computed: {
    // 计算的数据
    // computed 对象下的每一个属性都是一个计算数据，值要设置成一个 普通函数，并且需要返回一个值，这个返回的值就提供给组件使用。
    reverseComments() {
      return [...this.comments].reverse();
    }
  }
};
</script>
