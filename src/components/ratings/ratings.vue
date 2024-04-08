<template>
  <div class="ratings">
      ratings
  </div>
</template>
<script>
  export default {
    name: 'ratings',
    props: {
      data: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    created() {
      console.log(this.data)
    }
  }
</script>
<style lang="stylus">

</style>
