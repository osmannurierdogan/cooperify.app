<template lang="pug">
a(v-if="props.buttonProps?.destination != null", :class="props.buttonProps.class", :href="props.buttonProps.destination") {{ props.buttonProps.text}}
  i(v-if="props.buttonProps?.icon != null", :class="props.buttonProps.icon")
  //- span(v-else) ↓
button(v-else, :class="props.buttonProps.class", type='submit') {{ props.buttonProps.text }}
</template>
<script setup>
const props = defineProps({
  buttonProps: {
    type: Object,
    required: true,
    default: {
      class: 'button button--outline',
      text: 'Submit'
    }
  }
});

</script>
<style lang="scss">
.button {

  &,
  &:link,
  &:visited {
    display: inline-block;
    font-size: 2rem;
    text-decoration: none;
    padding: 1.6rem 3.2rem;
    border-radius: 1rem;
    font-weight: 600;
    transition: all 0.3s;
    cursor: pointer;
    border: none;

    @include mixins.responsive(phone-small) {
      padding: 2.4rem 1.6rem;
    }
  }

  &--full {
    background-color: variables.$color-primary;
    color: variables.$color-white;

    // &:link, &:visited {}
    &:active,
    &:hover {
      background-color: variables.$color-primary-dark-9;
    }
  }

  &--outline {
    background-color: variables.$color-white;
    color: variables.$color-gray-1;

    // &:link, &:visited {}
    &:active,
    &:hover {
      background-color: transparent;
      // border: 3px solid $color-white;
      // ! to add border inside
      box-shadow: inset 0 0 0 3px variables.$color-white;
    }
  }

  &--form {
    background-color: variables.$color-primary-dark-3;
    color: variables.$color-primary-light-9;
    align-self: end;
    padding: 1.2rem;
    font-weight: 500;

    &:hover,
    &:active {
      color: variables.$color-primary-dark-3;
      background-color: variables.$color-primary-light-9;
    }

    @include mixins.responsive(tab-port) {
      margin-top: 1.2rem;
    }
  }

  & i {
    margin-left: .5rem;
  }
}
</style>
