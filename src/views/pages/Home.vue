<template>
  <div class="home flex">
    <div class="avatar">
      <img :src="info.avatar" alt="">
    </div>
    <p class="motto">{{ info.motto }}</p>
    <p class="name">{{ info.name }}</p>
    <p class="location">{{ info.location }}</p>
    <p class="position">{{ info.position }}</p>
    <p class="phone">{{ info.phone }}</p>
  </div>
</template>

<script>
import AVATAR from '@/assets/avatar.jpg'
export default {
  name: 'Home',
  props: {
    msg: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      info: {
        avatar: AVATAR,
        motto: '只有想不通的人，没有走不通的路',
        name: 'Fuck',
        location: 'Hello',
        position: 'World',
        phone: '15521053592'
      }
    }
  }
}
</script>
<style scoped lang="scss">
.home{
  height: 100%;
  justify-content: center;
  flex-direction: column;
  .avatar {
    img{
      height: 120px;
      width: 120px;
      border-radius: 50%;
    }
  }
  p{
    font-size: 1.2rem;
    padding: 0.5rem 0;
    font-weight: bold;
  }
  .motto{
    margin: 1rem 0 0 0;
    position: relative;
    &::after{
      display: block;
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      height: 1px;
      width: 100%;
      background-color: #fff;
      border-radius: 4px;
    }
  }
}
</style>
