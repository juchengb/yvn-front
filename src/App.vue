<template>
  <MainLayout>
    <router-view />
  </MainLayout>
</template>

<script>
import MainLayout from './layouts/MainLayout.vue';

export default {
  components: {
    MainLayout,
  },
};
</script>

<style>
/* 全局樣式可在此處補充 */
</style>
