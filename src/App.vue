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
$nav-height: 4rem;

*{
	margin:0;
	padding:0;
	color: #fff;
	list-style: none;
	text-decoration: none;
	font-family: 'youyuan';
	/*font:16px/1.8 "Microsoft Yahet",verdana;*/
    font-weight: normal;
}

.clearfix::after {
    clear: both;
    display: block;
    content: '';
  }

.flex {
    display: flex;
    align-items: center;
}

.flex-1 {
    flex: 1;
}

</style>
