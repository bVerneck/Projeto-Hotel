import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/sobre",
    name: "sobre",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/SobreHotel.vue"),
  },
  {
    path: "/acomodacoes",
    name: "acomocacoes",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AcomodacoesHotel.vue"),
  },
  {
    path: "/contatos",
    name: "contatos",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ContatosHotel.vue"),
  },
  
  {
    path: "/reservas",
    name: "reservas",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ReservasPublic.vue"),
  },
  {
    path: "/fucionariosAdmin",
    name: "funcionariosAdmin",
    
    component: () =>
      import("../viewsAdmin/FuncionariosAdmin.vue"),
  },
 
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;