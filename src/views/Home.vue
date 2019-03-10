<template>
  <div class='home'>
    <!-- <img alt='Vue logo' src='../assets/logo.png'> -->
    <!-- <HelloWorld msg='Welcome to Your Vue.js App'/> -->
    <HeaderBar></HeaderBar>
    <MainBody></MainBody>
    <FooterBar></FooterBar>
    <Dialog v-show="dialogFlag"></Dialog>
  </div>
</template>

<script>
import '@/static/css/reset.css'
import './Home.scss'
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import HeaderBar from '@/components/headerBar/index.vue'
import FooterBar from '@/components/footerBar/index.vue'
import Dialog from '@/components/dialog/index.vue'
import MainBody from '@/components/mainBody/index.vue'

export default {
  name: 'home',
  data () {
    return {
      dialogFlag: false
    }
  },
  components: {
    FooterBar,
    HeaderBar,
    Dialog,
    MainBody
  }
}
</script>
