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
          | Inexpensive, healthy and great-tasting features, without even
          | having to order manually! It feels truly magical.
        p.testimonial-name &mdash; Dave Bryson
      // ! TESTIMONIAL ITEM END
      // ! TESTIMONIAL ITEM START
      figure.testimonial
        img.testimonial-image(loading='lazy' src='@/assets/images/customers/ben.jpg' alt='Ben Hadley Photo')
        blockquote.testimonial-text
          | The AI algorithm is crazy good, it chooses the right features for
          | me every time. It&apos;s amazing not to worry about food anymore!
        p.testimonial-name &mdash; Ben Hadley
      // ! TESTIMONIAL ITEM END
      // ! TESTIMONIAL ITEM START
      figure.testimonial
        img.testimonial-image(loading='lazy' src='@/assets/images/customers/steve.jpg' alt='Steve Miller Photo')
        blockquote.testimonial-text
          | Omnifood is a life saver! I just started a company, so there&apos;s
          | no time for cooking. I couldn&apos;t live without my daily features now!
        p.testimonial-name &mdash; Steve Miller
      // ! TESTIMONIAL ITEM END
      // ! TESTIMONIAL ITEM START
      figure.testimonial
        img.testimonial-image(loading='lazy' src='@/assets/images/customers/hannah.jpg' alt='Hannah Smith Photo')
        blockquote.testimonial-text
          | I got Omnifood for the whole family, and it frees up so much
          | time! Plus, everything is organic and vegan and without plastic.
        p.testimonial-name &mdash; Hannah Smith
      // ! TESTIMONIAL ITEM END
      // ! TESTIMONIAL ITEM START
      figure.testimonial
        img.testimonial-image(loading='lazy' src='@/assets/images/customers/ben.jpg' alt='Ben Hadley Photo')
        blockquote.testimonial-text
          | The AI algorithm is crazy good, it chooses the right features for
          | me every time. It&apos;s amazing not to worry about food anymore!
        p.testimonial-name &mdash; Ben Hadley
      // ! TESTIMONIAL ITEM END
      // ! TESTIMONIAL ITEM START
      figure.testimonial
        img.testimonial-image(loading='lazy' src='@/assets/images/customers/dave.jpg' alt='Dave Bryson Photo')
        blockquote.testimonial-text
          | Inexpensive, healthy and great-tasting features, without even
          | having to order manually! It feels truly magical.
        p.testimonial-name &mdash; Dave Bryson
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
