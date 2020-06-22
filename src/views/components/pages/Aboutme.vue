<template>
  <div class="about">
    <h1>主页2</h1>
  </div>
</template>

<script>
export default {
  name: 'Aboutme',
  props: {
    msg: {
      type: String,
      default: ''
    }
  }
}
</script>
<style scoped lang="scss">
.about{
  *{
    color: #333;
  }
}
</style>
