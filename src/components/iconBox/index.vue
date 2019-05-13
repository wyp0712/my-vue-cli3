<template>
  <div class="icon-box">
     <a class="icon-box-item" v-for="(item,index) in iconArr" :key="index">
       <div>{{item.title}}</div>
       <div>{{item.name}}</div>
     </a>
  </div>
</template>
<script>
export default {
  data () {
    return {
      msg: 'iconBox',
      iconArr: [
        {
          'title': '小',
          'name': 'HTML'
        },
        {
          'title': '火',
          'name': 'HTML'
        },
        {
          'title': '柴',
          'name': 'HTML'
        },
        {
          'title': '的',
          'name': 'HTML'
        },
        {
          'title': '蓝',
          'name': 'HTML'
        },
        {
          'title': '色',
          'name': 'HTML'
        },
        {
          'title': '理',
          'name': 'HTML'
        },
        {
          'title': '想',
          'name': 'HTML'
        }
      ]
    }
  }
}
</script>

<style lang='scss'>
%juzhong {
    display: flex;
    justify-content: center;
    align-items: center;
}
  .icon-box{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    .icon-box-item {
      width: 25%;
      @extend %juzhong;
      flex-direction: column;
      &:nth-child(2) {
        div{
          &:nth-child(1) {
            background: #ff4136;
          }
        }
      }
      &:nth-child(3) {
        div{
          &:nth-child(1) {
            background: #f012be;
          }
        }
      }
      &:nth-child(4) {
        div{
          &:nth-child(1) {
            background: #3d9970;
          }
        }
      }
      &:nth-child(5) {
        div{
          &:nth-child(1) {
            background: #0074d9;
          }
        }
      }
      &:nth-child(6) {
        div{
          &:nth-child(1) {
            background: #ff851b;
          }
        }
      }
      &:nth-child(7) {
        div{
          &:nth-child(1) {
            background: #85144b;
          }
        }
      }
      &:nth-child(8) {
        div{
          &:nth-child(1) {
            background: #aaa;
          }
        }
      }
      div {
        &:nth-child(1) {
          @extend %juzhong;
          width: calc(.45rem *2);
          height: calc(.45rem *2);
          border-radius: 50%;
          background: lightblue;
          margin:calc(0.1rem *2) 0;
        }
         &:nth-child(2) {
          @extend %juzhong;
          width: calc(.45rem *2);
          height: calc(.15rem *2);
          margin-top: calc(0.025rem *2);
        }
      }
    }
  }
</style>
