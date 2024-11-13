<template lang="pug">
HeaderSection
main
  section.section-privacy
    div.container
      h1.heading-primary Privacy
      h2.privacy-heading Who we are
      p.privacy-description Our website address is: #[a(href="https://cooperify.app/") https://cooperify.app/]
      h2.privacy-heading What personal data we collect and why we collect it
      p.privacy-description We collect data for information and communication purposes such as name, last name, email, gender, phone number, company size, how you found our site and other related questions. This information is used to reach out to and discuss mentoring options, online courses, customer service, site guidance and content overview. We also use the information for analytics to best customize online content and conversations to our audiences.
      h2.privacy-heading Comments
      p.privacy-description When visitors leave comments on the site we collect the data shown in the comments form, and also the visitor’s IP address and browser user agent string to help spam detection.
      p.privacy-description An anonymized string created from your email address (also called a hash) may be provided to the Gravatar service to see if you are using it.
      p.privacy-description The Gravatar service privacy policy is available here: #[a(href="https://automattic.com/privacy/") https://automattic.com/privacy/]. After approval of your comment, your profile picture is visible to the public in the context of your comment. We may hold comments for review.
      h2.privacy-heading Media
      p.privacy-description If you upload images to the website, you should avoid uploading images with embedded location data (EXIF GPS) included. Visitors to the website can download and extract any location data from images on the website.
      h2.privacy-heading Contact forms
      p.privacy-description Our email is #[a(href="mailto:info@cooperify.app") info@cooperify.app] and we collect your basic data such as name, email and what your questions is related to so we can get back to you. We do not share your information.
      h2.privacy-heading Cookies
      p.privacy-description If you leave a comment on our site you may opt-in to saving your name, email address and website in cookies. These are for your convenience so that you do not have to fill in your details again when you leave another comment. These cookies will last for one year.
      p.privacy-description If you have an account and you log in to this site, we will set a temporary cookie to determine if your browser accepts cookies. This cookie contains no personal data and is discarded when you close your browser.
      p.privacy-description When you log in, we will also set up several cookies to save your login information and your screen display choices. Login cookies last for two days, and screen options cookies last for a year. If you select “Remember Me,” your login will persist for two weeks. If you log out of your account, the login cookies will be removed.
      p.privacy-description If you edit or publish an article, an additional cookie will be saved in your browser. This cookie includes no personal data and simply indicates the post ID of the article you just edited. It expires after 1 day.
      h2.privacy-heading Embedded content from other websites
      p.privacy-description Articles on this site may include embedded content (e.g. videos, images, articles, etc.). Embedded content from other websites behaves in the exact same way as if the visitor has visited the other website.
      p.privacy-description These websites may collect data about you, use cookies, embed additional third-party tracking, and monitor your interaction with that embedded content, including tracking your interaction with the embedded content if you have an account and are logged in to that website.
      h2.privacy-heading Analytics
      p.privacy-description We collect analytics via Google analytics and adhere to their use and privacy rules.
      h2.privacy-heading Who we share your data with
      p.privacy-description Our internal marketing team and sales team. No third parties.
      h2.privacy-heading How long we retain your data
      p.privacy-description If you leave a comment, the comment and its metadata are retained indefinitely. This is so we can recognize and approve any follow-up comments automatically instead of holding them in a moderation queue.
      p.privacy-description For users that register on our website (if any), we also store the personal information they provide in their user profile. All users can see, edit, or delete their personal information at any time (except they cannot change their username). Website administrators can also see and edit that information.
      h2.privacy-heading What rights you have over your data
      p.privacy-description If you have an account on this site, or have left comments, you can request to receive an exported file of the personal data we hold about you, including any data you have provided to us. You can also request that we erase any personal data we hold about you. This does not include any data we are obliged to keep for administrative, legal, or security purposes.
      h2.privacy-heading Where we send your data
      p.privacy-description Visitor comments may be checked through an automated spam detection service.
      h2.privacy-heading Your contact information
      p.privacy-description Is used for communications related to Cooperify.app only.
      h2.privacy-heading How we protect your data
      p.privacy-description Our site is protected via SSL certificate to ensure your card information or checkout experience is flawless and secure. We also do not share with third parties.
      h2.privacy-heading What data breach procedures we have in place
      p.privacy-description Our site is hosted on premium servers and several security measures are established through them for your data protection as well as unique add-ons that ensure the security of data on this site.
      h2.privacy-heading What third parties we receive data from
      p.privacy-description Shopify.com, Community.com, YouTube.com, Getresponse.com, social media platforms: Facebook, Instagram, Hubspot, Twitter, YouTube, LinkedIn.
      h2.privacy-heading What automated decision making and/or profiling we do with user data
      p.privacy-description All data is reviewed for spam, derogatory and malicious intent. If this is detected, it is marked as spam.
      h2.privacy-heading For questions or other concerns you can email #[a(href="mailto:info@cooperify.app") info@cooperify.app]
FooterSection
</template>
<script setup>
import CallToActionSection from '@/components/Section/CallToActionSection.vue';
import FooterSection from '@/components/Section/FooterSection.vue';
import HeaderSection from '@/components/Section/HeaderSection.vue';

</script>
<style lang="scss">
.section {
  &-privacy {
    padding: 12.4rem 0 9.6rem 0;
  }
}

.privacy {
  &-description {
    font-size: 1.8rem;
    line-height: 1.6;
  }

  &-heading {
    font-size: 2.4rem;
    font-weight: 700;
    margin-bottom: 1.8rem;
    margin-top: 1.8rem;
    color: variables.$color-gray-2;
  }
}
</style>
