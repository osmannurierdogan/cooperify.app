import { createStore } from "vuex";
// import createPersistedState from "vuex-persistedstate";
// import SecureLS from "secure-ls";
import { appAxios } from "@/utils/appAxios";

// let ls = new SecureLS({ isCompression: false });

export default createStore({
  state: {
    user: null,
    saltKey: "osman123nuri!456erdogan?personalblog",
    articles: [],
    books: [],
    filteredBooks: [],
    newsletters: [],
    categoryList: [],
    subscribersList: [],
    pageContent: {
      hero: {
        title: "Have you ever dreamt of a better version of yourself?",
        description:
          "If so, <strong>you are in the right place!</strong> Simple application to transform your life. Tailored to your personal knowledge level. Helps you to go from zero to hero by improving your <strong>knowledge, productivity, focus</strong> and most importantly <strong>your willpower!</strong>",
        buttons: [
          {
            id: 1,
            class: "button button--full",
            text: "Get access",
            destination: "https://portal.cooperify.app/",
          },
          {
            id: 2,
            class: "button button--outline",
            text: "Learn more",
            destination: "#how",
            icon: "fa-solid fa-arrow-down-long",
          },
        ],
        userCount: 1000
      },
    },
    socialMediaAccounts: [
      {
        id: 1,
        name: "Instagram",
        icon: "logo-instagram",
        path: "https://instagram.com/cooperify.app",
      },
      {
        id: 2,
        name: "X",
        color: "#000000",
        icon: "logo-twitter",
        path: "https://x.com/osmanurierdogan",
      },
      // {
      //   id: 2,
      //   name: "Twitter",
      //   color: "#1D9BF0",
      //   icon: "logo-twitter",
      //   path: "https://twitter.com/osmanurierdogan",
      // },
      // {
      //   id: 3,
      //   name: "Threads",
      //   color: "#000000",
      //   icon: "fa-brands fa-threads",
      //   path: "https://threads.net/@osmannurierdogan_",
      // },
      // {
      //   id: 4,
      //   name: "Blogger",
      //   color: "#ff5722",
      //   icon: "fa-brands fa-blogger",
      //   path: "https://blog.osmannurierdogan.com",
      // },
      // {
      //   id: 5,
      //   name: "Substack",
      //   color: "#FFA500",
      //   icon: "fa-regular fa-envelope",
      //   path: "https://osmannurierdogan.substack.com",
      // },
      // {
      //   id: 6,
      //   name: "LinkedIn",
      //   color: "#2867B2",
      //   icon: "fa-brands fa-linkedin-in",
      //   path: "https://linkedin.com/in/osmannurierdogan",
      // },
      {
        id: 7,
        name: "Facebook",
        color: "#2867B2",
        icon: "logo-facebook",
        path: "https://facebook.com/osmnerd",
      },
    ],
    navigationMenu: [
      { id: 1, name: "How it works", target: "#how" },
      { id: 2, name: "Features", target: "#features" },
      { id: 3, name: "Testimonials", target: "#testimonials" },
      { id: 4, name: "Pricing", target: "#pricing", path: null },
      {
        id: 5,
        name: "Try for free",
        path: "https://portal.cooperify.app",
        target: null,
      },
    ],
    footerMenu: {
      // contact: [
      //   { id: 1, name: "71-75 Shelton Street, Covent Garden, London, UK, WC2H 9JQ" },
      //   { id: 2, name: "+44 123 654 789", target: "#" },
      //   { id: 3, name: "osman@osizagency.com", target: "mailto:osman@osizagency.com" },
      // ],
      account: [
        { id: 1, name: "Create account", target: "#" },
        { id: 2, name: "Sign in", target: "#" },
        { id: 3, name: "IOS app", target: "#" },
        { id: 4, name: "Android app", target: "#" },
      ],
      company: [
        { id: 1, name: "About Cooperify", target: "#" },
        { id: 2, name: "Student discount", target: "#" },
        { id: 3, name: "Mentors", target: "#" },
        { id: 4, name: "Carrers", target: "#" },
      ],
      resources: [
        { id: 1, name: "Books", target: "https://pbdbookshelf.com/books" },
        { id: 2, name: "Help center", target: "#" },
        { id: 3, name: "Privacy & terms", target: "#" },
        { id: 4, name: "Brand assets", target: "#" },
      ],
    },
  },
  mutations: {
    _setNewsletters(state, newsletters) {
      state.newsletters = newsletters;
    },
    _setSubscribers(state, subscribers) {
      state.subscribersList = subscribers;
    },
    /*
    _changeBookmarksOfCategory(state, categoryId) {
      const url = categoryId
        ? `/bookmarks?_expand=category&_expand=user&categoryId=${categoryId}`
        : "/bookmarks?_expand=category&_expand=user";
      appAxios.get(url).then((response) => {
        state.bookmarkList = response.data;
      });
    }, */
  },
  getters: {
    _getPageContent(state) {
      return state?.pageContent;
    },
    _getNavigationMenu(state) {
      return state?.navigationMenu;
    },
    _getSocialMediaAccounts(state) {
      return state?.socialMediaAccounts;
    },
    _getFooterMenu(state) {
      return state?.footerMenu;
    },
  },
  // plugins: [
  //   createPersistedState({
  //     storage: {
  //       getItem: (key) => ls.get(key),
  //       setItem: (key, value) => ls.set(key, value),
  //       removeItem: (key) => ls.remove(key),
  //     },
  //   }),
  // ],
  actions: {},
  modules: {},
});
