<template>
  <div id="app">
    <h1>hello vue</h1>
    <button :disabled=" num === 1 ? true : false " @click="changeNum('-')">-</button>
    <span :title="title">{{num}}</span>
    <button @click="changeNum('+')">+</button>
    <!-- <button @click="num ++">+</button> -->
    <br>
    <button @click="qieHuan">切换</button>
    <!-- <div class="box" :style="{display: show ? 'block' : 'none'}" ></div> -->
    <!-- <div :class="`box ${show?'': 'hide'}`"></div> -->
    <div :class="{hide: !show,box:true}"></div>
    <!-- <div :class="['box',show?'':'hide']"></div> -->
    <Button></Button>
  </div>
</template>

<script>
// vue 组件中  templete 内如何使用变量
// 起始标签和结束标签之间使用的话 需要用 双大括号包裹
// 起始标签内如何使用变量 使用 v-bind 指令  简写:
// 比如 title 属性值是 data 下的 title 的值   v-bind:title = 'title'
// templete 可以直接使用 data 下的数据,不用 this 调用
//  vue 下的 methods 属性是用来给组件定义方法的 比如事件函数
// methods 的值是一个对象，该对象下的每个属性都是一个方法

// 事件绑定 指令  v-on:事件名   简写是  @事件名
// 事件的事件函数可以使用  '方法名'  直接调用  methods 属性下的方法
// vue 的事件绑定 可以赋值为 一步操作   @click = 'num ++' 或 @click ='add(1)'

import Button from "./components/Button";
export default {
  name: "app",
  components: {
    Button
  },
  data: () => ({
    num: 10,
    title: "number",
    show: true
  }),
  methods: {
    // 如果 methods 下的方法想要访问或修改 相关组件下的属性时 需要将方法定义成普通函数不能定义成箭头函数
    // 如何修改 组件的 data ，直接给 this.$data 下的属性重新赋值或直接修改即可
    // add() {
    //   this.$data.num++;
    // },
    // sub() {
    //   this.$data.num--;
    // }
    changeNum(type) {
      if (type === "+") {
        this.$data.num++;
      } else {
        this.$data.num--;
      }
    },
    qieHuan() {
      this.$data.show = !this.$data.show;
    }
  }
};
</script>

<style>
.box {
  width: 200px;
  height: 200px;
  background: teal;
}
.hide {
  display: none;
}
</style>
