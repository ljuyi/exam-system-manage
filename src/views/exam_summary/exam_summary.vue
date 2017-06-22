<template>
    <div class="exam-summary">
        <h1 class="title">考试概况
            <span class="info">查看和管理考试信息</span>
        </h1>
        <div class="input">
            <div class="drop-wrapper">
                <dropselect :option="this.selectOption"></dropselect>
            </div>
            <div class="input-wrapper">
                <inputtext></inputtext>
            </div>
        </div>
        <div class="content">
            <ul>
                <li v-for="item in items">
                    <i class="iconfont">&#xe6a7;</i>
                    <p class="exam">{{item['which-class']}}</p>
                    <p class="teacher">{{item['which-teacher']}}</p>
                    <p class="state">{{item['exam-condition']}}</p>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import dropselect from 'components/dropselect/dropselect'
import inputtext from 'components/inputtext/inputtext'
import axios from 'axios'
export default {
    data() {
        return {
            items: [],
            selectOption: {
                type: '全部',
                select: [
                    '前端',
                    '计算机网络',
                    'JAVA',
                    'C/C++',
                    '软件测试'
                ]
            }
        }
    },
    created() {
        axios.get('http://localhost:4000/examInfo')
            .then((response) => {
                this.items = response.data
            })
    },
    components: {
        dropselect,
        inputtext
    }
}
</script>
<style lang="stylus">
.exam-summary
  width: 100%
  height: 100%
  .title
    padding-left: 15px
    font-size: 18px
    color: #333
    line-height: 34px
    .info
      display: inline-block
      margin-left: 10px
      line-height: 34px
      font-size: 14px
      color: #999
  .input
    display: flex
    margin-top: 13px
    margin-bottom: 20px
    justify-content: space-around
    .drop-wrapper
      display: inline-block
      width: 200px
      height: 34px
    .input-wrapper
      display: inline-block
      width: 500px
      height: 34px
  .content
    margin-left: auto
    margin-right: auto
    width: 97%
    height: 450px
    ul
      display: flex
      justify-content: space-between
      flex-wrap: wrap
      padding: 4% 65px
      width: 100%
      background: #fff
      li
        flex: 0 0 22%
        padding: 3%
        height: 235px
        background: #f8f9fb
        border: 1px #eceef4 solid
        text-align: center
        cursor: pointer
        .iconfont
          margin-bottom: 10px
          font-size: 60px
          color: #428bca
        .exam
          font-size: 18px
          color: #e64a4a
          line-height: 200%
        .teacher
          font-size: 16px
          color: #7f8181
          line-height: 200%
        .state
          font-size: 16px
          line-height: 200%
          color: #f38b04
</style>
