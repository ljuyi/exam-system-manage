<template>
  <div class="home">
    <div class="header">
      <span class="logo">
        <img>
      </span>
      <span class="title">新卓越在线考试管理系统</span>
      <span class="login" @click="showLogin">登陆</span>
    </div>
    <div v-show="loginState" class="login-wrapper">
      <login></login>
    </div>
    <div v-show="loginState" class="swap-wrapper" @click="changeLoginState">
      <swap></swap>
    </div>
    <div class="slideshow-wrapper">
      <slideshow :timeout="800" :interval="1000"></slideshow>
    </div>
  </div>
</template>
<script>
import login from 'components/login/login'
import swap from 'components/swap/swap'
import slideshow from 'components/slideshow/slideshow'
export default {
  data() {
    return {
      loginState: false
    }
  },
  methods: {
    showLogin() {
      this.loginState = true;
    },
    changeLoginState() {
      this.loginState = false;
    }
  },
  components: {
    login: login,
    swap: swap,
    slideshow: slideshow
  }
}
</script>
<style lang="stylus">
.home
  position: relative
  padding: 10px 30px
  .header
    width: 100%
    height: 100px
    background: #fff
    .logo
      display: inline-block
      vertical-align: top
    .title
      display: inline-block
      vertical-align: top
      font-size: 18px
      color: red
      font-weight: bold
    .login
      float: right
      cursor: pointer
  .login-wrapper
    position: fixed
    padding: 30px
    width: 200px
    height: 250px
    top: 50%
    left: 50%
    z-index: 100
    margin-left: -150px
    margin-top: -125px
    background: #fff
    border-radius: 10px
    border: 1px solid #999
  .swap-wrapper
    position: fixed
    top: 0
    left: 0
    z-index: 50
    width: 100%
    height: 100%
    overflow: hidden
</style>
