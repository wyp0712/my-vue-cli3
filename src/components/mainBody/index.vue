<template>
  <main class="main bscroll" ref="bscroll">

      <div class="bscroll-container content">
        <section class="sec">
          <img src="../../static/images/2.png" alt>
        </section>
        <section class="sec">
          <img src="../../static/images/3.png" alt>
        </section>
        <section class="sec">
          <img src="../../static/images/4.png" alt>
        </section>
        <section class="sec">
          <img src="../../static/images/5.png" alt>
        </section>
        <section class="sec">
          <img src="../../static/images/2.png" alt>
        </section>
        <section class="sec">
          <img src="../../static/images/2.png" alt>
        </section>
        <section class="sec">
          <img src="../../static/images/2.png" alt>
        </section>
        <section class="sec">
          <img src="../../static/images/2.png" alt>
        </section>
        <section class="sec">
          <img src="../../static/images/2.png" alt>
        </section>
      </div>

  </main>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'mainBody',
  data () {
    return {
      msg: 'better'
    }
  },
  created () {},
  mounted () {
    this.$nextTick(() => {
      let bscrollDom = this.$refs.bscroll
      this.aBScroll = new BScroll(bscrollDom, {})
    })
  }
}
</script>
