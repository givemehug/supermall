<template>
  <div class="wrapper">
    <img src="~assets/img/common/top.png" alt="">
  </div>
</template>

<script>
export default {
  name: 'BackTop'
}
</script>

<style scoped>
.wrapper {
  position: fixed;
  right: 5px;
  bottom: 50px;
}

.wrapper img {
  width: 50px;
  height: 50px;
}
</style>