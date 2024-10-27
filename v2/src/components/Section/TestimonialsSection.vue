<template lang="pug">
// ! SECTION TESTIMONIALS START
section#testimonials.section-testimonials
  div.testimonials-container
    span.heading-sub  Testimonials 
    h2.heading-secondary Once you try it, you can&apos;t go back
    div.testimonials
      // ! TESTIMONIAL ITEM START
      figure.testimonial
        img.testimonial-image(loading='lazy' src='@/assets/images/customers/dave.jpg' alt='Dave Bryson Photo')
        blockquote.testimonial-text
          | This app has completely transformed my daily routine! 
          | I feel sharper, more focused, and ready to tackle my goals every day.
        p.testimonial-name &mdash; Alex Turner
      // ! TESTIMONIAL ITEM END
      // ! TESTIMONIAL ITEM START
      figure.testimonial
        img.testimonial-image(loading='lazy' src='@/assets/images/customers/ben.jpg' alt='Ben Hadley Photo')
        blockquote.testimonial-text
          | Such a game-changer for productivity! I’m getting so much more done without feeling overwhelmed.
        p.testimonial-name &mdash; Megan Davis
      // ! TESTIMONIAL ITEM END
      // ! TESTIMONIAL ITEM START
      figure.testimonial
        img.testimonial-image(loading='lazy' src='@/assets/images/customers/steve.jpg' alt='Steve Miller Photo')
        blockquote.testimonial-text
          | I love how this app helps me stay mentally sharp and focused. It’s like a personal coach for my mind!
        p.testimonial-name &mdash; Jordan Lee
      // ! TESTIMONIAL ITEM END
      // ! TESTIMONIAL ITEM START
      figure.testimonial
        img.testimonial-image(loading='lazy' src='@/assets/images/customers/hannah.jpg' alt='Hannah Smith Photo')
        blockquote.testimonial-text
          | Since using this app, I feel more organized and in control of my life. The improvements in my willpower are unbelievable!
        p.testimonial-name &mdash; Samantha Green
      // ! TESTIMONIAL ITEM END
      // ! TESTIMONIAL ITEM START
      figure.testimonial
        img.testimonial-image(loading='lazy' src='@/assets/images/customers/ben.jpg' alt='Ben Hadley Photo')
        blockquote.testimonial-text
          | I’ve never been so consistent with my self-growth until now! It’s simple yet incredibly effective for building focus and resilience.
        p.testimonial-name &mdash; Lucas Ramirez
      // ! TESTIMONIAL ITEM END
      // ! TESTIMONIAL ITEM START
      figure.testimonial
        img.testimonial-image(loading='lazy' src='@/assets/images/customers/hannah.jpg' alt='Dave Bryson Photo')
        blockquote.testimonial-text
          | The daily challenges are just what I need to stay on top of my game. This app is a must-have for anyone wanting to boost their intellect.
        p.testimonial-name &mdash; Ella Scott
      // ! TESTIMONIAL ITEM END
  // ! TESTIMONIAL GALLERY START
  div.gallery
    figure.gallery-item
      img(loading='lazy' src='@/assets/images/gallery/gallery-1.jpg' alt='Photo of beautifully arranged food')
    figure.gallery-item
      img(loading='lazy' src='@/assets/images/gallery/gallery-2.jpg' alt='Photo of beautifully arranged food')
    figure.gallery-item
      img(loading='lazy' src='@/assets/images/gallery/gallery-3.jpg' alt='Photo of beautifully arranged food')
    figure.gallery-item
      img(loading='lazy' src='@/assets/images/gallery/gallery-4.jpg' alt='Photo of beautifully arranged food')
    figure.gallery-item
      img(loading='lazy' src='@/assets/images/gallery/gallery-5.jpg' alt='Photo of beautifully arranged food')
    figure.gallery-item
      img(loading='lazy' src='@/assets/images/gallery/gallery-6.jpg' alt='Photo of beautifully arranged food')
    figure.gallery-item
      img(loading='lazy' src='@/assets/images/gallery/gallery-7.jpg' alt='Photo of beautifully arranged food')
    figure.gallery-item
      img(loading='lazy' src='@/assets/images/gallery/gallery-8.jpg' alt='Photo of beautifully arranged food')
    figure.gallery-item
      img(loading='lazy' src='@/assets/images/gallery/gallery-9.jpg' alt='Photo of beautifully arranged food')
    figure.gallery-item
      img(loading='lazy' src='@/assets/images/gallery/gallery-10.jpg' alt='Photo of beautifully arranged food')
    figure.gallery-item
      img(loading='lazy' src='@/assets/images/gallery/gallery-11.jpg' alt='Photo of beautifully arranged food')
    figure.gallery-item
      img(loading='lazy' src='@/assets/images/gallery/gallery-12.jpg' alt='Photo of beautifully arranged food')
  // ! TESTIMONIAL GALLERY END
// ! SECTION TESTIMONIALS END
</template>
<style lang="scss">
.section-testimonials {
  display: grid;
  grid-template-columns: 55fr 45fr;
  //grid-template-columns: 1fr 1fr;
  align-items: center;

  @include mixins.responsive(tab-port) {
    grid-template-columns: 1fr;
  }
}

.testimonials-container {
  padding: 9.6rem;

  @include mixins.responsive(tab-land) {
    padding: 9.6rem 3.2rem;
  }
}

.gallery {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 1.6rem;
  gap: 1.6rem;

  @include mixins.responsive(small-desktop) {
    grid-template-columns: repeat(2, 1fr);
  }

  @include mixins.responsive(tab-port) {
    grid-template-columns: repeat(6, 1fr);
  }

  @include mixins.responsive(phone) {
    grid-template-columns: repeat(4, 1fr);
  }

  &-item {
    overflow: hidden;

    & img {
      width: 100%;
      display: block;
      transition: all 0.4s;

      &:hover {
        transform: scale(1.2);
      }
    }
  }
}

.testimonials {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 4.8rem 8rem;

  @include mixins.responsive(phone) {
    grid-template-columns: 1fr;
  }
}

.testimonial {
  &-image {
    border-radius: 50%;
    width: 6.4rem;
    margin-bottom: 1.2rem;
  }

  &-text {
    font-size: 1.8rem;
    margin-bottom: 1.6rem;
    line-height: 1.8;
  }

  &-name {
    color: variables.$color-gray-5;
    font-size: 1.6rem;
  }
}
</style>
