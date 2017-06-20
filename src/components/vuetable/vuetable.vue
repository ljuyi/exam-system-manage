<template>
  <div class="vuetable">
    <table>
      <thead>
        <tr>
          <th v-for="(field, key, value) in fields" :style="{width:grid[key]}">{{field}}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in items" v-if="select==='全部'||select===item['type']" @click.stop="showAlert(index)">
          <td v-for="(value, key, index) in item" :class="key" :style="{width:grid[index]}">{{value}}</td>
          <td class="operation" :style="{width:grid[grid.length-1]}">
            <i class="iconfont" @click.stop="deleteL(index)">&#xe682;</i>/
            <i class="iconfont">&#xe630;</i>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      select: this.$store.getters.getSelect
    }
  },
  mounted() {
    this.$watch('$store.getters.getSelect', () => {
      this.select = this.$store.getters.getSelect
    })
  },
  props: {
    fields: {
      type: Array
    },
    items: {
      type: Array
    },
    grid: {
      type: Array
    },
    tag: {
      type: String
    }
  },
  components: {
  },
  events: {
    'hideSwap': function() {
    }
  },
  methods: {
    deleteL(index) {
      this.items.splice(index, 1)
      axios.post('http://localhost:4000/libraryUpdate', { data: this.items })
        .then((response) => {
          console.log(response)
        })
    },
    showAlert(index) {
      this.$store.dispatch('setLibrary', this.items[index])
      this.$emit('showAlert')
    }
  }
}
</script>
<style lang="stylus">
.vuetable
  table
    width: 100%
    height: auto
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
        cursor: pointer
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
          color: #333
          i
            color: #428bca
            &:hover
              color: #2a6496
</style>
