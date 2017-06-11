<template>
  <div id="app">
    <router-view :manager="manager"></router-view>
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
