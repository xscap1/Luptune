import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/fonctionnalites",
    name: "Fonctionnalites",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Fonctionnalites.vue")
  },
  {
    path: "/devis",
    name: "Devis",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Devis.vue")
  },
  {
    path: '/politique-de-confidentialite',
    name: "Politique",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Politique.vue")
  },
  {
   path: '/mentions-legales',
   name: "Mentions",
   // route level code-splitting
   // this generates a separate chunk (about.[hash].js) for this route
   // which is lazy-loaded when the route is visited.
   component: () =>
     import(/* webpackChunkName: "about" */ "../views/Mentions.vue")
 },
 {
    path: '/conditions-generales-de-ventes',
    name: "CGV",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/CGV.vue")
  },
  {
    path: '/:catchAll(.*)',
    name: "PNF",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/PNF.vue")
  },


];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    document.getElementById('app').scrollIntoView();
  }
});

export default router;
