<template>
    <div class="btn">
        <button>
            {{this.info}}
        </button>
    </div>
</template>
<script>
export default {
    props: {
        info: {
            type: String
        }
    }
}
</script>
<style lang="stylus">
.btn
  display: inline-block
  button
    display: inline-block
    width: 68px
    height: 34px
    background: #fff
    border: 1px solid #999
    border-radius: 7px
    cursor: pointer
    outline: none
    &:hover
      background: #999
</style>
