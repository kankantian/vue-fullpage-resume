<template>
  <div class="project">
    <h1>Project</h1>
    <div class="slide-box">
      <div class="slide">
        <h3>Slide 2.1</h3>
      </div>
      <div class="slide">
        <h3>Slide 2.2</h3>
      </div>
      <div class="slide">
        <h3>Slide 2.3</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Project',
  props: {
    msg: {
      type: String,
      default: ''
    }
  }
}
</script>
<style scoped lang="scss">
.project{
  // width: 90%;
  // margin: 1rem auto;
  // // min-height: 90%;
  // background-color: rgba(166, 77, 121, 0.31);
  position: relative;
  // padding: 1.25rem 1rem;
  * {
    color: red;
  }
  .slide-box {
    width: 80%;
    height: 500px;
    .fp-slidesContainer {
      height: 500px;
    }
  }
}
</style>
