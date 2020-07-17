<template>
  <div>
    <nav-bar class="home-nav">
      <template v-slot:center>
        {{$route.meta.title}}
      </template>
    </nav-bar>
    <h1>我是home页面</h1>
    <router-link to="/detail">点击进入详情页</router-link>
  </div>
</template>

<script>
  import {testHttpBin,testHttpBinPost} from '@/service/homeApi'
  import NavBar from '@/components/NavBar'

  export default {
    name:"Home",
    components:{
      NavBar
    },
    data(){
      return{
        info:{},
        infoPost:{}
      }
    },
    methods:{
      getInfo(){
        testHttpBin().then(res=>{
          this.info = res
        })
      },
      getInfoPost(){
        testHttpBinPost().then(res=>{
          this.infoPost = res
        })
      }
    },
    created(){
      // this.getInfo();
      this.getInfoPost()
    }
  }
</script>

<style scoped>
  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
    position: relative;
    z-index: 9;
  }
</style>