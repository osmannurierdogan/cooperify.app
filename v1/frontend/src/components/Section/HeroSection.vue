<template lang="pug">
// ! SECTION HERO START
section#hero.section-hero
  .hero-container
    // ? grid grid--2-cols
    .hero-text-box
      h1.heading-primary
        | All-in-one self improvement and productivity app!
      p.hero-description
        | Simple application to transform your life. Tailored to your personal knowledge level. Helps you to go from zero to hero by improving your knowledge, productivity, focus and most importantly your willpower!
      div.hero-buttons
        ButtonComponent(:buttonProps="{class: 'button button--full', text: 'Get access', destination:'https://portal.cooperify.app/'}")
        ButtonComponent(:buttonProps="{class: 'button button--outline', text: 'Learn more', destination:'#how', icon:'fa-solid fa-arrow-down-long'}")
      .features-delivered
        .features-delivered__images
          img(loading='lazy' src='@/assets/images/customers/customer-1.jpg' alt='Customer Photo')
          img(loading='lazy' src='@/assets/images/customers/customer-2.jpg' alt='Customer Photo')
          img(loading='lazy' src='@/assets/images/customers/customer-3.jpg' alt='Customer Photo')
          img(loading='lazy' src='@/assets/images/customers/customer-4.jpg' alt='Customer Photo')
          img(loading='lazy' src='@/assets/images/customers/customer-5.jpg' alt='Customer Photo')
          img(loading='lazy' src='@/assets/images/customers/customer-6.jpg' alt='Customer Photo')
        p.features-delivered__text #[span 100+] users changed their lives
    .hero-image-box
      img.hero-image(loading='lazy' src='@/assets/images/hero.png' alt='Woman enjoying food, features in storage container, and food bowls on a table.')
// ! SECTION HERO END
</template>
<script setup>
import ButtonComponent from '../Button/ButtonComponent.vue';
</script>
<style lang="scss">
.hero {
  &-container {
    max-width: 130rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 9.6rem;
    margin: 0 auto;
    padding: 0 3.2rem;
    align-items: center;

    @include mixins.responsive(small-desktop) {
      max-width: 120rem;
    }

    @include mixins.responsive(tab-land) {
      gap: 4.8rem;
    }

    @include mixins.responsive(tab-port) {
      grid-template-columns: 1fr;
      padding: 0 8rem;
      gap: 6.4rem;
    }

    @include mixins.responsive(phone) {
      padding: 0 5rem;
    }
  }

  &-image {
    width: 100%;

    @include mixins.responsive(tab-port) {
      width: 60%;
    }

    @include mixins.responsive(phone) {
      width: 90%;
    }
  }

  &-description {
    font-size: 2rem;
    line-height: 1.6;
    margin-bottom: 4.8rem;
  }

  &-buttons {
    display: flex;
    gap: 1.2rem;

    @include mixins.responsive(phone-small) {
      flex-direction: column;
    }
  }

  &-text-box,
  &-image-box {
    @include mixins.responsive(tab-port) {
      text-align: center;
    }
  }

}

.features-delivered {
  display: flex;
  align-items: center;
  margin-top: 8rem;
  gap: 1.6rem;

  //justify-content: space-between;
  @include mixins.responsive(tab-port) {
    justify-content: center;
    margin-top: 3.2rem;
  }

  @include mixins.responsive(phone) {
    margin-top: 4.8rem;
  }

  @include mixins.responsive(phone-small) {
    flex-direction: column;
  }

  &__images {
    display: flex;

    & img {
      width: 4.8rem;
      height: 4.8rem;
      border-radius: 50%;
      border: 3px solid variables.$color-primary-light-9;

      &:not(:first-child) {
        margin-left: -1.6rem;
      }
    }
  }

  &__text {
    font-size: 1.8rem;
    font-weight: 600;
    line-height: 1.2;

    & span {
      color: variables.$color-primary-dark-9;
    }
  }
}
</style>
