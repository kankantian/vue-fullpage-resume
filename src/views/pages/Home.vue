<template>
  <div class="home">
    <h1>Home</h1>
  </div>
</template>

<script>
export default {
  name: 'Home',
  props: {
    msg: {
      type: String,
      default: ''
    }
  }
}
</script>
<style scoped lang="scss">
.home{
  text-align: center;
  padding: $nav-height 2rem;
}
</style>
