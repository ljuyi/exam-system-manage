<template>
    <table class="vuetable">
        <thead>
            <tr>
                <th v-for="field in fields">{{field}}</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item, index) in items">
                <td v-for="(value, key, index) in item" :class="key">{{value}}</td>
                <td class="operation">删除/修改</td>
            </tr>
        </tbody>
    </table>
</template>
<script>
export default {
    props: {
        fields: {
            type: Array
        },
        items: {
            type: Array
        }
    }
}
</script>
<style lang="stylus">
.vuetable
  width: 100%
  height: 80%
  thead
    width: 100%
    height: 30px
    background: #d9edf7
    border-bottom: 1px #DDD solid
    tr
      width: 100%
      display: flex
      justify-content: space-around
      th
        display: inline-block
        width: 100%
        line-height: 42px
        text-align: center
        font-size: 14px
        font-weight: bold
        color: #333
        &:nth-child(2)
          flex: 0 0 250px
          width: 250px
        &:nth-child(6)
          flex: 0 0 250px
          width: 250px
  tbody
    width: 100%
    tr
      width: 100%
      display: flex
      justify-content: space-around
      &:nth-child(3n+1)
        background: #d9edf7
      &:nth-child(3n+2)
        background: #faf2cc
      &:nth-child(3n)
        background: #d0e9c6
      td
        height: 50px
        text-align: center
        line-height: 50px
      td.id
        flex: 0 0 70px
        width: 70px
      td.content
        flex: 0 0 210px
        width: 210px
        overflow: hidden
        text-overflow: ellipsis
        white-space: nowrap
      td.time
        flex: 0 0 90px
        width: 90px
      td.type
        flex: 0 0 90px
        width: 90px
      td.kind
        flex: 0 0 90px
        width: 90px
      td.answer
        flex: 0 0 220px
        width: 220px
        overflow: hidden
        text-overflow: ellipsis
        white-space: nowrap
</style>
