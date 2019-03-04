<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <HeaderBar></HeaderBar>
  </div>
</template>

<script>
import '@/static/css/reset.css'
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import HeaderBar from '@/components/headerBar/index.vue'

export default {
  name: 'home',
  components: {
    // HelloWorld,
    HeaderBar
  }
}
</script>
