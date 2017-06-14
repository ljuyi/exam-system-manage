<template>
  <div class="alert">
    <h1 class="title">{{option.title}}</h1>
    <div class="content">
      <div class="question">
        <textarea name="" id="" cols="30" rows="10"></textarea>
      </div>
      <div class="answer">
        <input type="text">
      </div>
      <div class="dropselect-wrapper">
        <dropselect :option="dropOption"></dropselect>
      </div>
    </div>
  </div>
</template>
<script>
import dropselect from 'components/dropselect/dropselect'
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
  components: {
    dropselect
  }
}
</script>
<style lang="stylus">
.alert
  width: 100%
  height: 100%
  background: #fff
  border-radius: 10px
</style>
