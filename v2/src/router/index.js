import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import TermsOfServiceView from "@/views/TermsOfServiceView.vue";
import PrivacyPolicyView from "@/views/PrivacyPolicyView.vue";
import AboutView from "@/views/AboutView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomeView,
    },
    {
      path: "/terms-of-service",
      name: "TermsOfService",
      component: TermsOfServiceView,
    },
    {
      path: "/privacy-policy",
      name: "PrivacyPolicy",
      component: PrivacyPolicyView,
    },
    {
      path: "/about",
      name: "About",
      component: AboutView,
    },
  ],
});

export default router;
