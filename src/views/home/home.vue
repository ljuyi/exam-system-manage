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
      <slideshow></slideshow>
    </div>
    <div class="info">
      <h1 class="title">使用须知</h1>
      <div class="content">
        <p>1.欢迎使用新卓越考试系统，请使用报名提供的学号和密码登陆</p>
        <p>2.首次登陆请修改密码，方可继续使用</p>
        <p>3.忘记学号和密码请联系管理员</p>
      </div>
    </div>
    <div class="footer-wrapper">
      <v-footer type="out"></v-footer>
    </div>
  </div>
</template>
<script>
import login from 'components/login/login'
import swap from 'components/swap/swap'
import slideshow from 'components/slideshow/slideshow'
import footer from 'components/footer/footer'
export default {
  props: {
    manager: {
      type: String
    }
  },
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
    slideshow: slideshow,
    'v-footer': footer
  }
}
</script>
<style lang="stylus">
.home
  position: relative
  .header
    padding: 10px 30px
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
    width: 260px
    height: 300px
    top: 50%
    left: 50%
    z-index: 100
    margin-left: -130px
    margin-top: -150px
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
  .info
    width: 500px
    margin: 20px auto
    .title
      text-align: center
      font-size: 20px
      color: red
      line-height: 40px
    .content
      p
        font-size: 16px
        color: #29bdb9
        text-align: left
        line-height: 26px
  .footer-wrapper
    position: fixed
    bottom: 0
    width: 100%
    height: 50px
</style>
