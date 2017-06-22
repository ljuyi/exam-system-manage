<template>
    <div class="student-manage">
        <h1 class="title">考试概况
            <span class="info">查看和管理考试信息</span>
        </h1>
        <div class="input">
            <div class="drop-wrapper">
                <dropselect :option="this.selectOption" v-on:changeType="changeType"></dropselect>
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
import dropselect from 'components/dropselect/dropselect'
import inputtext from 'components/inputtext/inputtext'
import vuetable from 'components/vuetable/vuetable'
export default {
    data() {
        return {
            selectOption: {
                type: '全部',
                select: [
                    '全部',
                    '前端',
                    '计算机网络',
                    'JAVA',
                    'C/C++',
                    '软件测试'
                ]
            },
            grid: [
                '158px',
                '115px',
                '198px',
                '263px',
                '143px',
                '146px'
            ],
            columns: [
                '学号',
                '姓名',
                '专业',
                '参加课程',
                '课程状态',
                '操作'
            ],
            items: [],
            tablePos: {
                top: 43
            }
        }
    },
    created() {
        axios.get('http://localhost:4000/studentInfo')
            .then((response) => {
                this.items = response.data
            })
    },
    methods: {
        update(obj) {
            axios.post('http://localhost:4000/studentUpdate', { data: obj })
                .then((response) => {
                    console.log(response)
                })
        },
        changeType(select) {
            this.$store.dispatch('setSelect', { select })
            this.tablePos.top = 43
        }
    },
    components: {
        dropselect,
        inputtext,
        vuetable
    }
}
</script>
<style lang="stylus">
.student-manage
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
    width: 97%
    .table-wrapper
      position: relative
      height: 443px
      overflow:hidden
      margin-top: 20px
      margin-left: auto
      margin-right: auto
      width: 97%
</style>
