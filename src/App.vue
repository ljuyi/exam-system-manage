<template>
  <div id="app">
    <keep-alive>
      <router-view :manager="manager"></router-view>
    </keep-alive>
  </div>
</template>
<script>
export default {
  data() {
    return {
      manager: ''
    }
  }
}
</script>
<style lang="stylus">
#app
  height: 100%
</style>
