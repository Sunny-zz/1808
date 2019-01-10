<template>
  <header>
    <div class="logo">
      <img src="../assets/logo.png" alt>
    </div>
    <ul>
      <li>首页</li>
      <li>动态</li>
      <li>话题</li>
    </ul>
  </header>
</template>
<script>
export default {
  name: "heade"
};
</script>
<style lang="scss" scoped>
header {
  display: flex;
  height: 60px;
  padding-left: 40px;
  align-items: center;
  background-color: #fff;
  .logo {
    margin-right: 20px;
    display: flex;
    align-items: center;
    img {
      width: 40px;
    }
  }
  ul {
    display: flex;
    padding-left: 0;
    margin: 0;
    list-style: none;
    li {
      width: 70px;
      line-height: 70px;
      text-align: center;
    }
  }
}
</style>

