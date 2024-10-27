<script setup>
import CallToActionSection from './components/Section/CallToActionSection.vue';
import FeaturedInSection from './components/Section/FeaturedInSection.vue';
import FooterSection from './components/Section/FooterSection.vue';
import HeaderSection from './components/Section/HeaderSection.vue';
import HeroSection from './components/Section/HeroSection.vue';
import HowItWorksSection from './components/Section/HowItWorksSection.vue';
import FeaturesSection from './components/Section/FeaturesSection.vue';
import PricingSection from './components/Section/PricingSection.vue';
import TestimonialsSection from './components/Section/TestimonialsSection.vue';

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll back to top
    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionElement = document.querySelector(href);
      sectionElement.scrollIntoView({ behavior: "smooth" });
    }

    // Close mobile navigation
    if (link.classList.contains("nav-main__link")) {
      header.classList.toggle("nav-open");
    }
  });
});

</script>

<template lang="pug">
HeaderSection
main
  HeroSection
  FeaturedInSection
  HowItWorksSection
  FeaturesSection
  TestimonialsSection
  PricingSection
  CallToActionSection
FooterSection
</template>

<style lang="scss">
.header {
  background-color: variables.$color-primary-light-9;
}

.sticky {
  & .header {
    position: fixed;
    top: 0;
    bottom: 0;
    width: 100%;
    padding-top: 0;
    padding-bottom: 0;
    height: 9.6rem;
    z-index: 999;
    background-color: rgba(255, 255, 255, 0.97);
    //background-color: $color-primary-light-9;
    box-shadow: 0 1.2rem 3.2rem rgba(0, 0, 0, 0.03);
  }

  & .section-hero {
    margin-top: 9.6rem;
  }
}

.section {
  &-hero {
    background-color: variables.$color-primary-light-9;
    padding: 4.8rem 0 9.6rem 0;

    @include mixins.responsive(phone-small) {
      padding: 2.4rem 0 6.4rem 0;
    }
  }

  &-featured-in {
    padding: 4.8rem 0 3.2rem 0;
  }

  &-how {
    padding: 9.6rem 0;
  }

  &-features {
    padding: 9.6rem 0;
  }

  &-testimonials {
    background-color: variables.$color-primary-light-9;
  }

  &-pricing {
    padding: 9.6rem 0;
  }

  &-cta {
    padding: 4.8rem 0 12.8rem;
    // box-shadow: ;
  }
}

.footer {
  padding: 12.8rem 0;
  border: 1px solid variables.$color-gray-7;
}
</style>
