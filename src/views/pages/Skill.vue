<template>
  <div class="skill">
    <ul>
      <li v-for="(skill, index) in skills" :key="skill.detail">{{ index+1 }}.{{ skill.detail }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Skill',
  components: {},
  props: {
    msg: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      skills: [
        {
          dateRange: '2018/06 -- 2019/06',
          company: '圆桌会议1',
          detail: 'CoolSite360，采用标准的html及css规范，使您的设计便于维护及二次开发，通过导出功能，可输出干净的html文档结构及css样式表，便于后期添加个性化功能1。'
        },
        {
          dateRange: '2019/06 -- 2020/01',
          company: '圆桌会议2',
          detail: 'CoolSite360，采用标准的html及css规范，使您的设计便于维护及二次开发，通过导出功能，可输出干净的html文档结构及css样式表，便于后期添加个性化功能2。'
        },
        {
          dateRange: '2020/01 -- 2020/06',
          company: '圆桌会议3',
          detail: 'CoolSite360，采用标准的html及css规范，使您的设计便于维护及二次开发，通过导出功能，可输出干净的html文档结构及css样式表，便于后期添加个性化功能3。'
        },
        {
          dateRange: '2018/06 -- 2019/06',
          company: '圆桌会议1',
          detail: 'werewrwere。'
        },
        {
          dateRange: '2019/06 -- 2020/01',
          company: '圆桌会议2',
          detail: 'rwerwerwerwerw'
        },
        {
          dateRange: '2020/01 -- 2020/06',
          company: '圆桌会议3',
          detail: 'fdsfsdfsdfwerwrwerwerwer'
        },
        {
          dateRange: '2018/06 -- 2019/06',
          company: '圆桌会议1',
          detail: 'sfsdfsdfsdfsdfsdfsdf'
        },
        {
          dateRange: '2019/06 -- 2020/01',
          company: '圆桌会议2',
          detail: 'f;sldjfskldjfklsdjfsdf'
        },
        {
          dateRange: '2020/01 -- 2020/06',
          company: '圆桌会议3',
          detail: ';lfjsklfjklsfjklsdjf;kolsdf'
        }
      ]
    }
  }
}
</script>
<style scoped lang="scss">
.skill{
  // padding: $nav-height auto;
  // min-height: 100%;
  // padding-top: 10%;
  // width: 80%;
  position: absolute;
  left: 8%;
  top: 15%;
  width: 84%;
  ul {
    li {
      padding: 0 0 0.4rem 0;
    }
  }
}
</style>
