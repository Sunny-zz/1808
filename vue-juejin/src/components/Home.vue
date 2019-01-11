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
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "home"
};
</script>



