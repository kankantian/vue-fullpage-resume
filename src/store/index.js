import Vue from 'vue'

export const store = Vue.observable({
  state: {
    device: 'desktop'
  }
})

export const mutations = {
  toggleDevice(device) {
    store.state.device = device
  }
}