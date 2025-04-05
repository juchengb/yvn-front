<template>
  <div class="home">
    <div id="hero_sec">
      <Hero />
    </div>
    <section id="about_sec">
      <About />
    </section>
    <section>
      <h1 id="soon">More coming soon...</h1>
    </section>
    <!-- 
    <section id="experience">
      <Experience />
    </section>
    <section id="projects">
      <Projects />
    </section>
    <section id="contact">
      <Contact />
    </section> 
    -->
  </div>
</template>
<script>
import Hero from '../components/HeroSec.vue';
import About from '../components/AboutSec.vue';
// import Projects from '../components/Projects.vue';
// import Contact from '../components/Contact.vue';
// import { setupScrollAnimations } from '../utils/scrollAnimations.js';
// import { onMounted } from 'vue'; 

export default {
  name: "HomePage",
  components: {
    Hero,
    About,
    // Projects,
    // Contact,
  },

};
</script>

<style scoped>
  div.home {
    min-height: 84.5vh;
    padding: 2rem 8rem 1rem 8rem;
  }

  #hero_sec {
    display: flex;
    justify-content: center;
  }

  #soon {
    display: flex;
    justify-content: center;
  }

</style>