<template lang="pug">
// ! FOOTER SECTION START
footer#footer.footer
  div.container.grid.grid--footer
    // ! FOOTER COLUMN START
    div.footer__column--logo
      a.footer-logo(href='#')
        img(loading='lazy' src='@/assets/images/logo-rectangle/4.png' alt='Cooperify Logo')
      a.holding-info.footer-links-item(href="#") A company of Osiz Limited
      ul.footer-links
        li(v-for="icon in getSocialMediaAccounts()", :key="icon.id")
          a.footer-links-item(:href="icon.path")
            ion-icon.footer-links-item-icon(:name="icon.icon")
      p.footer-copyright
        | Copyright &copy; 
        span.year {{ new Date().getFullYear() }}
        |  by Cooperify, Inc. All rights reserved.
    // ! FOOTER COLUMN END
    // ! FOOTER COLUMN START
    div.footer__column--address
      p.heading-footer Contact Us
      address.contacts
        p.address
          | 623 Harrison St., 2nd Floor, San Francisco, CA 94107
        p
          a.footer-links-item(href='#') +44 123 654 789
        p
          a.footer-links-item(href='mailto:osman@osizagency.com')
            | osman@osizagency.com
    // ! FOOTER COLUMN END

    div.footer__column--navigation(v-for="(value, key, index) in getFooterMenu()", :key="footerMenu")
      p.heading-footer {{ key }}
      ul.nav-footer
        li(v-for="link in value")
          a.footer-links-item(:href="link.target") {{ link.name }}
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
    margin-bottom: 1.6rem;

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

.holding-info {
  font-size: 1.6rem;
  margin-bottom: 1.6rem;
}

.heading-footer {
  text-transform: capitalize;
}
</style>
<script setup>
import { useStore } from 'vuex';

const store = useStore();

const getSocialMediaAccounts = () => {
  return store.getters._getSocialMediaAccounts;
}
const getFooterMenu = () => {
  return store.getters._getFooterMenu;
}
</script>
