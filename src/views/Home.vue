<template>
  <div class='home'>
    <!-- <img alt='Vue logo' src='../assets/logo.png'> -->
    <!-- <HelloWorld msg='Welcome to Your Vue.js App'/> -->
    <HeaderBar></HeaderBar>
    <div class="main">
      <Swiper></Swiper>
      <IconBox></IconBox>
      <specialRecommendation></specialRecommendation>
    </div>

    <!-- <MainBody></MainBody> -->
    <!-- <FooterBar></FooterBar> -->
    <Dialog v-show="dialogFlag"></Dialog>
  </div>
</template>

<script>
// import '@/static/css/reset.css'
import './Home.scss'
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import HeaderBar from '@/components/headerBar/index.vue'
// import FooterBar from '@/components/footerBar/index.vue'
import Dialog from '@/components/dialog/index.vue'
// import MainBody from '@/components/mainBody/index.vue'
import Swiper from '@/components/swiper/index.vue'
import IconBox from '@/components/iconBox/index.vue'
import specialRecommendation from '@/components/specialRecommendation/index.vue'

export default {
  name: 'home',
  data () {
    return {
      dialogFlag: false
    }
  },
  components: {
    // FooterBar,
    HeaderBar,
    Dialog,
    // MainBody,
    Swiper,
    IconBox,
    specialRecommendation
  }
}
</script>
