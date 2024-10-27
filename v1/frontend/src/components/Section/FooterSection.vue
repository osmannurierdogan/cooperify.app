<template lang="pug">
// ! FOOTER SECTION START
footer#footer.footer
  div.container.grid.grid--footer
    // ! FOOTER COLUMN START
    div.footer__column--logo
      a.footer-logo(href='#')
        img(loading='lazy' src='@/assets/images/logo-rectangle/4.png' alt='Cooperify Logo')
      ul.footer-links
        li
          a.footer-links-item(href='#')
            ion-icon.footer-links-item-icon(name='logo-instagram')
        li
          a.footer-links-item(href='#')
            ion-icon.footer-links-item-icon(name='logo-facebook')
        li
          a.footer-links-item(href='#')
            ion-icon.footer-links-item-icon(name='logo-twitter')
      p.footer-copyright
        | Copyright &copy; 
        span.year {{ new Date().getFullYear() }}
        |  by Omnifood, Inc. All rights reserved.
    // ! FOOTER COLUMN END
    // ! FOOTER COLUMN START
    div.footer__column--address
      p.heading-footer Contact Us
      address.contacts
        p.address
          | 623 Harrison St., 2nd Floor, San Francisco, CA 94107
        p
          a.footer-links-item(href='#') +44 123 654 789
          br
          a.footer-links-item(href='#')
            | exaxmple@gmail.com
    // ! FOOTER COLUMN END
    // ! FOOTER COLUMN START
    div.footer__column--navigation
      p.heading-footer Account
      ul.nav-footer
        li
          a.footer-links-item(href='#') Create account
        li
          a.footer-links-item(href='#') Sign in
        li
          a.footer-links-item(href='#') IOS app
        li
          a.footer-links-item(href='#') Android app
    // ! FOOTER COLUMN END
    // ! FOOTER COLUMN START
    div.footer__column--navigation
      p.heading-footer Company
      ul.nav-footer
        li
          a.footer-links-item(href='#') About Omnifood
        li
          a.footer-links-item(href='#') For Business
        li
          a.footer-links-item(href='#') Cooking partners
        li
          a.footer-links-item(href='#') Careers
    // ! FOOTER COLUMN END
    // ! FOOTER COLUMN START
    div.footer__column--navigation
      p.heading-footer Resources
      ul.nav-footer
        li
          a.footer-links-item(href='#') Recipe directory
        li
          a.footer-links-item(href='#') Help center
        li
          a.footer-links-item(href='#') Privacy &amp; terms
    // ! FOOTER COLUMN END
// ! FOOTER SECTION END
</template>
<style lang="scss">
.footer {
  &__column {
    &--logo {
      display: flex;
      flex-direction: column;

      @include mixins.responsive(tab-small) {
        grid-column: span 3;
      }
    }

    &--address {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      @include mixins.responsive(tab-small) {
        grid-column: span 3;
      }
    }

    &--navigation {
      @include mixins.responsive(tab-small) {
        grid-row: 1;
        grid-column: span 2;
        margin-bottom: 3.2rem;
      }
    }
  }

  &-logo {
    display: block;
    margin-bottom: 3.2rem;

    & img {
      width: 100%;
    }
  }

  &-copyright {
    font-size: 1.4rem;
    line-height: 1.6;
    margin-top: auto;
    color: variables.$color-gray-6;
  }
}

.footer-links {
  display: flex;
  flex-direction: row;
  gap: 2.4rem;

  &-item {
    &-icon {
      width: 2.4rem;
      height: 2.4rem;
    }

    &:link,
    &:visited {
      color: variables.$color-gray-6;
      text-decoration: none;
      font-size: 1.6rem;
      transition: all 0.3s;
    }

    &:hover,
    &:active {
      color: variables.$color-gray-1;
    }
  }
}

.contacts {
  /* display: flex;
  flex-direction: column;
  justify-content: space-between; */
  font-style: normal;
  line-height: 1.6;
  font-size: 1.6rem;
}

.address {
  margin-bottom: 2.4rem;
}
</style>
<script setup>

</script>
