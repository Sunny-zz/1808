<template>
  <div>
    <div v-if="post">
      <PostBody :post="post" :comments="comments"/>
      <PostComment :comments="comments" :addComment="addComment"/>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import PostBody from "./PostBody";
import PostComment from "./PostComment";
// 路由的 props
export default {
  name: "post",
  data: () => ({
    post: null,
    comments: []
  }),
  components: {
    PostBody,
    PostComment
  },
  created() {
    // 请求数据
    // 整个项目的路由 我们创建的 router.js
    // console.log(this.$router);
    // 当前组件接收到的 路由 props
    // console.log(this.$route);
    const { id } = this.$route.params;
    axios.get(`http://localhost:3008/posts/${id}`).then(res => {
      this.post = res.data;
    });
    axios.get(`http://localhost:3008/comments?postId=${id}`).then(res => {
      this.comments = res.data;
    });
  },
  methods: {
    addComment(commentTxt, clearInput) {
      console.log(2);

      const { id } = this.$route.params;
      const newComment = {
        txt: commentTxt,
        postId: id
      };
      axios.post(`http://localhost:3008/comments`, newComment).then(res => {
        this.comments.push(res.data);
        // this.commentTxt = "";
        clearInput();
      });
    }
  }
  // mounted() {
  //   // 组件在页面渲染完毕
  //   // 操作 dom 节点
  // }
};
</script>
