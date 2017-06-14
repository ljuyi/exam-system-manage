<template>
  <div class="alert">
    <h1 class="title">{{option.title}}</h1>
    <div class="content">
      <p>题目内容</p>
      <div class="question">
        <textarea></textarea>
      </div>
      <div class="answer">
        <p>题目答案</p>
        <div class="input-wrapper">
          <inputtext></inputtext>
        </div>
      </div>
      <div class="kind">
        <p>题目类型</p>
        <div class="dropselect-wrapper">
          <dropselect :option="dropOption"></dropselect>
        </div>
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
import dropselect from 'components/dropselect/dropselect'
import inputtext from 'components/inputtext/inputtext'
import btn from 'components/button/button'
export default {
  data() {
    return {
      dropOption: {
        type: '请选择题目类型',
        select: [
          '全部',
          '软件设计师',
          '程序员',
          '计算机网络',
          'java后台开发'
        ]
      }
    }
  },
  props: {
    option: {
      type: Object
    }
  },
  methods: {
    commit() {
      // 保存信息
     this.$emit('hideSwap', event.target)
    },
    cancle() {
      // 不保存信息
      this.$emit('hideSwap', event.target)
    }
  },
  components: {
    dropselect,
    inputtext,
    btn
  }
}
</script>
<style lang="stylus">
.alert
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
      height: 100px
      textarea
        display: inline-block
        box-sizing: border-box
        padding: 5px
        width: 100%
        height: 100%
        border-radius: 10px
        &:focus
          outline: none
          border: 1px solid lightblue
    .answer
      .input-wrapper
        width: 100%
        height: 36px
    .b
      width: 150px
      margin: 20px auto
      .btn-wrapper
        display: inline-block
        width: 68px
</style>
