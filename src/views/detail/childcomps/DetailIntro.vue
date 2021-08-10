<template>
  <div class="wrapper">
    <div class="text-wrapper">
      <div class="title">{{goods.title}}</div>
        <div class="price">
            <span class="newPrice">{{goods.price}}</span>
            <span class="oldPrice">{{goods.oldPrice}}</span>
            <span class="discountDesc">{{goods.discountDesc}}</span>
          </div>
    </div>
    <div class="sale-wrapper" v-if='goods.columns!==undefined'>
      <span>{{goods.columns[0]}}</span>
      <span class="center">{{goods.columns[1]}}</span>
      <span>{{goods.services[goods.services.length-1].name}}</span>
    </div>
    <div class="express-wrapper" v-if='goods.service!==undefined'>
      <img :src="goods.services[0].icon" alt="">
      <span>{{goods.services[0].name}}</span>
      <img :src="goods.services[1].icon" alt="">
      <span>{{goods.services[1].name}}</span>
      </div>
      <ul>
        <li>..</li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li>..</li>
      </ul>
  </div>
</template>

<script>

export default {
  name: 'DetailIntro',
  props: {
    goods: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style scoped>

.title {
  font-size: 16px;
  margin-top: 8px;
  margin-bottom: 6px;
  color: black;
}

.price {
  padding-bottom: 20px;
}

.newPrice {
  font-size: 26px;
  color: var(--color-high-text);
}

.oldPrice {
  font-size: 15px;
  margin-left: 5px;
  text-decoration:line-through;
  position: relative;
}

.discountDesc {
  font-size: 12px;
  background-color: var(--color-high-text);
  color: white;
  padding: 5px;
  margin-left: 5px;
  border-radius: 50px;
  position: absolute;
}

.sale-wrapper {
  display: flex;
  padding-bottom: 10px;
  border-bottom: 1px solid rgb(0,0,0,.1);
}

.sale-wrapper span {
  flex: 1;
  font-size: 14px;
}

.express-wrapper {
  margin-top: 10px;
  display: flex;
}

.express-wrapper span {
  font-size: 12px;
flex: 1;
text-align:left;
}

.express-wrapper img {
  width: 12px;
  height: 12px;
}
</style>