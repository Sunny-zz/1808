<template>
  <div id="app">
    <h1>hello vue</h1>
    <Button txt='切换1'></Button>
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
    <h2 v-if="ok">hello vue</h2>
    <!-- <h2 v-else-if="ok">hello vue</h2> -->
    <h2 v-else>hello react</h2>
    <ul v-if="posts.length">
      <li v-for="post in posts" :key="post.id">{{post.title}}</li>
    </ul>
    <div v-else>请稍等。。。</div>
    <div v-for="value in userInfo" :key="value">{{value}}</div>
    <label for>姓名:</label>
    <input type="text" v-model.trim="user.username">
    <label for>年龄:</label>
    <input type="text" v-model.number="user.userage">
    <button @click="submit">提交</button>
    <h4>你喜欢的水果有哪些？</h4>
    <div>
      <label for>榴莲</label>
      <input v-model="fruits" value="榴莲" type="checkbox">
      <label for>杨梅</label>
      <input v-model="fruits" value="杨梅" type="checkbox">
      <label for>草莓</label>
      <input v-model="fruits" value="草莓" type="checkbox">
      <label for>牛油果</label>
      <input v-model="fruits" value="牛油果" type="checkbox">
      <label for>蛇皮果</label>
      <input v-model="fruits" value="蛇皮果" type="checkbox">
    </div>
    <button @click="submit">提交</button>
    <label for>同意</label>
    <input type="checkbox" v-model="agree" true-value="20" false-value="10">
    <Pic/>
    <div class="pic"></div>
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
import Pic from "./components/Pic";
export default {
  name: "app",
  components: {
    Button,
    Pic
  },
  data: () => ({
    num: 10,
    title: "number",
    show: true,
    ok: false,
    posts: [
      {
        id: 1,
        title: "vue",
        txt: "ajkdsg kajsg askdh kasdh "
      },
      {
        id: 2,
        title: "vuex",
        txt: "917253871258315 "
      }
    ],
    userInfo: {
      name: "小花儿",
      age: 18
    },
    user: {
      username: "",
      userage: ""
    },
    fruits: [],
    agree: "10"
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
    },
    submit() {
      // console.log(this.$data.user);
      // console.log(this.$data.fruits);
      console.log(this.$data.agree);
    }
  }
};
</script>

<style scoped>
.box {
  width: 200px;
  height: 200px;
  background: teal;
}
.hide {
  display: none;
}
</style>
