<template lang="pug">
// ! SECTION HOW IT WORKS START
section#how.section-how
  // ! HOW IT WORKS TITLE CONTAINER START
  div.container
    span.heading-sub  How it works 
    h2.heading-secondary
      | Your self improvement process in 5 simple steps
  // ! HOW IT WORKS TITLE CONTAINER END
  // ! HOW IT WORKS CONTENT CONTAINER START
  div.container
    // ! HOW IT WORKS STEP #1 START
    //- div.step-box.grid.grid--2-cols.grid--align-center
    div.step-box
      // ? HOW IT WORKS STEP #1 TEXT START
      div.step-box-text
        p.step-number 01
        h3.heading-tertiary
          | Keep track of books you read
        p.step-description
          | After your 1-on-1 session, we will assign fundamentals books for your knowledge level. 
          | We will be highly interested and supportive in you with your self-improvement journey with our experts.
      // ? HOW IT WORKS STEP #1 TEXT END
      // ? HOW IT WORKS STEP #1 IMAGE START
      div.step-box-images
        img.step-image(loading='lazy' src='@/assets/images/app/app-screen-1.png' alt='iPhone app preferences selection screen')
      // ? HOW IT WORKS STEP #1 IMAGE END
    // ! HOW IT WORKS STEP #1 END

    // ! HOW IT WORKS STEP #2 START
    //- div.step-box.grid.grid--2-cols.grid--align-center
    div.step-box
      // ? HOW IT WORKS STEP #2 TEXT START
      div.step-box-text
        p.step-number 02
        h3.heading-tertiary Create habits that last forever
        p.step-description
          | You are required to get at least one habit per quarter. 
          | You can create any habit from scratch or select one of the given ones.
          | With daily reminders as messages and/or emails, you will not forget to complete that task!
      // ? HOW IT WORKS STEP #2 TEXT END
      // ? HOW IT WORKS STEP #2 IMAGE START
      div.step-box-images
        img.step-image(loading='lazy' src='@/assets/images/app/app-screen-2.png' alt='iPhone app features approving plan')
      // ? HOW IT WORKS STEP #2 IMAGE END
    // ! HOW IT WORKS STEP #2 END
    
    // ! HOW IT WORKS STEP #3 START
    //- div.step-box.grid.grid--2-cols.grid--align-center
    div.step-box
      // ? HOW IT WORKS STEP #3 TEXT START
      div.step-box-text
        p.step-number 03
        h3.heading-tertiary Join challenges across platform
        p.step-description
          | We are a large community in here. 
          | Each month there is a challenge which everyone in the community can join.
          | Push your limits harder and improve yourself consistently by completing challenges
      // ? HOW IT WORKS STEP #3 TEXT END
      // ? HOW IT WORKS STEP #3 IMAGE START
      div.step-box-images
        img.step-image(loading='lazy' src='@/assets/images/app/app-screen-3.png' alt='iPhone app delivery screen')
      // ? HOW IT WORKS STEP #3 IMAGE END
    // ! HOW IT WORKS STEP #3 END
    
    // ! HOW IT WORKS STEP #4 START
    //- div.step-box.grid.grid--2-cols.grid--align-center
    div.step-box
      // ? HOW IT WORKS STEP #4 TEXT START
      div.step-box-text
        p.step-number 04
        h3.heading-tertiary
          | Create todo lists and set reminders
        p.step-description
          | Never again waste time thinking about what to eat! Omnifood AI
          | will create a 100% personalized weekly meal plan just for you. It
          | makes sure you get all the nutrients and vitamins you need, no
          | matter what diet you follow!
      // ? HOW IT WORKS STEP #4 TEXT END
      // ? HOW IT WORKS STEP #4 IMAGE START
      div.step-box-images
        img.step-image(loading='lazy' src='@/assets/images/app/app-screen-1.png' alt='iPhone app preferences selection screen')
      // ? HOW IT WORKS STEP #4 IMAGE END
    // ! HOW IT WORKS STEP #4 END
    
    // ! HOW IT WORKS STEP #5 START
    //- div.step-box.grid.grid--2-cols.grid--align-center
    div.step-box
      // ? HOW IT WORKS STEP #5 TEXT START
      div.step-box-text
        p.step-number 05
        h3.heading-tertiary Work sessions using Pomodoro Timer
        p.step-description
          | Once per week, approve the meal plan generated for you by Omnifood
          | AI. You can change ingredients, swap entire features, or even add
          | your own recipes.
      // ? HOW IT WORKS STEP #5 TEXT END
      // ? HOW IT WORKS STEP #5 IMAGE START
      div.step-box-images
        img.step-image(loading='lazy' src='@/assets/images/app/app-screen-2.png' alt='iPhone app features approving plan')
      // ? HOW IT WORKS STEP #5 IMAGE END
    // ! HOW IT WORKS STEP #5 END
  // ! HOW IT WORKS CONTENT CONTAINER END
// ! SECTION HOW IT WORKS END
</template>
<style lang="scss">
.step {
  &-box {
    display: flex;
    align-items: center;
    justify-content: space-between;

    &:nth-child(even) {
      flex-direction: row-reverse;
    }
    &:not(:last-child) {
      margin-bottom: 4.8rem;
    }

    &-images {
      width: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;

      &::before,
      &::after {
        content: '';
        border-radius: 50%;
        display: block;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }

      &::before {
        width: 60%;
        // ! below code provides us height = 60%
        padding-bottom: 60%;
        background-color: variables.$color-primary-light-9;
        z-index: -2;
      }

      &::after {
        width: 45%;
        // ! below code provides us height = 45%
        padding-bottom: 45%;
        background-color: variables.$color-primary-light-8;
        z-index: -1;
      }

      @include mixins.responsive(phone) {
        grid-template-columns: 1fr;
        transform: translateY(2.4rem);

        // &:nth-child(2) {
        //   grid-row: 1;
        // }

        // &:nth-child(6) {
        //   grid-row: 5;
        // }
      }
    }

    &-text {
      width: 50%;
      /* display: flex;
			flex-direction: column;
			align-items: start;
			justify-content: center; 
      ! we set the grid class align items
      ! property to center */
    }
  }

  &-image {
    width: 35%;

    @include mixins.responsive(phone) {}
  }

  &-number {
    font-size: 9.8rem;
    font-weight: 600;
    color: variables.$color-gray-3;
    margin-bottom: 1.2rem;

    @include mixins.responsive(tab-port) {
      font-size: 7.4rem;
    }
  }

  &-description {
    font-size: 1.8rem;
    line-height: 1.6;
  }
}
</style>
