<template>
  <div class="special-recommendation">
    <div class="special-header">
      <a href="">专题推荐</a>
      <a href="">更多专题 ></a>
    </div>
    <div class="special-main">
      <div class="special-item" v-for="(item, index) in specialArr" :key="index">
        <h1>{{item.title}}</h1>
        <p>{{item.con}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'specialRecommendation',
      specialArr: [
        {
          title: 'css效果',
          con: '使用css实现的各种效果'
        },
        {
          title: '继承',
          con: '不理解继承就无法真正理解js'
        },
        {
          title: '表单',
          con: '分享方法与思路,让表单与众不同'
        },
        {
          title: '作用域',
          con: '深入理解js作用域'
        }
      ]
    }
  }
}
</script>
<style lang="scss">
  .special-recommendation {
     width: 90%;
     margin: 0 auto;
     margin-top:calc(.2rem *2);
  }
  .special-header {
    width: 100%;
    height: calc(.35rem *2);
    display: flex;
    justify-content: space-between;
  }
  .special-main {
    width: 100%;

    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .special-item {
      width: calc(50% - 20px);
      height: calc(.92rem *2);
      background: #0074d9;
      border-radius: 6px;
      color: #fff;
      line-height: 2;
      padding: 10px;
      margin: 10px;
      box-shadow: 0 4px 16px 0 #0074d9;
      h1 {

      }
      p {
        text-indent:1em;
      }
    }
  }
</style>
