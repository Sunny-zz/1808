<template>
  <div>
    <h1>{{post.title}}</h1>
    <p>{{post.body}}</p>
    <button @click="$emit('say')">按钮</button>
    <span>评论数{{num}}</span>
  </div>
</template>
<script>
export default {
  name: "postbody",
  props: ["post", "comments"],
  computed: {
    num() {
      return this.comments.length;
    }
  }
};
</script>
