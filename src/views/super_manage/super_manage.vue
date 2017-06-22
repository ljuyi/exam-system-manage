<template>
    <div class="super-manage">
        <h1 class="title">超级管理
            <span class="info">查看和管理管理员信息</span>
        </h1>
        <div class="input">
            <div class="btn-wrapper" @click="addLibrary">
                <btn :info="'添加'"></btn>
            </div>
            <div class="input-wrapper">
                <inputtext></inputtext>
            </div>
        </div>
        <div class="table-wrapper">
            <vuetable table-wrapper="#content" :grid="grid" :fields="columns" :items="items" :size="tablePos"></vuetable>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import vuetable from 'components/vuetable/vuetable'
import inputtext from 'components/inputtext/inputtext'
export default {
    data() {
        return {
            items: [],
            grid: [
                '231px',
                '167px',
                '381px',
                '212px'
            ],
            columns: [
                '编号',
                '姓名',
                '课程',
                '操作'
            ],
            tablePos: {
                top: 43
            }
        }
    },
    created() {
        axios.get('http://localhost:4000/superManage')
            .then((response) => {
                this.items = response.data
            })
    },
    components: {
        vuetable,
        inputtext
    }
}
</script>
<style lang="stylus">
.super-manage
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
