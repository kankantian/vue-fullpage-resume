<template>
  <div v-if="device!=='mobile'" class="flex project-item">
    <div class="info">
      <div class="img"><img :src="info.img" alt=""></div>
      <h3 class="pro-name">
        {{ info.name }}
      </h3>
      <div class="pro-desc">{{ info.desc }}</div>
    </div>
    <div class="detail">
      <template v-for="item in info.detail">
        <InfoItem :key="item.key" :data="item" />
      </template>
    </div>
  </div>
  <div v-else class="sm-project">
    <div class="detail sm-detail">
      <template v-for="item in info.detail">
        <InfoItem :key="item.key" :data="item" />
      </template>
    </div>
  </div>
</template>

<script>
import { store } from '@/store/index'
import InfoItem from '@v/components/project/InfoItem.vue'
export default {
  name: 'ProjectItem',
  components: {
    InfoItem
  },
  props: {
    info: {
      type: Object,
      default: () => {
        return {}
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
.project-item{
  width: 80%;
  margin: 0 auto;
  min-height: 500px;
  background-color: rgba(166, 77, 121, 0.31);
  padding: 1.25rem 0.5rem;
  align-items: flex-start !important;
  .info {
    width: 25%;
    .img{
      overflow: hidden;
      img {
        display: block;
        width: 100%;
        &:hover{
          transform: scale(2);
          transition: All 10s ease;
        }
      }
    }
    .pro-name {
      padding: 1rem 0;
      line-height: 1.3rem;
    }
    .pro-desc {
      padding-bottom: 0.5rem;
    }
  }
  .detail{
    width: 75%;
    padding-left: 1rem;
  }
}
.sm-project {
  .sm-detail{
    background-color: rgba(166, 77, 121, 0.31);
    overflow-y: scroll;
    max-height: 500px;
    /deep/ .info-item {
      padding: 0.5rem;
      .title {
        width: 4rem;
        font-size: 0.8rem;
      }
    }
  }
}
</style>
