<template>
  <div class="stars">
    <div class="stars-bg">
      ★★★★★
    </div>
    <div
      class="stars-fill"
      :style="{ width: fillPercentage + '%' }"
    >
      ★★★★★
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  rating: {
    type: Number,
    default: 3.7
  }
})

const fillPercentage = computed(() => (props.rating / 5) * 100)
</script>

<style scoped>
.stars {
  position: relative;
  display: inline-block;
  font-size: 20px;
  font-family: Arial;
}

.stars-bg {
  color: #ddd;
}

.stars-fill {
  color: gold;
  position: absolute;
  top: 0;
  left: 0;
  white-space: nowrap;
  overflow: hidden;
}
</style>