<template>
  <div class="home-wrap">
    <h1 class="home">home</h1>
    <mt-loadmore
      :bottom-method="loadBottom"
      ref="loadmore"
      bottomPullText
      bottomDropText="加载更多..."
      :bottom-all-loaded="allLoaded"
      class="load"
    >
      <ul class="list">
        <li v-for="num in arr" :key="num">{{num}}</li>
      </ul>
    </mt-loadmore>
  </div>
</template>
<script>
export default {
  name: "home",
  data: () => ({
    arr: [1, 2, 3, 4, 5, 6, 7, 8],
    allLoaded: false
  }),
  methods: {
    loadBottom() {
      console.log(this.$refs.loadmore);
      // 更新 arr 更新完毕之后执行 loadmore 的 onBottomLoaded() 方法
      setTimeout(() => {
        this.arr.push(9, 10, 11, 12, 13);
        // 如果数据全部更新完毕了
        this.allLoaded = true;
        this.$refs.loadmore.onBottomLoaded();
      }, 1000);
    }
  }
};
</script>
<style>
ul.list {
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
}
.list li {
  text-align: center;
  font-size: 20px;
  line-height: 60px;
  border-bottom: 1px solid #ccc;
}
.load {
  /* calc 以及  vh 如果兼容失效了，那么我们直接使用原生js 获取真实 dom 节点直接设置高度 */
  height: calc(100vh - 90px - 55px);
  overflow: auto;
}
</style>

