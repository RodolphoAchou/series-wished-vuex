<template>
  <div id="app">
    <layout-navbar v-if="showNavBar"/>
    <router-view/>
  </div>
</template>

<script>
import LayoutNavbar from './components/layout/LayoutNavbar'

export default {
  components: {
    LayoutNavbar
  },
  computed: {
    showNavBar () {
      return this.$route.name !== 'home' && this.$route.name !== 'login'
    }
  }

}
</script>

<style lang="scss">

</style>
