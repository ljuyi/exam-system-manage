<template>
  <div class="page">
      <div class="last" onselectstart="return false;" @click.prevent="emitLastPage">
          <i class="iconfont">&#xe651;</i>
          上一页
      </div>
      <div class="next" onselectstart="return false;" @click.prevent="emitNextPage">
          下一页
          <i class="iconfont">&#xe600;</i>
      </div>
  </div>
</template>
<script>
export default {
    mounted() {
        this.$watch('$store.getters.getTrNumber', () => {
            this.$emit('maxPageChange', Math.ceil(this.$store.getters.getTrNumber / 8))
        })
    },
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
  position: absolute
  z-index: 1000
  justify-content: space-between
  width: 100%
  height: 100%
  .next, .last
    font-size: 14px
    color: #428bca
    cursor: pointer
    line-height: 30px
    text-align: center
    -moz-user-select:none;
    &:hover
      color: #2a6496
    .iconfont
      color: #428bca
      &:hover
        color: #2a6496
</style>
