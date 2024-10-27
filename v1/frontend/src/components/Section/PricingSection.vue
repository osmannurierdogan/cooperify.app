<template lang="pug">
// ! SECTION PRICING START
section#price.section-pricing
  // ! SECTION PRICING TITLE START
  div.container
    span.heading-sub Pricing
    h2.heading-secondary
      | Eating well without breaking the bank
  // ! SECTION PRICING TITLE END
  // ! SECTION PRICING PLAN BOX START
  div.container.grid.grid--2-cols.grid--align-center.margin-bottom-medium
    // ! SECTION PRICING PLAN CARD START
    div.pricing-plan.pricing-plan--starter
      // ! PRICING PLAN HEADER START
      header.pricing-plan__header
        span.heading-sub.pricing-plan__name.center-text Starter
        p.pricing-plan__price
          span $
          |                 399
        p.pricing-plan__text
          | per month. That&apos;s just $13 per meal!
      // ! PRICING PLAN HEADER END
      // ! PRICING PLAN LIST START
      ul.list
        li.list-item
          // ? alternative icon <ion-icon name="checkmark-circle"></ion-icon>
          ion-icon.plan-icon.list-item-icon(name='checkmark-circle-outline')
          |                 1 meal per day
        li.list-item
          // ? alternative icon <ion-icon name="checkmark-circle"></ion-icon>
          ion-icon.plan-icon.list-item-icon(name='checkmark-circle-outline')
          |                 Order from 11am to 9pm
        li.list-item
          // ? alternative icon <ion-icon name="checkmark-circle"></ion-icon>
          ion-icon.plan-icon.list-item-icon(name='checkmark-circle-outline')
          |                 Delivery is free
        li.list-item
          // ? alternative icon <ion-icon name="close-circle"></ion-icon>
          ion-icon.plan-icon.list-item-icon(name='close-circle-outline')
          |                 Get access to latest recipes
      // ! PRICING PLAN LIST END
      // ! PRICING PLAN BUTTON START
      div.pricing-plan__sign-up
        a.button.button--full(href='#cta') Start eating well
      // ! PRICING PLAN BUTTON END
    // ! SECTION PRICING PLAN CARD END
    // ! SECTION PRICING PLAN CARD START
    div.pricing-plan.pricing-plan--complete
      // ! PRICING PLAN HEADER START
      header.pricing-plan__header
        span.heading-sub.pricing-plan__name.center-text Complete
        p.pricing-plan__price
          span $
          |                 649
        p.pricing-plan__text
          | per month. That&apos;s just $11 per meal!
      // ! PRICING PLAN HEADER END
      // ! PRICING PLAN LIST START
      ul.list
        li.list-item
          // ? alternative icon <ion-icon name="checkmark-circle"></ion-icon>
          ion-icon.plan-icon.list-item-icon(name='checkmark-circle-outline')
          span
            strong 2 features
            |  per day
        li.list-item
          // ? alternative icon <ion-icon name="checkmark-circle"></ion-icon>
          ion-icon.plan-icon.list-item-icon(name='checkmark-circle-outline')
          span
            | Order 
            strong 24/7
        li.list-item
          // ? alternative icon <ion-icon name="checkmark-circle"></ion-icon>
          ion-icon.plan-icon.list-item-icon(name='checkmark-circle-outline')
          |                 Delivery is free
        li.list-item
          // ? alternative icon <ion-icon name="checkmark-circle"></ion-icon>
          ion-icon.plan-icon.list-item-icon(name='checkmark-circle-outline')
          |                 Get access to latest recipes
      // ! PRICING PLAN LIST END
      // ! PRICING PLAN BUTTON START
      div.pricing-plan__sign-up
        a.button.button--full(href='#cta') Start eating well
      // ! PRICING PLAN BUTTON END
    // ! SECTION PRICING PLAN CARD END
  // ! SECTION PRICING PLAN BOX END
  // ! SECTION PRICING BOTTOM INFORMATIVE TEXT START
  div.container.grid
    aside.plan-detail-text
      | Prices include all applicable taxes. You can cancel at any time.
      | Both plans include the following:
  // ! SECTION PRICING BOTTOM INFORMATIVE TEXT END
  // ! PRICING PLAN FEATURES BOX START
  div.container.grid.grid--4-cols
    // ! PRICING PLAN FEATURE START
    div.feature
      ion-icon.feature__icon(name='infinite-outline')
      p.feature__title Never cook again!
      p.feature__text
        | Our subscriptions cover 365 days per year, even including major
        | holidays.
    // ! PRICING PLAN FEATURE END
    // ! PRICING PLAN FEATURE START
    div.feature
      ion-icon.feature__icon(name='nutrition-outline')
      p.feature__title Local and organic
      p.feature__text
        | Our cooks only use local, fresh, and organic products to prepare
        | your features.
    // ! PRICING PLAN FEATURE END
    // ! PRICING PLAN FEATURE START
    div.feature
      ion-icon.feature__icon(name='leaf-outline')
      p.feature__title No waste
      p.feature__text
        | All our partners only use reusable containers to package all your
        | features.
    // ! PRICING PLAN FEATURE END
    // ! PRICING PLAN FEATURE START
    div.feature
      ion-icon.feature__icon(name='pause-circle-outline')
      p.feature__title Pause anytime
      p.feature__text
        | Going on vacation? Just pause your subscription, and we refund
        | unused days.
    // ! PRICING PLAN FEATURE END
  // ! PRICING PLAN FEATURES BOX END
// ! SECTION PRICING END
</template>
<style lang="scss">
.feature {
  &__title {
    font-size: 2.4rem;
    color: variables.$color-gray-2;
    font-weight: 700;
    margin-bottom: 1.6rem;
  }

  &__text {
    font-size: 1.8rem;
    line-height: 1.8;
  }

  &__icon {
    padding: 1.6rem;
    width: 3.2rem;
    height: 3.2rem;
    color: variables.$color-primary;
    background-color: variables.$color-primary-light-9;
    border-radius: 50%;
    margin-bottom: 3.2rem;
  }
}

.pricing-plan {
  border-radius: 1.1rem;
  width: 75%;

  @include mixins.responsive(tab-small) {
    width: 100%;
  }

  &--starter {
    border: 2px solid variables.$color-primary-light-9;
    justify-self: end;
    padding: 4.6rem;
  }

  &--complete {
    background-color: variables.$color-primary-light-9;
    position: relative;
    overflow: hidden;
    padding: 4.8rem;

    &::after {
      content: 'Best value';
      text-transform: uppercase;
      font-size: 1.4rem;
      font-weight: 700;
      top: 6%;
      right: -22%;
      color: variables.$color-gray-2;
      position: absolute;
      background-color: variables.$color-accent-paleo;
      padding: 0.8rem 10rem;
      transform: rotate(45deg);

      @include mixins.responsive(phone) {
        right: -17%;
      }
    }
  }

  &__name {
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 3.2rem;
  }

  &__price {
    font-size: 6.2rem;
    font-weight: 600;
    margin-bottom: 1.6rem;
    color: variables.$color-gray-2;

    & span {
      font-weight: 500;
      font-size: 3rem;
      margin-right: 0.8rem;
    }
  }

  &__header {
    margin-bottom: 4.8rem;
    text-align: center;
  }

  &__text {
    font-size: 1.6rem;
    line-height: 1.6;
    color: variables.$color-gray-5;
  }

  &__sign-up {
    margin-top: 4.8rem;
    text-align: center;
  }
}

.plan-detail-text {
  text-align: center;
  font-size: 1.6rem;
  line-height: 1.6;
}
</style>
