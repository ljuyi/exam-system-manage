<template>
    <div ref="foot">
        <p>Copyright &copy; 2016
            <span>新卓越计算机教育.</span>All rights reserved
        </p>
    </div>
</template>
<script>
export default {
    props: {
        type: {
            type: String
        }
    },
    mounted() {
        if (this.type === 'in') {
            this.$refs.foot.className = 'in-foot';
        } else {
            console.log(this.$refs.foot)
            this.$refs.foot.className = 'out-foot';
        }
    }
}
</script>
<style lang="stylus">
.out-foot
  width: 100%
  height: 100%
  background: rgba(0, 0, 0, 0.4)
  p
    text-align: center
    line-height: 50px
    span
      color: blue
.in-foot
  width: 100%
  height: 100%
  padding-left: 20px
  p
    font-size: 14px
    line-height: 30px
    color: #333
    span
      color: #428bca
</style>
