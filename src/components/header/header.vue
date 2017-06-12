<template>
  <div class="manage-header">
      <span class="title">新卓越在线考试系统</span>
      <div class="broadcast-wrapper">
        <broadcast></broadcast>
      </div>
      <span class="person">
          {{time}} , {{name}}
          <router-link to="/">退出</router-link>
      </span>
  </div>
</template>
<script>
import broadcast from 'components/broadcast/broadcast'
export default {
  computed: {
      time() {
          let date = new Date();
          let hour = date.getHours();
          if (hour > 12) {
              return '下午好';
          } else if (hour === 12) {
              return '中午好';
          } else {
              return '上午好';
          }
      },
      name() {
          return this.$store.getters.getManager;
      }
  },
  components: {
      broadcast: broadcast
  }
}
</script>
<style lang="stylus">
.manage-header
  display: flex
  padding: 0 10px
  width: 100%
  height: 100%
  background: rgba(60,144,188,0.6)
  .title
    flex: 0 0 200px
    vertical-align: top
    font-size: 16px
    color: #000
    line-height: 40px
  .broadcast-wrapper
    flex: 1
    padding: 10px 0
    height: 40px
    vertical-align: top
    overflow: hidden
    cursor: pointer
    p
      text-align: center
  .person
    float: right
    font-size: 14px
    line-height: 40px
</style>
