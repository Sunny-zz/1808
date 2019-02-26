<template>
  <div>
    <h2>我是 user 页</h2>
    <span class="number">{{num}}</span>
    <span class="number">{{num1}}</span>
  </div>
</template>

<script>
export default {
  // asyncData  组件内部一步获取数据更新 data(页面组件才能用)
  // 该函数接受一个 context 作为参数
  data() {
    return {
      num: 0,
      num1: 2
    };
  },
  async asyncData({ $axios }) {
    const res = await $axios.get("http://localhost:3008/data");
    // asyncData 函数 需要返回一个对象，该对象会与该页面的 data 合并
    // 因为该函数内的 this 并不是该组件所以不能通过 this.num 访问组件的 data，要获取某些数据的话需要在 context 对象内查找
    return {
      num: res.data.num,
      num1: 100
    };
  }
  // created() {
  //   this.$axios.get("http://localhost:3008/data").then(res => {
  //     this.num = res.data.num;
  //   });
  // }
};
</script>

<style>
.number {
  display: block;
  text-align: center;
}
</style>
