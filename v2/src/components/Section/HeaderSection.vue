<template lang="pug">
header.header
  a(href='#')
    img(loading="lazy" src="@/assets/images/logo-rectangle/4.png" class="header__logo" alt="Cooperify Logo")
    //- h1.header__logo-text Cooperify
  nav.nav-main
    ul.nav-main__list
      li(v-for="item in getNavigationMenu()", :key="item.id")
        a.nav-main__link(v-if="item.path == null && item.target != null", :href="item.target") {{ item.name }}
        a.nav-main__link.nav-main__linkish-button(v-else, :href="item.path") {{ item.name }}
  button.mobile-navigation-button#mobile-navigation-button(@click="enableMobileMenu()")
    ion-icon.mobile-navigation-button-icon(name='menu-outline')
    ion-icon.mobile-navigation-button-icon(name='close-outline')

</template>
<script setup>
import { useStore } from 'vuex';
// const mobileNavigationButton = document.getElementById("mobile-navigation-button");
// const mobileNavigationButton = document.querySelector(
//   ".mobile-navigation-button",
// );

const store = useStore();

const getNavigationMenu = () => {
  return store.getters._getNavigationMenu;
}

const enableMobileMenu = () => {
  const header = document.querySelector(".header");
  header.classList.toggle("nav-open");
}

// if (mobileNavigationButton != null) {
//   // mobileNavigationButton.classList.toggle('open')
//   mobileNavigationButton.addEventListener("click", () => {
//   });
// }
</script>
<style lang="scss">
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  padding: 0 4.8rem;
  height: 9.6rem;

  &__logo {
    height: 4.2rem;

    &-text {
      color: red;
      font-size: 2.2rem;
    }
  }

  @include mixins.responsive(tab-land) {
    padding: 0 3.2rem;
  }

  /* & .sticky {
		position: fixed;
		top: 0;
		bottom: 0;
		width: 100%;
		background-color: $color-white;
		z-index: 9999;
	} */
}

.nav {
  &-main {
    @include mixins.responsive(tab-port) {
      background-color: rgba(variables.$color-white, 0.97);
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      transform: translateX(100%);

      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.5s ease-out;

      // ! display: none; DOES NOT Allow transitions at all.
      // * 1) Hide it visually
      opacity: 0;

      // * 2) Make it unaccessible to mouse and keyboard
      pointer-events: none;

      // * 3) Hide it from screen readers
      visibility: hidden;
    }

    &__list {
      list-style: none;
      display: flex;
      gap: 4.8rem;
      font-size: 1.8rem;
      font-weight: 500;
      align-items: center;
      justify-content: space-between;

      @include mixins.responsive(tab-land) {
        gap: 3.2rem;
      }

      @include mixins.responsive(tab-port) {
        flex-direction: column;
        gap: 4.8rem;
      }
    }

    &__link {

      &:link,
      &:visited {
        text-decoration: none;
        display: inline-block;
        color: variables.$color-gray-2;
        transition: all 0.3s;

        @include mixins.responsive(tab-port) {
          font-size: 3rem;
        }
      }

      &:hover,
      &:active {
        color: variables.$color-primary-dark-9;
      }
    }

    &__cta,
    &__linkish-button {

      &:visited,
      &:link {
        background-color: variables.$color-primary;
        color: variables.$color-primary-light-9;
        border-radius: 1rem;
        padding: 1.2rem 2.4rem;
      }

      &:hover,
      &:active {
        background-color: variables.$color-primary-dark-9;
      }
    }
  }

  &-footer {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 2.4rem;
  }
}

.sticky {
  position: fixed;
  top: 0;
  bottom: 0;
  width: 100%;
  background-color: variables.$color-white;
  z-index: 9999;
}

.mobile-navigation-button {
  border: none;
  background: none;
  cursor: pointer;

  display: none;

  &-icon {
    height: 4.8rem;
    width: 4.8rem;
    color: variables.$color-gray-2;

    &[name='close-outline'] {
      display: none;
    }
  }

  @include mixins.responsive(tab-port) {
    display: block;
    z-index: 100;
  }
}

// ! FIND A BETTER WAY
.nav-open .nav-main {
  opacity: 1;
  pointer-events: auto;
  visibility: visible;
  transform: translateX(0);
}

.nav-open .mobile-navigation-button-icon[name='close-outline'] {
  display: block !important;
}

.nav-open .mobile-navigation-button-icon[name='menu-outline'] {
  display: none !important;
}
</style>
