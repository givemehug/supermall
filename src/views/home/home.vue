<template>
  <div id='home'>
  <nav-bar class="home-nav"><div slot='center'>购物街</div></nav-bar>
  <tab-control @tabClick = 'tabClick' class="tabControl" :titles="['流行','新款','精选']" ref='tabControl1' v-show='isShowTabControl'></tab-control>
  <scroll class="content"
   ref='scroll'
  :probeType='3' 
  @scrollClick='scrollClick'
  :pullUpLoad='true'
  @pullingUp='loadMore'
  >
  <home-swiper :banners="this.banners" @swiperImgLoad='swiperImgLoad'></home-swiper>
  <recommend-view :recommend="this.recommends"></recommend-view>
  <feature-view></feature-view>
  <tab-control @tabClick = 'tabClick' class="tabControl" :titles="['流行','新款','精选']" ref='tabControl2'></tab-control>
  <goods-list :goods="showGoods"></goods-list>
  </scroll>
  <back-top @click.native = 'backClick' v-show='showBackTop'></back-top>
</div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
import Scroll from 'components/common/scroll/Scroll.vue'
import TabControl from 'components/content/tabControl/TabControl.vue'
import GoodsList from 'components/content/GoodsList/GoodsList.vue'
import BackTop from 'components/content/backTop/BackTop.vue'

import HomeSwiper from './childConpons/HomeSwiper.vue'
import RecommendView from './childConpons/RecommendView.vue'
import FeatureView from './childConpons/FeatureView.vue'

import {getHomeMultidata,getHomeGoods} from 'network/home.js'

export default {
  name: 'Home',
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        'pop': {page: 0, list: []},
        'new': {page: 0, list: []},
        'sell': {page: 0, list: []}
      },
      currentType: 'pop',
      showBackTop: false,
      tabOffsetTop: 0,
      isShowTabControl: false,
      saveY: 0
    }
  },
  components: {
    NavBar,
    Scroll,
    TabControl,
    GoodsList,
    BackTop,
    HomeSwiper,
    RecommendView,
    FeatureView
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list
    }
  } 
  ,
  created() {
    this.getHomeMultidata()
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')

   
  },
  mounted () {
    const refresh = this.debounce(this.$refs.scroll.refresh,500)
     this.$bus.$on('imgLoad',() => {
      refresh()
    })
  },
  methods: {
    /*
      事件监听相关的方法
    */ 
   debounce(func,delay) {
     let timer = null

     return function(...args){
       if(timer) clearTimeout(timer)
        
       timer = setTimeout(() => {
         func.apply(this,args)
       },delay)
     }
   },

   tabClick(index) {
       
       switch(index) {
         case 0 :{
           this.currentType = 'pop'
           break
         }
         case 1 :{
           this.currentType = 'new'
           break
         }
         case 2 :{
           this.currentType = 'sell'
           break
         }
       }
          this.$refs.tabControl1.currentIndex = index
          this.$refs.tabControl2.currentIndex = index
   },
   backClick() {
    this.$refs.scroll.scrollTo(0,0,500)
   },
   scrollClick(position) {
     this.isShowTabControl = ((-position.y) > this.tabOffsetTop) ? true : false
     return this.showBackTop = (-position.y>1000) ? true : false 
   },
   loadMore() {
    this.getHomeGoods(this.currentType)
   },
   swiperImgLoad() {
     this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
   },



    /*
      网络请求相关函数
    */ 
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
      })
    },
    getHomeGoods(type) {
      getHomeGoods(type,1).then(res => {
        const page = this.goods[type].page + 1
        getHomeGoods(type,page).then(res => {
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page += 1
          
          this.$refs.scroll.finishPullUp()
        })
    })
    }

  },
  activated () {
    this.$refs.scroll.scrollTo(0,this.saveY,0)
    this.$refs.scroll.refresh()
  },
  deactivated () {
    this.saveY = this.$refs.scroll.getScrollY()
  }
}
</script>

<style scoped>

 #home {
    padding-top: 44px;
  }

.home-nav {
  background-color: var(--color-tint);
  color: #fff;
  position:fixed;
  z-index:9;
  left:0;
  right: 0;
  top:0;
}

.tabControl {
  position: relative;
  z-index: 10;
  background-color: #fff;
}

.content {
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;}
</style>
