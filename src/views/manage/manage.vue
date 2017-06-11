<template>
    <div class="manage">
        <div class="header-wrapper">
            <v-header></v-header>
        </div>
        <div class="content">
            <div class="tab">
                <div class="tab-item">
                    <router-link to="/exam-summary">考试概况</router-link>
                </div>
                <div class="tab-item">
                    <router-link to="/student-manage">学员管理</router-link>
                </div>
                <div class="tab-item">
                    <router-link to="/lesson-info">课程信息</router-link>
                </div>
                <div class="tab-item">
                    <router-link to="/subject-library">题库管理</router-link>
                </div>
                <div class="tab-item">
                    <router-link to="/exam-manage">考试管理</router-link>
                </div>
                <div class="tab-item">
                    <router-link to="/member-manage">成员管理</router-link>
                </div>
                <div class="tab-item">
                    <router-link to="/exam-grade">考试成绩</router-link>
                </div>
                <div class="tab-item">
                    <router-link to="/grade-details">成绩明细</router-link>
                </div>
                <div class="tab-item">
                    <router-link to="/super-manage">超级管理</router-link>
                </div>
            </div>
            <router-view :manager="manager"></router-view>
        </div>
    </div>
</template>
<script>
import header from 'components/header/header'
export default {
    computed: {
        manager() {
            return this.$store.getters.getManager;
        }
    },
    components: {
        'v-header': header
    },
    created() {
        if (!this.$store.getters.getManager) {
            this.$router.push('/');
        }
    }
}
</script>
<style lang="stylus">
.manage
  width: 100%
  height: 100%
  .header-wrapper
    position: fixed
    width: 100%
    height: 30px
  .content
    display: flex
    height: 100%
    .tab
      flex: 0 0 16.667%
      height: 100%
      background: rgba(34,45,50,1)
      .tab-item
        width: 100%
        height: 50px
        text-align: center
</style>
