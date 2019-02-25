<template>
  <div id="app">
    <router-view></router-view>
    <mt-tabbar v-model="selected">
      <mt-tab-item id="home">
        <img slot="icon" src="./assets/1.png">
        首页
      </mt-tab-item>
      <mt-tab-item id="search">
        <img slot="icon" src="./assets/1.png">
        发现
      </mt-tab-item>
      <mt-tab-item id="book">
        <img slot="icon" src="./assets/1.png">
        书架
      </mt-tab-item>
      <mt-tab-item id="me">
        <img slot="icon" src="./assets/1.png">
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  name: "app",
  data: () => ({
    selected: "home"
  }),
  // updated() {
  //   this.$router.history.push(`/${this.selected}`);
  // }
  watch: {
    selected() {
      const url = this.selected === "home" ? "/" : `/${this.selected}`;
      this.$router.history.push(url);
    }
  }
};
</script>

<style >
body {
  margin: 0;
}

.mint-tabbar {
  position: fixed;
}
.mint-tabbar > .mint-tab-item.is-selected {
  background-color: #eaeaea;
  color: red;
}
</style>
