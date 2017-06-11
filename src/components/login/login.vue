<template>
    <div class="login">
        <div class="title">登陆</div>
        <form>
            <input type="text" placeholder="请输入账号">
            <input type="text" placeholder="请输入密码">
            <form class="label">
                <input type="radio" id="student" name="state">
                <label for="student">学生</label>
                <input type="radio" id="teacher" name="state">
                <label for="teacher">教师</label>
            </form>
        </form>
        <button>登陆</button>
    </div>
</template>
<script>
export default {
}
</script>
<style lang="stylus">
.login
  .title
    text-align: center
  form
    margin-top: 20px
    input[type="text"]
      margin: 5px 0
      padding-left: 15px
      width: 80%
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
  button
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
</style>
