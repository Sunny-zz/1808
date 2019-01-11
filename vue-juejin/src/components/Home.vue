<template>
  <div>
    <div class="home-head">
      <ul>
        <li>
          <router-link to="/">推荐</router-link>
        </li>
        <li>
          <router-link to="/welcome/frontend">前端</router-link>
        </li>
        <li>
          <router-link to="/welcome/android">安卓</router-link>
        </li>
        <li>
          <router-link to="/welcome/backend">后端</router-link>
        </li>
      </ul>
    </div>
    <!-- 给 路由 一个唯一的 key 值 当匹配到动态路由时也会重新创建组件 -->
    <router-view :key="$route.path"></router-view>
  </div>
</template>
<script>
export default {
  name: "home"
};
</script>

<style lang="scss" scoped>
.home-head {
  display: flex;
  height: 60px;
  border-bottom: 1px solid #ccc;
  ul {
    padding-left: 0;
    margin: 0;
    display: flex;
    list-style: none;
    margin-left: 100px;
    li {
      margin-right: 20px;
      line-height: 60px;
      a {
        color: #71777c;
      }
      a.router-link-exact-active {
        color: #007fff;
      }
    }
  }
}
</style>


