<template>
  <div>
    <Carousel />
    <Products/>
  </div>
</template>

<script>
import Carousel from '@/components/Carousel.vue';
import Products from '@/components/Products.vue';

export default {
  name: 'Home',

  components: {
    Carousel,
    Products
},
}
</script>
