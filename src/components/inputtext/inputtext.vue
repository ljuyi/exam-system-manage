<template>
  <div class="input-text">
      <input type="text" :value="value">
      <span>搜索</span>
  </div>
</template>
<script>
export default {
  props: {
      option: {
          type: Object
      },
      value: {
        type: String,
        default() {
          return ''
        }
      }
  }
}
</script>
<style lang="stylus">
.input-text
  width: 100%
  height: 100%
  border: 1px #999 solid
  border-radius: 10px
  background: rgba(255, 255, 255, 0.6)
  span
    display: inline-block
    vertical-align: top
    text-align: center
    width: 10%
    height: 100%
    line-height: 34px
    font-size: 14px
    border-left: 1px #999 solid
    border-radius: 0 10px 10px 0
    cursor: pointer
  input
    display: inline-block
    padding-left: 10px
    width: 88%
    height: 100%
    line-height: 34px
    outline: none
    font-size: 14px
    border-radius: 10px 0 0 10px
    background: none
</style>
