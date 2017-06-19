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
    <div class="swap-wrapper" v-show="showLibraryAlert||showSubjectAlert" @click="hideAlert">
      <swap></swap>
    </div>
    <div class="alert-wrapper" v-if="showLibraryAlert||showSubjectAlert">
      <libraryAlert v-if="this.showLibraryAlert" :option="libraryOption" v-on:hideSwap="hideAlert"></libraryAlert>
      <subjectAlert v-if="this.showSubjectAlert" :option="subjectOption" v-on:hideSwap="hideAlert"></subjectAlert>
    </div>
  </div>
</template>
<script>
import libraryAlert from 'components/alert/library'
import subjectAlert from 'components/alert/subject'
import swap from 'components/swap/swap'
import axios from 'axios'
export default {
  data() {
    return {
      showLibraryAlert: false,
      showSubjectAlert: false,
      libraryOption: {
        title: '题目信息'
      },
      subjectOption: {
        title: '课程信息'
      },
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
    libraryAlert,
    subjectAlert,
    swap
  },
  events: {
    'hideSwap': function() {
    }
  },
  methods: {
    showAlert(index) {
      if (this.tag === 'library') {
        this.showLibraryAlert = true
        let obj = {
          index: index,
          content: this.items[index]['content'],
          answer: this.items[index]['answer'],
          type: this.items[index]['type'],
          kind: this.items[index]['kind'],
          time: this.items[index]['time']
        }
        this.$store.dispatch('setLibrary', obj)
      } else if (this.tag === 'subject') {
        this.showSubjectAlert = true
      }
    },
    hideAlert(obj) {
      if (obj) {
        for (let key in obj) {
          if (key !== 'index') {
            this.items[obj.index][key] = obj[key]
          }
        }
      }
      if (this.tag === 'library') {
        this.showLibraryAlert = false
      } else if (this.tag === 'subject') {
        this.showSubjectAlert = false
      }
    },
    deleteL(index) {
      this.items.splice(index, 1)
      axios.post('http://localhost:4000/libraryUpdate', { data: this.items })
        .then((response) => {
          console.log(response)
        })
    }
  }
}
</script>
<style lang="stylus">
.vuetable
  table
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
  .swap-wrapper
    position: fixed
    z-index: 100
    width: 100%
    height: 100%
    top: 0
    left: 0
  .alert-wrapper
    position: fixed
    z-index: 101
    width: 500px
    height: 500px
    left: 50%
    top: 50%
    margin-top: -250px
    margin-left: -250px
</style>
