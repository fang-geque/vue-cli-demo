<template>
  <div>
    <NavBar class="nav-bar">
      <div slot="left" @click="leftClick"> 返回 </div>
      <div slot="center">{{$route.meta.title}}</div>
    </NavBar>
    <h2>我是详情页</h2>
    <h2>我需要navbar</h2>
    <h2>但不需要tabbar</h2>
  </div>
</template>

<script>
  import NavBar from '@/components/NavBar'

  export default {
    name: "Detail",
    components:{
      NavBar
    },

    methods:{
      leftClick(){
        this.$router.go(-1)
      }
    }
  }
</script>

<style scoped>
 .nav-bar{
    background-color: var(--color-tint);
    color: #fff;
    position: relative;
    z-index: 9;
 }
</style>