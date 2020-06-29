<template>
  <div class="flex info-item">
    <div class="title">{{ data.key }}</div>
    <div class="content">{{ data.value }}</div>
  </div>
</template>

<script>
export default {
  name: 'InfoItem',
  props: {
    data: {
      type: Object,
      default: () => {
        return {}
      }
    }
  }
}
</script>
<style scoped lang="scss">
.info-item{
    padding: 1rem;
    position: relative;
    .title {
        width: 20%;
    }
    .content {
        width: 80%;
    }
    &::after{
        content: "";
        position: absolute;
        display: block;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 0;
        border-top-width: 1px;
        border-top-style: solid;
        opacity: 0.2;
    }
    &::before{
        content: "";
        position: absolute;
        display: block;
        bottom: 0;
        left: 0;
        width: 20%;
        height: 0;
        border-top-width: 1px;
        border-top-style: solid;
        border-top-color: currentcolor;
    }
}
</style>
