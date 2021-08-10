<template>
<div id='detail'>
  <detail-nav-bar class="detail-nav"></detail-nav-bar>
  <scroll class="scroll">
  <detail-swiper :top-images="topImages"></detail-swiper>
  <detail-intro :goods='goods'></detail-intro>
  
  </scroll>
  
  </div>
</template>

<script>
import DetailNavBar from './childcomps/DetailNavBar.vue';
import DetailSwiper from './childcomps/DetailSwiper.vue'
import DetailIntro from './childcomps/DetailIntro.vue'
import Scroll from 'components/common/scroll/Scroll.vue'

import {getDetailData,getDetailIntro} from 'network/detail.js'

export default {
  name: 'Detail',
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      result: {}
    }
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailIntro,
    Scroll
  },
  created () {
  this.iid = this.$route.params.iid
  
  getDetailData(this.iid).then((res) => {
      this.result = res.result
      console.log(this.result);
      this.topImages = res.result.itemInfo.topImages
      this.goods = new getDetailIntro(this.result.itemInfo,this.result.columns,this.result.shopInfo)
      console.log(this.goods); 
    }); 

  }

  
}

</script>

<style scoped>

#detail {
  height: 100vh;
  position: relative;
  z-index: 9;
  background-color: #fff;
}

.detail-nav {
  position: relative;
  z-index: 9;
  background-color: #fff;
}

.scroll{
 height: calc(100% - 44px);
} 
</style>