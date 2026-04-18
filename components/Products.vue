<template>
    <div class="products">
        <div v-if="loading" class="loader">
            <div class="spinner"></div>
            <h3>Loading products...</h3>
        </div>
        <Product v-for="product in products" :key="product.id" :product="product" v-else />
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
      products: [],
      loading: false
    }
  },
  mounted() {
    this.fetchProducts();
  },
  methods: {
    async fetchProducts() {
      this.loading = true;
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        this.products = data;
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        this.loading = false;
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

.loader {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 80vh;
    width: 100%;
}

.spinner {
    border: 6px solid #f3f3f3;
    border-top: 6px solid #3498db;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    animation: spin 1s linear infinite;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}
</style>