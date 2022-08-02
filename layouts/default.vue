<template>
  <div>
    <the-header />
    <nuxt keep-alive />
    <!-- <the-footer /> -->
  </div>
</template>

<script>
import Header from '@/components/layouts/Header.vue';
// import TheFooter from '@/components/TheFooter';

export default {
  components: {
    TheHeader: Header,
    // TheFooter,
  },
};
</script>
