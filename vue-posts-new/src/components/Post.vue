<template>
  <div>postId: {{postId}}</div>
</template>
<script>
export default {
  name: "post",
  computed: {
    postId() {
      return this.$route.params.id;
    }
  }
};
</script>
