<template>
  <div>
    <div v-if="post">
      <h1>{{post.title}}</h1>
      <p>{{post.body}}</p>
    </div>
    <div v-else>请稍等。。。。</div>
    <div>
      <input v-model="commentTxt" type="text">
      <button @click="addComment">评论</button>
      <ul v-if="comments.length">
        <li v-for="comment in reverseComments" :key="comment.id">{{comment.txt}}</li>
      </ul>
      <div v-else>评论为空</div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
// 路由的 props
export default {
  name: "post",
  data: () => ({
    post: null,
    comments: [],
    commentTxt: ""
  }),
  computed: {
    // 计算的数据
    // computed 对象下的每一个属性都是一个计算数据，值要设置成一个 普通函数，并且需要返回一个值，这个返回的值就提供给组件使用。
    reverseComments() {
      return [...this.comments].reverse();
    }
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
    addComment() {
      const { id } = this.$route.params;
      const newComment = {
        txt: this.commentTxt,
        postId: id
      };
      axios.post(`http://localhost:3008/comments`, newComment).then(res => {
        this.comments.push(res.data);
        this.commentTxt = "";
      });
    }
  }
  // mounted() {
  //   // 组件在页面渲染完毕
  //   // 操作 dom 节点
  // }
};
</script>
