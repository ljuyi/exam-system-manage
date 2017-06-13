<template>
    <div class="exam-manage">
        <h1 class="title">题库管理
            <span class="info">查看和管理题目信息</span>
        </h1>
        <div class="input">
            <div class="drop-wrapper">
                <dropselect :option="this.selectOption"></dropselect>
            </div>
            <div class="input-wrapper">
                <inputtext></inputtext>
            </div>
        </div>
        <div class="table-wrapper">
            <vuetable table-wrapper="#content" :fields="columns" :items="items"></vuetable>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import vuetable from 'components/vuetable/vuetable'
import dropselect from 'components/dropselect/dropselect'
import inputtext from 'components/inputtext/inputtext'
export default {
    data() {
        return {
            columns: [
                '题目序号',
                '题目内容',
                '创建时间',
                '所属课程',
                '题目类型',
                '题目答案',
                '操作'
            ],
            items: [],
            selectOption: {
                type: '请选择题目类型',
                select: [
                    '全部',
                    '软件设计师',
                    '程序员',
                    '计算机网络',
                    'java后台开发'
                ]
            }
        }
    },
    created() {
        axios.get('http://orc2mim1t.bkt.clouddn.com/libraryInfo')
            .then((response) => {
                let data = response.data;
                console.log(Array.from(data));
                this.items = Array.from(data);
            })
    },
    components: {
        vuetable,
        dropselect,
        inputtext
    }
}
</script>
<style lang="stylus">
.exam-manage
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
    margin-top: 20px
    margin-left: auto
    margin-right: auto
    width: 97%
</style>
