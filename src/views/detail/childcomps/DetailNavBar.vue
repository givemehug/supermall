<template>
  <nav-bar class="wrapper">
    <div slot="left" class="left" @click="backClick"><img src="~assets/img/common/back.svg" alt=""></div>
    <div slot='center' class="center">
      <div v-for='(item,index) in titles' :key='index' class="center-item" @click='itemClick(index)' :class="{active:currentIndex===index}">{{item}}</div>
    </div>
  </nav-bar>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
export default {
  name: 'DetailNavBar',
  data() {
    return {
      titles: ['商品','参数','评论','推荐'],
      currentIndex: 0,
      isActive: true
    }
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index
    },
    backClick() {
      this.$router.back()
    }
  },
  components: {
    NavBar
  }
}
</script>

<style scoped>

.center {
    display: flex;
}
.center-item {
  flex: 1;
  font-size: 13px;
}
.left {
  margin-top: 6px;
  margin-left: 13px;
}
.active {
  color: var(--color-high-text);
}
</style>