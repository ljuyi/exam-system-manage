<template>
    <table class="vuetable">
        <thead>
            <tr>
                <th v-for="(field, key, value) in fields" :style="{width:grid[key]}">{{field}}</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item, index) in items">
                <td v-for="(value, key, index) in item" :class="key" :style="{width:grid[index]}">{{value}}</td>
                <td class="operation" :style="{width:grid[grid.length-1]}">删除/修改</td>
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
        },
        grid: {
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
    &>tr
      width: 100%
      justify-content: space-around
      &>th
        display: inline-block
        line-height: 42px
        text-align: center
        font-size: 14px
        font-weight: bold
        color: #333
  tbody
    width: 100%
    &>tr
      width: 100%
      justify-content: space-around
      &:nth-child(3n+1)
        background: #d9edf7
      &:nth-child(3n+2)
        background: #faf2cc
      &:nth-child(3n)
        background: #d0e9c6
      &>td
        display: inline-block
        height: 50px
        text-align: center
        line-height: 50px
        overflow: hidden
        text-overflow: ellipsis
        white-space: nowrap
</style>
