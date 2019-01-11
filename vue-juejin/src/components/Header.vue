<template>
  <header>
    <div class="logo">
      <router-link to="/">
        <img src="../assets/logo.png" alt>
      </router-link>
    </div>
    <ul>
      <li>
        <!-- /  /welcome/xxx -->
        <router-link :active-class=" isHome  ? 'active': ''" to="/">首页</router-link>
      </li>
      <li>
        <router-link active-class="active" to="/activities">动态</router-link>
      </li>
      <li>
        <router-link active-class="active" to="/topics">话题</router-link>
      </li>
    </ul>
  </header>
</template>
<script>
export default {
  name: "heade",
  computed: {
    isHome() {
      const { path } = this.$route;
      return path === "/" || path.indexOf("welcome") !== -1;
    }
  }
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
      a {
        color: #71777c;
      }
      a.active {
        color: #007fff;
      }
    }
  }
}
</style>

