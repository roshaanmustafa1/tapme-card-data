import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import CompleteProfile from "../views/CompleteProfile.vue";
import SignupView from "../views/SignupView.vue";
// import store from "../store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/profile/:id",
    name: "home",
    meta: { requiresAuth: true },
    component: HomeView,
  },
  {
    path: "/",
    name: "Login",
    component: LoginView,
  },
  {
    path: "/sign-up",
    name: "SignUP",
    component: SignupView,
  },
  {
    path: "/complete-profile",
    name: "Complete Profile",
    component: CompleteProfile,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

// router.beforeEach((to, from, next) => {
//   if (to.matched.some((record) => record.meta.requiresAuth)) {
//     if (!store.state.user.displayName) {
//       next({
//         name: "Login",
//       });
//     } else {
//       next();
//     }
//   } else {
//     next();
//   }
// });

export default router;
