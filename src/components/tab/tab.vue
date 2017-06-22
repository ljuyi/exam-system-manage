<template>
    <ul class="tab">
        <li class="tab-item" v-for="list in lists" @click="toggleShow(list.tag)">
            <i class="iconfont" :class="list.icon"></i>
            <router-link :to="list.router">{{list.content}}</router-link>
            <i class="iconfont" v-if="list.list">&#xe72b;</i>
            <i class="iconfont" v-else>&#xe697;</i>
            <transition name="tabSlide">
                <ul v-if="list.list" class="t" :ref="list.tag" v-show="show[list.tag]">
                    <li class="tab-item" v-for="list in list.list" @click.stop>
                        <i class="iconfont" :class="list.icon"></i>
                        <router-link :to="list.router">{{list.content}}</router-link>
                        <i class="iconfont">&#xe697;</i>
                    </li>
                </ul>
            </transition>
        </li>
    </ul>
</template>
<script>
export default {
    data() {
        return {
            show: {
                subject: false,
                exam: false,
                grade: false
            },
            lists: [
                {
                    icon: 'icon-naviconround',
                    content: '考试概况',
                    router: '/manage/exam-summary'
                },
                {
                    icon: 'icon-person-stalker',
                    content: '学员管理',
                    router: '/manage/student-manage'
                },
                {
                    icon: 'icon-ioslistoutline',
                    content: '课程管理',
                    tag: 'subject',
                    router: '',
                    list: [
                        {
                            icon: 'icon-ioslistoutline',
                            content: '课程信息',
                            router: '/manage/lesson-info'
                        },
                        {
                            icon: 'icon-ioslistoutline',
                            content: '题库管理',
                            router: '/manage/library-info'
                        }
                    ]
                },
                {
                    icon: 'icon-androiddoneall',
                    content: '考核管理',
                    tag: 'exam',
                    router: '',
                    list: [
                        {
                            icon: 'icon-androiddoneall',
                            content: '考试管理',
                            router: '/manage/exam-manage'
                        },
                        {
                            icon: 'icon-androiddoneall',
                            content: '成员管理',
                            router: '/manage'
                        }
                    ]
                },
                {
                    icon: 'icon-calculator',
                    content: '成绩管理',
                    tag: 'grade',
                    router: '',
                    list: [
                        {
                            icon: 'icon-calculator',
                            content: '考试成绩',
                            router: '/manage'
                        },
                        {
                            icon: 'icon-calculator',
                            content: '成绩明细',
                            router: '/manage/grade-details'
                        }
                    ]
                },
                {
                    icon: 'icon-ioslockedoutline',
                    content: '超级管理',
                    router: '/manage/super-manage'
                }
            ]
        }
    },
    methods: {
        toggleShow(content) {
            for (let key in this.show) {
                if (key !== content) {
                    this.show[key] = false;
                }
            }
            this.show[content] = !this.show[content];
        }
    }
}
</script>
<style lang="stylus">
.tab
  height: 100%
  >.tab-item
    width: 100%
    line-height: 45px
    cursor: pointer
    &:hover
      background: rgba(26,34,38,1)
      border-left: 2px solid #FFFFCC
    a
      display: inline-block
      width: 50%
    i
      width: 25%
      padding-left: 20px
      padding-right: 10px
    .t
      background: rgba(26,34,38,1)
      transition: all 0.2s cubic-bezier(.09, .47, .1, .66)
    .tabSlide-enter, .tabSlide-leave-to
      opacity: 0
      height: 0
    .tabSlide-enter-to, .tabSlide-leave
      opacity: 1
      height: 90px
</style>
