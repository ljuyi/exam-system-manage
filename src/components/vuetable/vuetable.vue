<template>
  <table>
      <thead>
          <tr>
              <th v-for="field in fields">{{field}}</th>
          </tr>
      </thead>
  </table>
</template>
<script>
export default {
  props: {
      fields: {
          type: Array
      }
  }
}
</script>
