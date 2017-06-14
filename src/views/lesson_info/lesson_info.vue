<template>
    <div class="lesson-info">
        <h1 class="title">课程管理
            <span class="info">查看和管理课程信息</span>
        </h1>
        <div class="input">
            <div class="btn-wrapper">
                <add-btn></add-btn>
                <delete-btn></delete-btn>
            </div>
            <div class="input-wrapper">
                <input-text></input-text>
            </div>
        </div>
        <div class="table-wrapper">
            <vuetable table-wrapper="#content" :grid="grid" :fields="columns" :items="items"></vuetable>
        </div>
    </div>
</template>
<script>
import inputtext from 'components/inputtext/inputtext'
import addBtn from 'components/button/add'
import deleteBtn from 'components/button/delete'
import vuetable from 'components/vuetable/vuetable'
export default {
    data() {
        return {
            columns: [
                '课程号',
                '课程名',
                '课程期数',
                '开课时间',
                '结束时间',
                '任课老师',
                '上课人数',
                '操作'
            ],
            grid: [
                '100px',
                '220px',
                '100px',
                '120px',
                '120px',
                '180px',
                '100px',
                '100px'
            ]
        }
    },
    components: {
        'add-btn': addBtn,
        'delete-btn': deleteBtn,
        'input-text': inputtext,
        vuetable
    }
}
</script>
<style lang="stylus">
.lesson-info
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
    padding: 0 30px
    justify-content: space-between
    .btn-wrapper
      display: inline-block
      width: 80px
      height: 34px
      border-radius: 7px
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
