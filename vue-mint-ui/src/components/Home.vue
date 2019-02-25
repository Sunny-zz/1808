<template>
  <div>
    <h1 class="home">home</h1>
    <mt-loadmore :bottom-method="loadBottom" ref="loadmore" :bottom-all-loaded="allLoaded">
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
    arr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    allLoaded: false
  }),
  methods: {
    loadBottom() {
      console.log(this.$refs.loadmore);
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
</style>

