<template lang="pug">
// ! SECTION FEATURES START
section#features.section-features
  // ! SECTION FEATURE TITLE START
  .container.center-text
    span.heading-sub Features
    h1.heading-secondary
      | Books & Challenges & Habits & Timers
  // ! SECTION FEATURE TITLE END
  .container.grid.grid--3-cols.margin-bottom-medium
    // ! FEATURE ITEM START
    .meal
      // ! FEATURE ITEM IMAGE START
      .meal__image-box
        img.meal-image(loading='lazy' src='@/assets/images/features/meal-1.jpg' alt='Japanese Gyozas Image')
      // ! FEATURE ITEM IMAGE END
      // ! FEATURE ITEM CONTENT START
      .meal-content
        // ! FEATURE TAGS START
        .meal-tags
          span.meal-tag.meal-tag--vegetarian Vegetarian
        // ! FEATURE TAGS END
        p.meal-title Japanese Gyozas
        // ! FEATURE ATTRIBUTES BOX START
        ul.meal-attributes
          // ! FEATURE ATTRIBUTE START
          li.meal-attribute
            ion-icon.meal-icon(name='flame-outline')
            //
              <span class="meal-text__number">650</span>
              calories
            span
              strong.meal-attribute__strong 650
              |                     calories
          // ! FEATURE ATTRIBUTE END
          // ! FEATURE ATTRIBUTE START
          li.meal-attribute
            ion-icon.meal-icon(name='restaurant-outline')
            span
              | NutriScore &reg;
              strong.meal-attribute__strong 74
          // ! FEATURE ATTRIBUTE END
          // ! FEATURE ATTRIBUTE START
          li.meal-attribute
            ion-icon.meal-icon(name='star-outline')
            span
              strong.meal-attribute__strong 4.9
              |  rating
              |                     (537)
          // ! FEATURE ATTRIBUTE END
        // ! FEATURE ATTRIBUTES BOX END
      // ! FEATURE ITEM CONTENT END
    // ! FEATURE ITEM END
    // ! FEATURE ITEM START
    .meal
      // ! FEATURE ITEM IMAGE START
      .meal__image-box
        img.meal-image(loading='lazy' src='@/assets/images/features/meal-2.jpg' alt='Avocado Salad Image')
      // ! FEATURE ITEM IMAGE END
      // ! FEATURE ITEM CONTENT START
      .meal-content
        // ! FEATURE TAGS START
        .meal-tags
          span.meal-tag.meal-tag--vegan Vegan
          span.meal-tag.meal-tag--paleo Paleo
        // ! FEATURE TAGS END
        p.meal-title Avocado Salad
        // ! FEATURE ATTRIBUTES BOX START
        ul.meal-attributes
          // ! FEATURE ATTRIBUTE START
          li.meal-attribute
            ion-icon.meal-icon(name='flame-outline')
            //
              <span class="meal-text__number">650</span>
              calories
            span
              strong.meal-attribute__strong 400
              | calories
          // ! FEATURE ATTRIBUTE END
          // ! FEATURE ATTRIBUTE START
          li.meal-attribute
            ion-icon.meal-icon(name='restaurant-outline')
            span
              | NutriScore &reg;
              strong.meal-attribute__strong 92
          // ! FEATURE ATTRIBUTE END
          // ! FEATURE ATTRIBUTE START
          li.meal-attribute
            ion-icon.meal-icon(name='star-outline')
            span
              strong.meal-attribute__strong 4.8
              |  rating
              |                     (441)
          // ! FEATURE ATTRIBUTE END
        // ! FEATURE ATTRIBUTES BOX END
      // ! FEATURE ITEM CONTENT END
    // ! FEATURE ITEM END
    // ! DIET BOX START
    .diet
      h3.heading-tertiary Works with any diet:
      ul.diet-list.list
        li.diet-name.list-item
          ion-icon.diet-icon.list-item-icon(name='checkmark-circle-outline')
          // <ion-icon name="checkmark-outline"></ion-icon>
          span Vegetarian
        li.diet-name.list-item
          ion-icon.diet-icon.list-item-icon(name='checkmark-circle-outline')
          // <ion-icon name="checkmark-outline"></ion-icon>
          span Vegan
        li.diet-name.list-item
          ion-icon.diet-icon.list-item-icon(name='checkmark-circle-outline')
          // <ion-icon name="checkmark-outline"></ion-icon>
          span Pescatarian
        li.diet-name.list-item
          ion-icon.diet-icon.list-item-icon(name='checkmark-circle-outline')
          // <ion-icon name="checkmark-outline"></ion-icon>
          span Gluten-free
        li.diet-name.list-item
          ion-icon.diet-icon.list-item-icon(name='checkmark-circle-outline')
          // <ion-icon name="checkmark-outline"></ion-icon>
          span Lactose-free
        li.diet-name.list-item
          ion-icon.diet-icon.list-item-icon(name='checkmark-circle-outline')
          // <ion-icon name="checkmark-outline"></ion-icon>
          span Keto
        li.diet-name.list-item
          ion-icon.diet-icon.list-item-icon(name='checkmark-circle-outline')
          // <ion-icon name="checkmark-outline"></ion-icon>
          span Paleo
        li.diet-name.list-item
          ion-icon.diet-icon.list-item-icon(name='checkmark-circle-outline')
          // <ion-icon name="checkmark-outline"></ion-icon>
          span Low FODMAP
        li.diet-name.list-item
          ion-icon.diet-icon.list-item-icon(name='checkmark-circle-outline')
          // <ion-icon name="checkmark-outline"></ion-icon>
          span Kid-friendly
    // ! DIET BOX END
  .container.center-text
    a.link.meal-all-recipes(href='#') See all recipes &rarr;
// ! SECTION FEATURES END
</template>
<style lang="scss">
.meal {
  display: flex;
  flex-direction: column;
  //align-items: center;
  box-shadow: 0 2.4rem 4.8rem rgba(0, 0, 0, 0.075);
  border-radius: 1.2rem;
  overflow: hidden;
  transition: all 0.4s;
  /* @include mixins.responsive(tab-small) {
		grid-template-columns: 2fr 2fr;
	} */

  &:hover {
    transform: translateY(-1.2rem);
    box-shadow: 0 3.2rem 6.4rem rgba($color: #000000, $alpha: 0.06);
  }

  &-image {
    width: 100%;
    /* @include mixins.responsive(phone) {
			width: 85%;
		} */
  }

  &-content {
    /* display: flex;
    flex-direction: column; */
    padding: 3.2rem 4.8rem 4.8rem;

    @include mixins.responsive(tab-port) {
      padding: 2.4rem 3.2rem 3.2rem;
    }
  }

  &-tags {
    display: flex;
    gap: 0.4rem;
    align-items: center;
    margin-bottom: 1.2rem;
  }

  &-tag {
    display: inline-block;
    padding: 0.4rem 0.8rem;
    font-size: 1.2rem;
    text-transform: uppercase;
    font-weight: 600;
    border-radius: 100px;

    &--vegetarian {
      background-color: variables.$color-accent-vegetarian;
    }

    &--vegan {
      background-color: variables.$color-accent-vegan;
    }

    &--paleo {
      background-color: variables.$color-accent-paleo;
    }
  }

  &-title {
    font-size: 2.4rem;
    color: variables.$color-gray-2;
    font-weight: 600;
    margin-bottom: 3.2rem;
  }

  &-attributes {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
  }

  &-attribute {
    display: flex;
    align-items: center;
    font-size: 1.8rem;
    gap: 1.6rem;

    &__strong {
      font-weight: 500;
    }
  }

  &-icon {
    width: 2.4rem;
    height: 2.4rem;
    color: variables.$color-primary;
  }

  &-all-recipes {
    text-align: center;
    font-size: 1.8rem;
  }
}

.diet {
  @include mixins.responsive(tab-small) {
    grid-column: 1 / -1;
    justify-self: center;
  }
}

/* .diet{
  &-list{
    display: flex;
    gap: 1.6rem;
    flex-direction: column;
  }
  &-name{
    display: flex;
    align-items: center;
    gap: 1.6rem;
    font-size: 1.8rem;
  }
  &-icon{
    width: 3rem;
    height: 3rem;
    color: variables.$color-primary;
  }
} */
</style>
