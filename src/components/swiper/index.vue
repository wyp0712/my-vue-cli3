<template>
  <div class="swiper-box">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="../../static/images/2.png" alt="">
        </div>
        <div class="swiper-slide">
          <img src="../../static/images/3.png" alt="">
        </div>
        <div class="swiper-slide">
           <img src="../../static/images/4.png" alt="">
        </div>
         <div class="swiper-slide">
           <img src="../../static/images/5.png" alt="">
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
      <!-- 如果需要导航按钮 -->
      <!-- <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div> -->
      <!-- 如果需要滚动条 -->
      <!-- <div class="swiper-scrollbar"></div> -->
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper'
export default {
  data () {
    return {
      msg: 'swiperComponents'
    }
  },
  created () {},
  mounted () {
    var mySwiper = new Swiper('.swiper-container', {
      // direction: 'horizontal',
      loop: true
    })
    console.log(mySwiper, 'mySwiper')
    // // Swiper 推荐课程
    // var swiper2 = new Swiper('.course_swiper_wrap .swiper-container', {
    //   slidesPerView: 3,
    //   paginationClickable: true,
    //   nextButton: '.swiper-button-next-01',
    //   prevButton: '.swiper-button-prev-01',
    //   spaceBetween: 30,
    //   freeMode: true,
    //   loop: true
    // })
  }
}
</script>
<style lang="scss">
@mixin setBottomBorder($color:#ccc) {
  & {
    position: relative;
  }

  &::after {
    content: "";
    display: block;
    width: 100%;
    height: 1px;
    position: absolute;
    left:0;
    bottom:0;
    transform: scaleY(.5);
  }
}
.swiper-container {
  width: 100%;
  height: 3rem;
  .swiper-wrapper {
    width: 100%;
    height: 100%;
    .swiper-slide {
      width: 100%;
      height: 100%;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
