<template>
    <div class="dropselect">
        <div class="show" @click="show=!show" v-model="select">{{select}}
            <span class="arrow">
                <i class="iconfont">&#xe607;</i>
            </span>
        </div>
        <transition name="fade">
            <ul class="select" v-show="show">
                <li v-for="(value,index) in option.select" @click="chose(index)">{{value}}</li>
            </ul>
        </transition>
    </div>
</template>
<script>
export default {
    data() {
        return {
            show: false,
            select: this.option.type
        }
    },
    props: {
        option: {
            type: Object
        }
    },
    methods: {
        chose(index) {
            this.select = this.option.select[index];
            this.show = false;
            this.$emit('changeType', this.select)
        }
    }
}
</script>
<style lang="stylus">
.dropselect
  width: 100%
  height: 100%
  cursor: pointer
  .show
    position: relative
    padding-left: 20px
    width: 100%
    height: 100%
    border: 1px #999 solid
    line-height: 34px
    border-radius: 10px
    background: rgba(255, 255, 255, 0.8)
    font-size: 14px
    .arrow
      position: absolute
      right: 10px
      i
        color: #999
  .fade-enter-to, .fade-leave
    transform: rotate(0deg) scale(1, 1)
    opacity: 1
  .fade-enter, .fade-leave-to
    transform: rotate(360deg) scale(0.1, 0.1)
  .select
    position: absolute
    width: 200px
    border-radius: 0 0 10px 10px
    transition: all 0.2s linear
    li
      padding-left: 20px
      height: 34px
      line-height: 34px
      background: rgba(255, 255, 255, 0.7)
      font-size: 14px
      &:last-child
        border-radius: 0 0 10px 10px
</style>
