<template>
  <header class="header">
    <div class="header-left">
      <span class="header-logo"></span>
      <span class="header-title">前端小站</span>
    </div>
    <div class="header-right">
      <span>我</span>
    </div>
  </header>
</template>

<script>
export default {
  data () {
    return {
      msg: 'test'
    }
  }
}
</script>

<style lang="scss">
.header {
  width: 100vw;
  height: calc(0.45rem * 2);
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ccc;
  .header-left {
    flex: 1;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: 3%;
    .header-logo {
      display: inline-block;
      width: calc(0.35rem * 2);
      height: calc(0.35rem * 2);
      background: url("../../static/images/logo.svg") no-repeat;
      background-size: contain;
    }
    .header-title {
      line-height: calc(0.45rem * 2);
      padding-left: 6%;
      font-size: 14px;
      width: 2rem;
    }
  }
  .header-right {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    padding-right: 3%;
    span {
      display: inline-block;
      width: 35px;
      height: 35px;
      border-radius: 50%;
      background: lightblue;
      text-align: center;
      line-height: 35px;
      font-weight: bold;
    }
  }
}
</style>
