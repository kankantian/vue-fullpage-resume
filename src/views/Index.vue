<template>
  <div class="index">
    <Nav @moveTo="toPage" />
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
        <div class="box box3">
          <Project />
        </div>
      </div>
      <div class="section">
        <div class="box box4">
          section4
        </div>
      </div>
      <div class="section">
        <div class="box box5">
          section5
        </div>
      </div>
    </full-page>
  </div>
</template>

<script>
import Nav from '@v/layout/Nav.vue'
import ResizeMixin from '@/utils/ResizeHandler.js'
// 自动化导入组件
const path = require('path')
const files = require.context('@v/components/pages', false, /\.vue$/)
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
        // afterLoad: this.afterLoad,
        scrollOverflow: true,
        scrollBar: false,
        menu: '#menu',
        navigation: true, // 是否显示导航，默认为false
        navigationPosition: 'right', // 导航小圆点的位置
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5'],
        sectionsColor: [
          '#41b883',
          '#ff5f45',
          '#0798ec',
          '#fec401',
          '#1bcee6',
          '#ee1a59',
          '#2c3e4f',
          '#ba5be9',
          '#b4b8ab'
        ]
      }
    }
  },
  computed: {
    device() {
      return this.$store.state.app.device
    }
  },
  watch: {
  },
  mounted() {
  },
  methods: {
    afterLoad: function(origin, destination, direction) {
      console.log('After load....')
      console.log(destination)
    },
    toPage(payload) {
      this.$refs.fullpage.api.moveTo(payload, 1)
    }
  }
}
</script>

<style scoped lang="scss">
.section{
  .box {
    padding: $nav-height 2rem 0;

  }
}
</style>
