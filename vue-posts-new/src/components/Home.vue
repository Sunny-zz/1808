<template>
  <div>
    <!-- <div>count:{{count}}</div> -->
    <!-- <button @click="addCount">+5</button> -->
    <ul v-if="posts.length">
      <li v-for="post in posts" :key="post.id">
        <router-link :to="`/post/${post.id}`">{{post.title}}</router-link>
      </li>
    </ul>
    <div v-else>请稍等。。。</div>
  </div>
</template>
<script>
export default {
  name: "home",

  computed: {
    // count() {
    //   return this.$store.state.count;
    // }
    posts() {
      return this.$store.state.posts.posts;
    }
  },
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
