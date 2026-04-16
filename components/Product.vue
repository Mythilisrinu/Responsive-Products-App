<template>
  <div class="product">
    <div class="tooltip">
      {{product.category.charAt(0).toUpperCase() + product.category.slice(1)}} - {{ product.description }}
    </div>
    <div style="width: 30%; display: flex; flex-direction: column; justify-content: center; background-color:aliceblue; padding: 5px;">   
         <img :src="product.image" :alt="product.title" class="product-image"  />
    </div>
    <div style="width: 70%; display: flex; flex-direction: column;padding: 5px; justify-content: center;">
      <div class="product-title">{{ product.title }}</div>
      <div class="rating"><Rating :rating="product.rating.rate" />({{ product.rating.count }})</div>
      <div class="product-price">Rs.{{ product.price }}</div>
    </div>
  </div>
</template>
<script>
import Rating from './Rating.vue';
export default {
  name: 'Product',
  components: {
    Rating
  },
  props: {
    product: {
      type: Object,
      required: true
    }
  }
}
</script>
<style scoped>
.product {
  border: 1px solid #ccc;
  height: 150px;
  width: 237px;
  display: flex;
  flex-direction: row;
  border-radius: 5px;
  margin: 5px;
  position: relative; 
}

/* Tooltip */
.tooltip {
  position: absolute;
  bottom: 110%;
  left: 50%;
  transform: translateX(-50%);
  background: #333;
  color: #fff;
  padding: 8px;
  border-radius: 5px;
  width: 220px;
  font-size: 12px;
  opacity: 0;
  visibility: hidden;
  transition: 0.2s ease;
  z-index: 10;
}

/* Show tooltip on hover */
.product:hover .tooltip {
  opacity: 1;
  visibility: visible;
}
.product-title {
  font-size: 14px;
  font-weight: bold;
}
.product-price {
  color:green;
  font-size: 20px;
  font-weight: bold;
}

</style>