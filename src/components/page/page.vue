<template>
  <div class="page">
      <div class="last" @click="emitLastPage">
          <i class="iconfont">&#xe651;</i>
          上一页
      </div>
      <div class="next" @click="emitNextPage">
          下一页
          <i class="iconfont">&#xe600;</i>
      </div>
  </div>
</template>
<script>
export default {
    methods: {
        emitLastPage() {
            this.$emit('lastPage')
        },
        emitNextPage() {
            this.$emit('nextPage')
        }
    }
}
</script>
<style lang="stylus">
.page
  display: flex
  justify-content: space-between
  width: 100%
  height: 100%
  .next, .last
    font-size: 14px
    cursor: pointer
    color: #428bca
    &:hover
      color: #2a6496
    .iconfont
      color: #428bca
      &:hover
        color: #2a6496
</style>
