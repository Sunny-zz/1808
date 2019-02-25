<template>
  <div>
    <h3>我是第{{$route.params.id}}篇文章页</h3>
  </div>
</template>
<script>
export default {
  // 路由参数校验 检测路由参数是否满足条件
  validate({ params }) {
    // 必须是number类型
    return /^\d+$/.test(params.id);
  }
};
</script>
