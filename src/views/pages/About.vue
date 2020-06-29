<template>
  <div class="about">
    <div v-for="info in infos" :key="info.key" class="info">
      <span>{{ info.key }} | {{ info.value }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Aboutme',
  components: {},
  props: {
    msg: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      infos: [
        {
          key: '姓名',
          value: '圆桌会议1'
        },
        {
          key: '性别',
          value: '圆桌会议2'
        },
        {
          key: '毕业院校',
          value: '圆桌会议3'
        },
        {
          key: '毕业院校1',
          value: '圆桌会议32'
        }
      ]
    }
  }
}
</script>
<style scoped lang="scss">
.about{
  // margin: $nav-height auto;
  // min-height: 100%;
  // padding-top: 10%;
  // width: 80%;
  text-align: center;
  position: absolute;
  left: 8%;
  top: 15%;
  width: 84%;
  .info {
    padding: 0.5rem 0;
    // &:nth-of-type(2n) {
    //   padding-left: 1rem;
    // }
  }
}
</style>
