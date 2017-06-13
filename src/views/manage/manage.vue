<template>
    <div class="manage">
        <div class="header-wrapper">
            <v-header></v-header>
        </div>
        <div class="body">
            <div class="tab-wrapper">
                <tab></tab>
            </div>
            <div class="content">
                <router-view></router-view>
                <div class="footer-wrapper">
                    <v-footer type="in"></v-footer>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import header from 'components/header/header'
import tab from 'components/tab/tab'
import footer from 'components/footer/footer'
export default {
    data() {
        return {
        }
    },
    methods: {
    },
    computed: {
        manager() {
            return this.$store.getters.getManager;
        }
    },
    components: {
        'v-header': header,
        tab: tab,
        'v-footer': footer
    },
    mounted() {
        // if (!this.$store.getters.getManager) {
        //     this.$router.push('/');
        // }
    }
}
</script>
<style lang="stylus">
.manage
  width: 100%
  height: 100%
  .header-wrapper
    position: fixed
    z-index: 1
    width: 100%
    height: 35px
  .body
    display: flex
    height: 100%
    .tab-wrapper
      padding: 40px 0 0 0
      flex: 0 0 16.667%
      background: rgba(34,45,50,1)
    >.content
      position: relative
      padding-top: 50px
      width: 100%
      background: rgb(236,240,245)
    .footer-wrapper
      position: absolute
      left: 0;
      bottom: 0
      width: 100%
      height: 30px
</style>
