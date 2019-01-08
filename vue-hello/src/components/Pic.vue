<template>
  <div class="pic">
    <img :class="{show: index === 0 }" src="../assets/1.jpg" alt>
    <img :class="{show: index === 1 }" src="../assets/2.jpg" alt>
    <img :class="{show: index === 2 }" src="../assets/3.jpg" alt>
    <img :class="{show: index === 3 }" src="../assets/4.jpg" alt>
    <ul class="list">
      <li @click="index = 0" :class="{active: index === 0 }"></li>
      <li @click="index = 1" :class="{active: index === 1 }"></li>
      <li @click="index = 2" :class="{active: index === 2 }"></li>
      <li @click="index = 3" :class="{active: index === 3 }"></li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "pic",
  data:() => ({
    index: 1
  }),
  // methods:{
  //   change(){
  //     console.log(this.index);
  //   }
  // }
  mounted(){
    console.log(1);
    this.index = 3
  }
};
</script>
<style scoped>
.pic {
  width: 590px;
  height: 470px;
  position: relative;
  margin: 0 auto;
}
.pic > img{
  position: absolute;
  top: 0;
  bottom: 0;
  opacity: 0;
  transition: opacity 0.75s linear;

}
.pic > img.show{
  opacity: 1;
  z-index: 1;
}
.list{
  position: absolute;
  padding-left: 0;
  list-style: none;
  bottom: 20px;
  left: 20px;
  display: flex;
  z-index: 2;
}
.list li {
  width: 20px;
  height: 20px;
  margin-right: 4px;
  border-radius: 50%;
  background-color: #fff;
}
.list li.active{
  background-color: teal;
}
</style>


