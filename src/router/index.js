import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Reservation from "../views/Reservation";
import Payment from "../views/payment";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about/:id/",
    name: "About",
    component: About,
  },
  {
    path: "/reservation/:id/",
    name: "Reservation",
    component: Reservation,
  },
  {
    path: "/payment/",
    name: "Payment",
    component: Payment,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
