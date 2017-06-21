<template>
    <div class="grade-detail">
        <h1 class="title">考试成绩
            <span class="info">增删改查成绩</span>
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
            <div class="table-wrapper">
                <vuetable :grid="grid" :fields="columns" :items="items" :size="tablePos" v-on:update="update"></vuetable>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import btn from 'components/button/button'
import inputtext from 'components/inputtext/inputtext'
import dropselect from 'components/dropselect/dropselect'
import vuetable from 'components/vuetable/vuetable'
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
            },
            columns: [
                '学号',
                '姓名',
                '考试名称',
                '成绩',
                '操作'
            ],
            grid: [
                '232px',
                '169px',
                '341px',
                '129px',
                '222px'
            ],
            tablePos: {
                top: 43
            }
        }
    },
    created() {
        axios.get('http://localhost:4000/gradeDetails')
            .then((response) => {
                this.items = response.data
            })
    },
    methods: {
        update(obj) {
            axios.post('http://localhost:4000/gradeDetailUpdate', { data: obj })
                .then((response) => {
                    console.log(response)
                })
        }
    },
    components: {
        btn,
        inputtext,
        dropselect,
        vuetable
    }
}
</script>
<style lang="stylus">
.grade-detail
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
    justify-content: space-around
    .drop-wrapper
      display: inline-block
      width: 200px
      height: 34px
    .input-wrapper
      display: inline-block
      width: 500px
      height: 34px
  .table-wrapper
    position: relative
    height: 443px
    overflow:hidden
    margin-top: 20px
    margin-left: auto
    margin-right: auto
    width: 97%
  .swap-wrapper
    position: fixed
    z-index: 1000
    width: 100%
    height: 100%
    top: 0
    left: 0
  .alert-wrapper
    position: fixed
    z-index: 1000
    width: 500px
    height: 500px
    left: 50%
    top: 50%
    margin-top: -250px
    margin-left: -250px
  .page-wrapper
    width: 150px
    height: 30px
    position: absolute
    right: 50px
    bottom: 35px
</style>
