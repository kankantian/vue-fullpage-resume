<template>
  <div class="index">
    <Nav @moveTo="toPage" />
    <full-page ref="fullpage" :options="options">
      <div class="section">
        <div class="box box1">
          section1
          <div>111</div>
        </div>
      </div>
      <div class="section">
        <div class="box box2">
          section2
        </div>
      </div>
      <div class="section">
        <div class="box box3">
          section3
        </div>
      </div>
    </full-page>
  </div>
</template>

<script>
import Nav from '@v/layout/Nav.vue'
export default {
  name: '',
  components: {
    Nav
  },
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
        anchors: ['page1', 'page2', 'page3'],
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
