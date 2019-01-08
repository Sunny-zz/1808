<template>
  <div>
    <ul v-if="posts.length">
      <li v-for="post in posts" :key="post.id">{{post.title}}</li>
    </ul>
    <div v-else>请稍等。。。</div>
  </div>
</template>
<script>
export default {
  name: "home",
  data: () => ({
    posts: [
      {
        id: 1,
        title: "vue",
        body: "vue 好 vue 棒"
      },
      {
        id: 2,
        title: "react",
        body: "react 牛"
      }
    ]
  })
};
</script>
