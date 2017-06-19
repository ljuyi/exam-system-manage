<template>
  <div class="alert">
    <h1 class="title">{{option.title}}</h1>
    <div class="content">
      <p>题目内容</p>
      <div class="question">
        <textarea ref="question" v-model="obj.content">{{obj.content}}</textarea>
      </div>
      <div class="answer">
        <p>题目答案</p>
        <textarea ref="answer" v-model="obj.answer">{{obj.answer}}</textarea>
      </div>
      <div class="kind">
        <input type="radio" id="r1" value="简答题" v-model="obj.kind">
        <label for="r1">简答题</label>
        <input type="radio" id="r2" value="选择题" v-model="obj.kind">
        <label for="r2">选择题</label>
        <input type="radio" id="r3" value="填空题" v-model="obj.kind">
        <label for="r3">填空题</label>
      </div>
      <div class="type">
        <dropselect :option="dropOption" v-on:changeType="changeType"></dropselect>
      </div>
      <div class="b">
        <div class="btn-wrapper" @click="commit">
          <btn :info="'确定'"></btn>
        </div>
        <div class="btn-wrapper" @click="cancle">
          <btn :info="'取消'"></btn>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import btn from 'components/button/button'
import dropselect from 'components/dropselect/dropselect'
import axios from 'axios'
export default {
  data() {
    return {
      obj: {
        index: this.$store.getters.getLibrary.index,
        content: this.$store.getters.getLibrary.content,
        answer: this.$store.getters.getLibrary.answer,
        kind: this.$store.getters.getLibrary.kind,
        type: this.$store.getters.getLibrary.type,
        time: this.$store.getters.getLibrary.time
      },
      dropOption: {
        type: this.$store.getters.getLibrary.type,
        select: [
          '全部',
          '软件设计师',
          '程序员',
          '计算机网络',
          'java后台开发',
          '前端'
        ]
      }
    }
  },
  computed: {
  },
  props: {
    option: {
      type: Object
    }
  },
  methods: {
    commit() {
      // 保存信息
      this.$store.dispatch('setLibrary', this.obj)
      axios.post('http://localhost:4000/libraryUpdate', { data: this.$store.getters.getLibrary })
        .then((response) => {
          console.log(response)
        })
      this.$emit('hideSwap', this.obj)
    },
    cancle() {
      // 不保存信息
      this.$emit('hideSwap')
    },
    changeType(select) {
      this.obj.type = select
    }
  },
  components: {
    btn,
    dropselect
  }
}
</script>
<style lang="stylus">
.alert
  position: relative
  width: 100%
  height: 100%
  background: #fff
  border-radius: 10px
  .title
    line-height: 40px
    border-bottom: 1px #999 solid
  .content
    padding: 10px 20px
    p
      margin-top: 10px
      margin-bottom: 10px
      font-size: 14px
    .question
      width: 100%
    textarea
      display: inline-block
      box-sizing: border-box
      padding: 5px
      width: 100%
      height: 50px
      border-radius: 10px
      font-size: 14px
      color: #333
      &:focus
        outline: none
        border: 1px solid lightblue
    .answer
      .input-wrapper
        width: 100%
        height: 36px
    .kind
      margin: 20px 0
    .type
      transform: scale(1, 0.9)
    .b
      position: absolute
      width: 150px
      left: 50%
      margin-left: -75px
      bottom: 20px
      .btn-wrapper
        display: inline-block
        width: 68px
</style>
