<template>
  <div class="project">
    <div class="slide-box">
      <div v-for="slide in slides" :key="slide.name" class="slide">
        <ProjectItem :info="slide" />
      </div>
    </div>
  </div>
</template>

<script>
import ProjectItem from '@v/components/project/Item.vue'
import BG_IMG from '@/assets/bg.jpg'
export default {
  name: 'Project',
  components: {
    ProjectItem
  },
  props: {
    msg: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      slides: [
        {
          img: BG_IMG,
          name: 'Duis gravida entesque e',
          desc: 'Cum sociis natoque penatibus et est neque congue.',
          detail: [
            {
              key: '产品尺寸',
              value: '123 x 333 x 55 Aliquam faucibus orci elit'
            },
            {
              key: '产品简介',
              value: 'Maecenas wisi. Sed elementum, sapien sodales lectus lectus, porta et, nonummy at, bibendum ac, semper dui, ultrices dui. Integer aliquam. Phasellus ornare ac, felis. Phasellus ornare eu, posuere cubilia Curae, Integer egestas, dui a diam. Duis lobortis, mi id mi ipsum dolor id lorem pretium wisi. In pede. Sed fringilla sem orci, viverra mattis. Aliquam erat lacus, suscipit suscipit placerat, molestie vitae, ultricies a, tortor. Suspendisse bibendum leo eros, varius ac, pede. Duis.'
            },
            {
              key: '重量',
              value: 'Fusce condimentum urna, id dolor sit amet elit. Curabitur enim. Etiam tellus. Donec porttitor magna. Sed nec nisl ut pede. Morbi quis ante. Integer sollicitudin posuere, lacus ultrices.'
            },
            {
              key: '重量1',
              value: 'Fusce condimentum urna, id dolor sit amet elit. Curabitur enim. Etiam tellus. Donec porttitor magna. Sed nec nisl ut pede. Morbi quis ante. Integer sollicitudin posuere, lacus ultrices.'
            }
          ]
        },
        {
          img: BG_IMG,
          name: 'test2'
        },
        {
          img: BG_IMG,
          name: 'test3'
        }
      ]
    }
  }
}
</script>
<style scoped lang="scss">
.project{
  // position: relative;
  position: absolute;
  left: 6%;
  top:50%;
  transform: translateY(-50%);
  width: 88%;
}
</style>
