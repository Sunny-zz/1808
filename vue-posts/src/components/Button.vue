<template>
<div>
  <button>{{txt}}</button>
  <span>{{$slots.default}}</span>
</div>
  

</template>
<script>
// 使用 typescript 写 vue
// this.props.children
export default {
  name: "btn",
  props:['children','txt'],
  mounted(){
    console.log()
  }
};
</script>


