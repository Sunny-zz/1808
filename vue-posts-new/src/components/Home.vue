<template>
  <div>
    <!-- <div>count:{{count}}</div> -->
    <!-- <button @click="addCount">+5</button> -->
    <div>{{posts.a}}</div>
    <div>{{posts.b}}</div>
    <ul v-if="posts.posts.length">
      <li v-for="post in posts.posts" :key="post.id">
        <router-link :to="`/post/${post.id}`">{{post.title}}</router-link>
      </li>
    </ul>
    <div v-else>请稍等。。。</div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "home",

  computed: {
    ...mapState(["posts"])
    // ...mapState({
    //   posts: state => state.posts.posts,
    //   a: state => state.posts.a,
    //   b: state => state.posts.b
    // })
    // 局部的 computed
  },
  // count() {
  //   return this.$store.state.count;
  // }
  // posts() {
  //   return this.$store.state.posts.posts;
  // }
  // mapState({
  //   posts: state => state.posts.posts,
  //   a: state => state.posts.a,
  //   b: state => state.posts.b
  // }),
  methods: {
    // addCount() {
    //   // 修改 store 的 count --->action---->mutation ----> state
    //   this.$store.dispatch("add", 5);
    // }
  },
  created() {
    this.$store.dispatch("getPosts");
  },
  mounted() {
    // 对页面的真实 dom 去操作
  }
};
</script>
