<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
    <header-detail :seller="seller"></header-detail>
  </div>
</template>

<script>
  import { getSeller } from 'api'
  import VHeader from 'components/v-header/v-header'
  import HeaderDetail from './components/header-detail/header-detail.vue'
export default {
  name: 'App',
  data() {
      return {
        seller: {}
      }
    },
  created() {
    this._getSeller()
  },
  methods: {
    _getSeller() {
      getSeller().then(seller => {
        this.seller = Object.assign({}, this.seller, seller)
      })
    }
  },
  components: {
    VHeader,
    HeaderDetail
  }
}
</script>

<style lang="stylus">

</style>
