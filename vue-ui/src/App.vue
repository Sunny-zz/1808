<template>
  <div id="app">
    <el-input v-model="input" placeholder="请输入内容"></el-input>
    <el-button>el-button</el-button>
  </div>
</template>

<script>
export default {
  name: "app",
  data: () => ({
    input: ""
  })
};
</script>


