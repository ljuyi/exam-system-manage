<template>
    <div class="exam-manage">
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
                    <i class="iconfont">&#xe679;</i>
                    <p class="exam">{{item['examName']}}</p>
                    <p class="teacher">任课老师：{{item['teacherName']}}</p>
                    <p class="state">考试类型：{{item['examState']}}</p>
                    <p class="time">结束时间：{{item['examTime']}}</p>
                    <span class="watch">查看考试</span>
                    <span class="edit">编辑考试</span>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import dropselect from 'components/dropselect/dropselect'
import inputtext from 'components/inputtext/inputtext'
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
        axios.get('http://localhost:4000/examManage')
            .then((response) => {
                this.items = response.data
            })
    },
    components: {
        inputtext,
        dropselect
    }
}
</script>
<style lang="stylus">
.exam-manage
  width: 100%
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
    ul
      display: flex
      justify-content: space-between
      flex-wrap: wrap
      padding: 4% 65px
      width: 100%
      background: #fff
      li
        flex: 0 0 22%
        margin-bottom: 4%
        padding: 3%
        background: #f8f9fb
        border: 1px #eceef4 solid
        text-align: center
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
          color: #7f8181
        .time
          font-size: 16px
          line-height: 200%
          color: #7f8181
        .watch, .edit
          display: inline-block
          color: #0088CC
          cursor: pointer
</style>
