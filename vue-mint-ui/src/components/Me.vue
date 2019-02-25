<template>
  <div>
    <h1 class="me">me</h1>
    <div>
      <h3>{{userInfo.name}}</h3>
      <img v-if="userInfo.imgUrl" :src="userInfo.imgUrl" alt>
    </div>
    <button @click="showUserImg">show</button>
  </div>
</template>
<script>
export default {
  name: "me",
  data: () => ({
    userInfo: {
      name: "sunny-zz"
    }
  }),
  methods: {
    showUserImg() {
      // this.userInfo.imgUrl =
      //   "http://img2.imgtn.bdimg.com/it/u=1843801647,2311626713&fm=26&gp=0.jpg";
      // this.userInfo = { ...this.userInfo };

      // 高级的处理方案
      // this.$set 更新对象下的某个属性的属性值，不仅会修改 data 并且会使视图更新
      // this.$set(obj,attrName,attrValue)  obj是目标对象(要修改的对象) attrName属性名(那个属性要被修改)  attrValue属性值(修改的属性值的最终结果)

      this.$set(
        this.userInfo,
        "imgUrl",
        "http://img2.imgtn.bdimg.com/it/u=1843801647,2311626713&fm=26&gp=0.jpg"
      );
      // console.log(this);
    }
  }
};
</script>
