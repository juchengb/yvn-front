<template>
  <div class="app">
    <Header />
    <main>
      <slot />
    </main>
    <Footer />
  </div>
</template>
  
<style scoped>
  .app {
    font-family: 'Montserrat', sans-serif;
    color: var(--text-color);
    background-color: var(--bg-color);
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
  
  footer {
    flex-shrink: 0; /* 防止 footer 被壓縮 */
    display: flex;
    justify-content: center;
    font-size: 0.8rem;
    color: var(--secondary-color);
  }

</style>
<script>
// import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';

export default {
components: {
  // Header,
  Footer,
},
};
</script>
  