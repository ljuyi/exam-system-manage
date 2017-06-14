<template>
  <div class="alert">
    <h1 class="title">{{option.title}}</h1>
    <div class="content">
      <p>题目内容</p>
      <div class="question">
        <textarea>{{items[index]['content']}}</textarea>
      </div>
      <div class="answer">
        <p>题目答案</p>
        <textarea>{{items[index]['answer']}}</textarea>
      </div>
      <div class="b">
        <div class="btn-wrapper" @click="commit">
          <btn :info="'确定'"></btn>
        </div>
        <div class="btn-wrapper" @click="cancle">
          <btn :info="'取消'"></btn>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import btn from 'components/button/button'
export default {
  data() {
    return {
    }
  },
  props: {
    option: {
      type: Object
    },
    items: {
      type: Array
    },
    index: {
      type: Number
    }
  },
  methods: {
    commit() {
      // 保存信息
      this.$emit('hideSwap', {index: this.index, question: this.items[this.index]['content'], answer: this.items[this.index]['answer']})
    },
    cancle() {
      // 不保存信息
      this.$emit('hideSwap', event.target)
    }
  },
  components: {
    btn
  }
}
</script>
<style lang="stylus">
.alert
  position: relative
  width: 100%
  height: 100%
  background: #fff
  border-radius: 10px
  .title
    line-height: 40px
    border-bottom: 1px #999 solid
  .content
    padding: 10px 20px
    p
      margin-top: 10px
      margin-bottom: 10px
      font-size: 14px
    .question
      width: 100%
    textarea
      display: inline-block
      box-sizing: border-box
      padding: 5px
      width: 100%
      height: 100px
      border-radius: 10px
      font-size: 14px
      color: #333
      &:focus
        outline: none
        border: 1px solid lightblue
    .answer
      .input-wrapper
        width: 100%
        height: 36px
    .b
      position: absolute
      width: 150px
      left: 50%
      margin-left: -75px
      bottom: 20px
      .btn-wrapper
        display: inline-block
        width: 68px
</style>
