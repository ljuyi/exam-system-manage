<template>
    <div class="login">
        <div class="title" @click="login">登陆</div>
        <form>
            <input type="text" placeholder="请输入账号" v-model="name">
            <input type="password" placeholder="请输入密码" v-model="psd">
            <div class="label">
                <input type="radio" id="student" value="学生" v-model="type">
                <label for="student">学生</label>
                <input type="radio" id="teacher" value="教师" v-model="type">
                <label for="teacher">教师</label>
            </div>
        </form>
        <button class="btn" @click="login">登陆</button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            name: '',
            psd: '',
            type: '教师'
        }
    },
    methods: {
        login() {
            if (this.name !== null && this.psd !== null && this.type !== null) {
                this.$store.dispatch('LOGIN', { name: this.name, psd: this.psd, type: this.type });
                window.localStorage.setItem('xzyuser', this.name)
                window.localStorage.setItem('xzypsd', this.psd)
                window.localStorage.setItem('xzytype', this.type)
                this.$router.replace('/manage');
            }
        }
    }
}
</script>
<style lang="stylus">
.login
  .title
    text-align: center
  form
    margin-top: 20px
    input[type="text"], input[type="password"]
      margin: 5px 0
      padding-left: 15px
      width: 100%
      height: 30px
      border: 1px solid #999
      border-radius: 10px
      &:focus
        outline: none
        border: 1px solid lightblue
        border-radius: 10px
    .label
      margin-top: 20px
      font-size: 14px
      label
        margin-right: 20px
  .btn
    display: block
    position: relative
    bottom: -60px
    margin: 0 auto
    width: 70px
    height: 30px
    background: #999
    color: #fff
    border: none
    border-radius: 3px
    text-align: center
    line-height: 30px
</style>
