<template>
  <div v-if="post">
    <h2>{{post.title}}</h2>
    <p>{{post.content}}</p>
  </div>
  <div v-else>稍等片刻</div>
</template>
<script>
import axios from "axios";
export default {
  name: "post",
  created() {
    const { id } = this.$route.params;
    axios.get(`http://localhost:3008/posts/${id}`).then(res => {
      this.post = res.data;
    });
  },
  data: () => ({
    post: null
  })
};
</script>
