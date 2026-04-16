<template>
    <div class="products">
        <Product v-for="product in products" :key="product.id" :product="product" />    
    </div>
</template>
<script>
import Product from './Product.vue';
export default {
  name: 'Products',
  components: {
    Product
  },
  data() {
    return {
      products: []
    }
  },
  mounted() {
    this.fetchProducts();
  },
  methods: {
    async fetchProducts() {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        this.products = data;
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    }
  }
}
</script>
<style scoped>  
.products {
    margin-top: 5px;
    text-align: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
}
</style>