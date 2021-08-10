<template>
  <div class="recommend">
    <div class="recommend-item" v-for="item in recommend">
      <a :href="item.link">
        <img :src="item.image" alt="" />
        <div>{{ item.title }}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecommendView",
  props: {
    recommend: Array,
  },
};
</script>

<style scoped>
.recommend {
  display: flex;
  text-align: center;
  width: 100%;
  font-size: 14px;
  padding: 10px 0 20px;
  border-bottom: 10px solid #eee;
}

.recommend-item {
  flex: 1;
}

.recommend-item img {
  width: 65px;
  height: 65px;
  margin-bottom: 6px;
}
</style>