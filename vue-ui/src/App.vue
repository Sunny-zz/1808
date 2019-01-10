<template>
  <div id="app">
    <el-input size="mini" style="width: 40%;" :autofocus="true" v-model="input" placeholder="请输入内容"></el-input>
    <el-button size="mini" @click="handleClick">el-button</el-button>
    <transition name="el-zoom-in-center">
      <div v-show="show2" class="transition-box">.el-zoom-in-center</div>
    </transition>
    <transition name="el-zoom-in-top">
      <div v-show="show2" class="transition-box">.el-zoom-in-top</div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "app",
  data: () => ({
    input: "",
    show2: true
  }),
  methods: {
    handleClick() {
      console.log(this.input);
      this.show2 = !this.show2;
    }
  }
};
</script>

<style>
.transition-box {
  margin-bottom: 10px;
  width: 200px;
  height: 100px;
  border-radius: 4px;
  background-color: #409eff;
  text-align: center;
  color: #fff;
  padding: 40px 20px;
  box-sizing: border-box;
  margin-right: 20px;
}
</style>

