<template>
    <div class="library-info">
        <h1 class="title">题库管理
            <span class="info">查看和管理题目信息</span>
        </h1>
        <div class="input">
            <div class="btn-wrapper" @click="addLibrary">
                <btn :info="'添加'"></btn>
            </div>
            <div class="drop-wrapper">
                <dropselect :option="this.selectOption" v-on:changeType="changeType"></dropselect>
            </div>
            <div class="input-wrapper">
                <inputtext></inputtext>
            </div>
        </div>
        <div class="table-wrapper">
            <vuetable table-wrapper="#content" :tag="'library'" :grid="grid" :fields="columns" :items="items" v-on:showAlert="showAlert"></vuetable>
        </div>
        <div class="swap-wrapper" v-show="showLibraryAlert||showSubjectAlert" @click="hideAlert">
            <swap></swap>
        </div>
        <div class="alert-wrapper" v-if="showLibraryAlert||showSubjectAlert">
            <libraryAlert v-if="this.showLibraryAlert" :option="libraryOption" v-on:hideAlert="hideAlert"></libraryAlert>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import vuetable from 'components/vuetable/vuetable'
import dropselect from 'components/dropselect/dropselect'
import inputtext from 'components/inputtext/inputtext'
import btn from 'components/button/button'
import libraryAlert from 'components/alert/library'
import swap from 'components/swap/swap'
export default {
    data() {
        return {
            showLibraryAlert: false,
            showSubjectAlert: false,
            libraryOption: {
                title: '题目信息'
            },
            columns: [
                '题目序号',
                '题目内容',
                '创建时间',
                '所属课程',
                '题目类型',
                '题目答案',
                '操作'
            ],
            grid: [
                '130px',
                '220px',
                '130px',
                '130px',
                '130px',
                '220px',
                '100px'
            ],
            items: [],
            selectOption: {
                type: '全部',
                select: [
                    '全部',
                    '软师',
                    '程序员',
                    '计算机网络',
                    'java后台开发',
                    '前端'
                ]
            }
        }
    },
    created() {
        axios.get('http://orc2mim1t.bkt.clouddn.com/libraryInfo')
            .then((response) => {
                let data = response.data;
                this.items = Array.from(data);
            })
    },
    methods: {
        addLibrary() {
            this.$store.dispatch('resetLibrary')
            this.showLibraryAlert = true
        },
        changeType(select) {
            this.$store.dispatch('setSelect', { select })
        },
        showAlert(index) {
            this.showLibraryAlert = true
        },
        hideAlert(obj) {
            if (obj) {
                let item = this.items.find((item) => {
                    return item.id === obj.id
                })
                if (item) {
                    for (let key in obj) {
                        if (item.hasProperty(key)) {
                            item[key] = obj[key]
                        }
                    }
                } else {
                    delete obj.staticId
                    this.items.push(obj)
                }
                axios.post('http://localhost:4000/libraryUpdate', { data: this.items })
                    .then((response) => {
                        console.log(response)
                    })
            }
            this.showLibraryAlert = false
        }
    },
    components: {
        vuetable,
        dropselect,
        inputtext,
        btn,
        libraryAlert,
        swap
    }
}
</script>
<style lang="stylus">
.library-info
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
