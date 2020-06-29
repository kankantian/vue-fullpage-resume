<template>
  <div class="index">
    <Nav :page-index="pageIndex" @moveTo="toPage" />
    <full-page ref="fullpage" :options="options">
      <div class="section">
        <div class="box box1">
          <Home />
        </div>
      </div>
      <div class="section">
        <div class="box box2">
          <Aboutme />
        </div>
      </div>
      <div class="section">
        <div class="box3-modal" />
        <div class="box box3">
          <Project />
        </div>
      </div>
      <div class="section">
        <div class="box box4">
          <Skill />
        </div>
      </div>
      <div class="section">
        <div class="box box5">
          <About />
        </div>
      </div>
    </full-page>
  </div>
</template>

<script>
import Nav from './layout/Nav.vue'
import ResizeMixin from '@/utils/ResizeHandler.js'
import { store } from '@/store/index'
// 自动化导入组件
const path = require('path')
const files = require.context('./pages', false, /\.vue$/)
const modules = {}
files.keys().forEach(key => {
  const name = path.basename(key, '.vue')
  modules[name] = files(key).default || files(key)
})

export default {
  name: '',
  components: {
    Nav,
    ...modules
  },
  mixins: [ResizeMixin],
  data() {
    return {
      options: {
        licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
        afterLoad: this.afterLoad,
        scrollOverflow: true,
        scrollBar: false,
        menu: '#menu',
        navigation: true, // 是否显示导航，默认为false
        navigationPosition: 'right', // 导航小圆点的位置
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5'],
        controlArrows: false, // 用来控制slide幻灯片的箭头，设置为false，两侧的箭头会消失
        // verticalCentered: true, // 每一页幻灯片的内容是否垂直居中
        slidesNavigation: true, // 是否显示横向幻灯片的导航
        slidesNavPosition: 'bottom', // 横向幻灯片导航的位置，可以为top或者bottom
        sectionsColor: [
          '#41b883',
          '#6515a7',
          '#0798ec',
          '#fec401',
          '#1bcee6',
          '#ee1a59',
          '#2c3e4f',
          '#ff5f45',
          '#b4b8ab'
        ]
      },
      pageIndex: 1 // 当前页
    }
  },
  computed: {
    device() {
      return store.state.device
    }
  },
  watch: {
  },
  mounted() {
  },
  methods: {
    afterLoad: function(origin, destination, direction) {
      // console.log('After load....')
      // console.log(destination.index+1)
      this.pageIndex = destination.index + 1
    },
    toPage(payload) {
      this.$refs.fullpage.api.moveTo(payload, 1)
    }
  }
}
</script>

<style scoped lang="scss">
.index {
  background: #f5f5f5;
  .section{
    position: relative;
    .box {
      // padding: $nav-height 2rem;
      box-sizing: border-box;
      height: 100%;
    }
    .box1{
      background: url('../assets/bg.jpg') center no-repeat;
      background-size: cover;
    }
    .box3{
      background: url('../assets/project-bg.jpg') center no-repeat;
      background-attachment: scroll;
      background-size: cover;
    }
    .box3-modal{
      position: absolute;
      width: 100%;
      height: 100%;
      color: rgb(14, 47, 66);
      background-color: rgb(23, 38, 62);
      background-image: linear-gradient(140deg, currentcolor, transparent);
      opacity: 0.6;
    }
  }
}

</style>
