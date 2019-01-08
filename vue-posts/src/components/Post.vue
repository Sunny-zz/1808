<template>
  <div>
    post
    <span>{{$route.params.id}}</span>
  </div>
</template>
<script>
// 路由的 props
export default {
  name: "post"
  // created() {
  //   // 请求数据
  //   // 整个项目的路由 我们创建的 router.js
  //   console.log(this.$router);
  //   // 当前组件接收到的 路由 props
  //   console.log(this.$route);
  // },
  // mounted() {
  //   // 组件在页面渲染完毕
  //   // 操作 dom 节点
  // }
};
</script>
