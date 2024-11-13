<template lang="pug">
// ! SECTION CALL TO ACTION START
section#cta.section-cta
  div.container
    div.cta
      div.cta-box-text
        h2.heading-secondary Get 7-days free trial!
        p.cta-text
          | Want to become the better version of yourself? 
          | Cooperify helps you to go from zero to hero by improving your 
          | #[strong knowledge], #[strong productivity], #[strong focus] 
          | and most importantly your #[strong willpower]!
          | After 7-days you will be charged automatically. 
          | You can cancel or pause anytime :)
        form.cta-form(netlify='' name='sign-up')
          div
            label(for='fullName') Full Name
            input#fullName(autocomplete='off' name='fullName' type='text' placeholder='John Smith' required='')
          div
            label(for='email') Email address
            input#email(autocomplete='off' name='email' type='email' placeholder='me@example.com' required='')
          div
            label(for='fullName') Where did you hear from us?
            select#select-where(name='select-where')
              option(value='') Please choose one option:
              option(value='friends') Friends and family
              option(value='youtube') Youtube video
              option(value='podcast') Podcast
              option(value='ad') Facebook ad
              option(value='others') Others
          ButtonComponent(:buttonProps="{class: 'button button--form', text: 'Sign up now'}")
          //- button.button.button--form(type='submit') Sign up now
      div.cta-box-image(role='img' aria-label='Woman enjoying food')
        // <img loading="lazy" src="./images/eating.jpg" alt="Woman enjoying food" />
// ! SECTION CALL TO ACTION END
</template>
<script setup>
import ButtonComponent from '../Button/ButtonComponent.vue';
</script>
<style lang="scss">
.cta {
  & *:focus {
    outline: none;
    box-shadow: 0 0 0 0.8rem rgba($color: variables.$color-primary-light-9, $alpha: 0.5);
  }

  display: grid;
  grid-template-columns: 2fr 1fr;
  box-shadow: 0 2.4rem 4.8rem rgba(0, 0, 0, 0.15);
  border-radius: 11px;
  background-image: linear-gradient(to right bottom,
    variables.$color-primary-light-2,
    variables.$color-primary);
  overflow: hidden;

  @include mixins.responsive(tab-port) {
    grid-template-columns: 3fr 2fr;
  }

  @include mixins.responsive(phone) {
    grid-template-columns: 1fr;
  }

  &-box {
    &-text {
      padding: 4.8rem 6.4rem 6.4rem;
      color: variables.$color-primary-dark-3;

      & .heading-secondary {
        margin-bottom: 3.2rem;
        color: inherit;
      }

      @include mixins.responsive(phone) {
        padding: 3.2rem;
      }
    }

    &-image {
      background-image: linear-gradient(to right bottom,
          rgba(variables.$color-primary-light-2, 0.35),
          rgba(variables.$color-primary, 0.35)),
        url(@/assets/images/how-it-works/person-working-with-pomodoro-timer.jpg); // url(@/assets/images/eating.jpg)
      object-fit: cover;
      background-size: cover;
      background-position: center;

      @include mixins.responsive(phone) {
        grid-row: 1;
        height: 32rem;
      }
    }
  }

  &-text {
    font-size: 1.8rem;
    line-height: 1.8;
    margin-bottom: 4.8rem;
  }

  &-form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 2.4rem;
    column-gap: 3.2rem;

    @include mixins.responsive(tab-port) {
      grid-template-columns: 1fr;
    }

    & input,
    & select {
      width: 100%;
      font-size: 1.8rem;
      color: inherit;
      font-family: inherit;
      padding: 1.2rem;
      border: none;
      background-color: variables.$color-primary-light-9;
      border-radius: 1rem;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);

      &:focus,
      &:active {
        border: none;
        outline: none;
      }
    }

    & input {
      &::placeholder {
        color: variables.$color-gray-8;
      }
    }

    & label {
      display: block;
      font-size: 1.6rem;
      font-weight: 500;
      margin-bottom: 1.2rem;
    }
  }
}
</style>
