<template>
  <div class="about">
    <!-- <h1>主页2</h1> -->
    <Timeline :data-time="timeline" />
  </div>
</template>

<script>
import Timeline from '@/components/Timeline.vue';
export default {
  name: 'Aboutme',
  components: {
    Timeline
  },
  props: {
    msg: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      timeline: [
        {
          dateRange: '2018/06 -- 2019/06',
          company: '圆桌会议1',
          detail: 'CoolSite360，采用标准的html及css规范，使您的设计便于维护及二次开发，通过导出功能，可输出干净的html文档结构及css样式表，便于后期添加个性化功能。'
        },
        {
          dateRange: '2019/06 -- 2020/01',
          company: '圆桌会议2',
          detail: 'CoolSite360，采用标准的html及css规范，使您的设计便于维护及二次开发，通过导出功能，可输出干净的html文档结构及css样式表，便于后期添加个性化功能。'
        },
        {
          dateRange: '2020/01 -- 2020/06',
          company: '圆桌会议3',
          detail: 'CoolSite360，采用标准的html及css规范，使您的设计便于维护及二次开发，通过导出功能，可输出干净的html文档结构及css样式表，便于后期添加个性化功能。'
        }
      ]
    }
  }
}
</script>
<style scoped lang="scss">
.about{
  margin: $nav-height auto;
  min-height: 100%;
  padding-top: 10%;
  width: 80%;

  // position: absolute;
  // left: 8%;
  // top: 15%;
  // width: 84%;
}
</style>
