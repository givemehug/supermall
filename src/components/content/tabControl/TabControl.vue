<template>
  <div class="control">
    <div class="control-item"
     v-for='(item,index) in titles' 
     :key="index"
     :class='{active:index===currentIndex}'
     @click='itemClick(index)'
     >{{item}}</div>
  </div>
</template>

<script>
export default {
  name: 'TabControl',
  props: {
    titles:Array
  },
  data() {
    return{
      currentIndex:0
    }
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index
      this.$emit('tabClick',index)
    }
  }
}
</script>

<style scoped>
.control {
  display: flex;
  text-align: center;
  height: 44px;
  line-height: 44px;
  font-size: 14px;
  background-color: #fff;
}

.control-item {
  flex: 1;
}

.active {
  color: var(--color-tint);
  border-bottom: 3px solid var(--color-tint);
}
</style>