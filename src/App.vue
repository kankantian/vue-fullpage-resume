<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link>
    </div> -->
    <!-- <router-view /> -->
    <Index />
  </div>
</template>
<script>
import Index from './views/Index.vue'
export default {
  name: '',
  components: {
    Index
  }
}
</script>
<style lang="scss">
// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }

</style>
