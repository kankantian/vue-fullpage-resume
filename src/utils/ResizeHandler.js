import { mutations } from '@/store/index'
const { body } = document
const WIDTH = 1024
const RATIO = 3

export default {
  watch: {
    // $route(route) {
    //   if (this.device === 'mobile' && this.sidebar.opened) {
    //     store.dispatch('CloseSideBar', { withoutAnimation: false })
    //   }
    // }
  },
  beforeMount() {
    window.addEventListener('resize', this.resizeHandler)
  },
  mounted() {
    const isMobile = this.isMobile()
    if (isMobile) {
      mutations.toggleDevice('mobile')
    }
  },
  methods: {
    isMobile() {
      const rect = body.getBoundingClientRect()
      return rect.width - RATIO < WIDTH
    },
    resizeHandler() {
      if (!document.hidden) {
        const isMobile = this.isMobile()
        mutations.toggleDevice(isMobile ? 'mobile' : 'desktop')
      }
    }
  }
}
