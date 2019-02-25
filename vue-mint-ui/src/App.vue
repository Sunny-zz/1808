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
//  vue的项目部署到服务器
// 一. github 免费服务
// 将你的源代码上传到 git 仓库，在仓库内新建一个分支 gh-pages,通过插件或者手动将 dist 文件夹下的所有文件上传到该分支，访问 yourgitname.github.io/仓库名 既能看到自己的项目了
//  注意： package.json 文件下要写一个  homepage: 该仓库地址
// 如何将 dist下的文件 上传到 gh-pages
// 1. 手动新建分支
// 2. 使用 gh-pages 包帮助我们自动上传
// 二. netlify 免费服务
// 只需要将源代码上传到git 仓库，在 netlify 网站找到对应的仓库不需要添加 homepage，选择正确的文件以及命令即可
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
