import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import AboutPage from "../pages/AboutPage.vue";
import OfferPage from "../pages/OfferPage.vue";
import PriceListPage from "../pages/PriceListPage.vue";
import ContactPage from "../pages/ContactPage.vue";
import SignUpPage from "../pages/SignUpPage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/strona-glowna" },
    { path: "/strona-glowna", component: HomePage },
    { path: "/o-nas", component: AboutPage },
    { path: "/oferta", component: OfferPage },
    { path: "/cennik", component: PriceListPage },
    { path: "/kontakt", component: ContactPage },
    { path: "/zapisz-sie", component: SignUpPage },
  ],
  linkActiveClass: "active",
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return {
      left: 0,
      top: 0,
    };
  },
});

export default router;
