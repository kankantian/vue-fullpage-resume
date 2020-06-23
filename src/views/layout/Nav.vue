<template>
  <div class="nav flex" :class="{ 'sm-nav': device ==='mobile', 'black': pageIndex !==1 && pageIndex !==3 }">
    <div v-if="device!=='mobile'" class="nav_logo">
      <a href="/">Fuck You</a>
    </div>
    <ul id="menu" class="nav_bar">
      <li
        v-for="item in options"
        :key="item.title"
        :data-menuanchor="item.pageAnchor"
        @click="toPage(item.pageAnchor)"
      >
        <a :href="`#${item.pageAnchor}`">{{ item.title }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Nav',
  props: {
    pageIndex: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      options: [
        {
          title: '主页1',
          pageAnchor: 'page1'
        },
        {
          title: '主页2',
          pageAnchor: 'page2'
        },
        {
          title: '主页3',
          pageAnchor: 'page3'
        },
        {
          title: '主页4',
          pageAnchor: 'page4'
        },
        {
          title: '主页5',
          pageAnchor: 'page5'
        }
      ]
    }
  },
  computed: {
    device() {
      return this.$store.state.app.device
    }
  },
  methods: {
    toPage(payload) {
      // console.log(payload)
      this.$emit('moveTo', payload)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.nav {
  width: 100%;
  position: fixed;
  z-index: 999;
  height: $nav-height;
  justify-content: space-around;
  .nav_logo {
    width:20%;
    margin-left: $nav-height;
    a {
      font-size: 3.5rem;
    }
  }
  .nav_bar{
    width: 60%;
    li {
      float: left;
      width: 20%;
      text-align: center;
      a {
        font-size: 1.5rem;
        line-height: $nav-height;
        &:after{
          display: block;
          content: "";
          height: 2px;
          width: 0%;
          background-color: #80d6f2;
          transition: width .5s ease-in;
          -moz-transition: width .5s ease-in;
          -webkit-transition: width .5s ease-in;
          -o-transition: width .5s ease-in;
        }
        &:hover:after{
          width: 100%;
        }
      }
    }
  }
}
.sm-nav{
  .nav_bar{
    width: 100%;
  }
}
.black{
  background-color: #262a40;
}
</style>
