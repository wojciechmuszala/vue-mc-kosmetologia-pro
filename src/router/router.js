import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import AboutPage from "../pages/AboutPage.vue";
import OfferPage from "../pages/OfferPage.vue";
import PriceListPage from "../pages/PriceListPage.vue";
import ContactPage from "../pages/ContactPage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: HomePage },
    { path: "/o-nas", component: AboutPage },
    { path: "/oferta", component: OfferPage },
    { path: "/cennik", component: PriceListPage },
    { path: "/kontakt", component: ContactPage },
  ],
  linkActiveClass: "active",
});

export default router;
