<template>
  <div class="timeline" :class="{ 'sm-timeline': device ==='mobile'}">
    <div v-for="time in dataTime" :key="time.company" class="timeitem ">
      <div class="date-range">{{ time.dateRange }}</div>
      <div class="content">
        <div class="company">{{ time.company }}</div>
        <div class="detail">{{ time.detail }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { store } from '@/store/index'
export default {
  name: 'Timeline',
  props: {
    dataTime: {
      type: Array,
      default() {
        return []
      }
    }
  },
  computed: {
    device() {
      return store.state.device
    }
  }
}
</script>
<style scoped lang="scss">
.timeline {
  .timeitem {
    position: relative;
    left: 3rem;
    .date-range {
      font-family: georgia;
      padding-bottom: 1.5rem;
      &::after {
        content: "";
        width: 10px;
        height: 10px;
        display: inline-block;
        border-style: solid;
        border-radius: 50px;
        border-width: 2px;
        position: absolute;
        left: -3rem;
        top: 3px;
      }
    }
    .content {
      margin-bottom: 1.5rem;
      position: relative;
      width: 80%;
      &::after {
        content: "";
        position: absolute;
        height: 100%;
        width: 1px;
        border-left-style: solid;
        border-left-width: 2px;
        left: calc(-3rem + 5px);
        top: 0;
        opacity: 0.17;
      }
      .company{
        padding-bottom: 1.5rem;
      }
    }
  }
}
.sm-timeline {
  font-size: 0.5rem;
  padding-top: 5%;
  .timeitem {
    .date-range {
      padding-bottom: 0.5rem;
    }
    .content {
      margin-top: 0.5rem;
      .company{
        padding-bottom: 0.5rem;
      }
    }
  }
}
</style>
