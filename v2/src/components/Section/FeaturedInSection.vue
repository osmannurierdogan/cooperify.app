<template lang="pug">
// ! SECTION FEATURED IN START
section.section-featured-in
  .container
    // <h3 class="heading-sub heading-sub--gray">As featured in</h3>
    h3.heading-featured-in As featured in
    .logos
      //- img(loading='lazy' src='@/assets/images/logos/the-new-york-times.png' alt='The New York Times Logo')
      img(loading='lazy' src='@/assets/images/logos/forbes.png' alt='Forbes Logo')
      img(loading='lazy' src='@/assets/images/logos/techcrunch.png' alt='Tech Crunch Logo')
      img(loading='lazy' src='@/assets/images/logos/usa-today.png' alt='USA Today Logo')
      img(loading='lazy' src='@/assets/images/logos/business-insider.png' alt='Business Insider Logo')
      img(loading='lazy' src='@/assets/images/logos/kickstarter.avif' alt='Kick Starter Logo')
      img(loading='lazy' src='@/assets/images/logos/gofundme.png' alt='Gofundme Logo')
// ! SECTION FEATURED IN END
</template>
<style lang="scss">
/* .section-featured-in {
	text-align: center;
} */
.logos {
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 1.8rem;

  & img {
    height: 3.2rem;
    filter: brightness(0);
    opacity: 50%;

    &:hover {
      filter: brightness(1);
      opacity: 100%;
      cursor: pointer;
      transition: all .3s;
    }

    @include mixins.responsive(tab-port) {
      height: 2.4rem;
    }
  }

  @include mixins.responsive(phone) {
    //flex-direction: column;
    //justify-content: space-between;
    gap: 3.2rem;
    flex-wrap: wrap;
  }
}
</style>
