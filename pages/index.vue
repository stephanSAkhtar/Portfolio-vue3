<template>
  <div class="portfolio-wrapper">
    <div id="hero-section" ref="triggerElement">
      <HeroSection />
    </div>
    <div id="about-me" ref="animatedElement">
      <about-me />
    </div>
    <div id="my-skill">
      <my-skills />
    </div>
    <div id="my-work">
      <my-work />
    </div>
    <div id="contact-info">
      <contact-info />
    </div>
  </div>
</template>

<script setup>
import { useUtilities } from "~/composables/useUtilities";
const { scrollInOutAnimation } = useUtilities();
onMounted(() => {
  scrollInOutAnimation("about-me", 200);
});
</script>

<style lang="scss">
.portfolio-wrapper {
  scroll-behavior: smooth;
  #about-me {
    margin: 20rem 0rem;
    overflow: hidden;
  }
  #my-skill {
    position: relative;
    margin: 20rem 0rem;
  }
  #my-work {
    margin: 10rem 0rem;
    transition: all 0.5s ease-out;
  }
}
</style>
