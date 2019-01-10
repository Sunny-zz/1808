<template>
  <div>
    <Header/>
    <div class="wrap">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import Header from "./components/Header";
export default {
  name: "app",
  components: {
    Header
  }
};
</script>
<style>
body {
  margin: 0;
  background-color: #f4f5f5;
}
a {
  text-decoration: none;
}
* {
  box-sizing: border-box;
}
.wrap {
  margin: 20px;
  background-color: #fff;
}
</style>
