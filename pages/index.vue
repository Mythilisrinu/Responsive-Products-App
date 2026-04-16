<!-- pages/index.vue -->
<template>
  <div class="page">
    <div class="header">
    <Header />
    </div>
    <div class="container">
      <Products />
    </div>
  </div>
</template>

<script setup>
// Components are auto-imported from the components/ folder
</script>
<style scoped>
.header {
   height: 80px;
}
.container {
   min-height: calc(100vh - 80px);
   overflow-y: auto;
}
</style>
