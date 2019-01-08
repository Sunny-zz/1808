<template>
  <div>
    <div v-if="post">
      <h1>{{post.title}}</h1>
      <p>{{post.body}}</p>
    </div>
    <div v-else>请稍等。。。。</div>
  </div>
</template>
<script>
import axios from "axios";
// 路由的 props
export default {
  name: "post",
  data: () => ({
    post: null
  }),
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
  }
  // mounted() {
  //   // 组件在页面渲染完毕
  //   // 操作 dom 节点
  // }
};
</script>
