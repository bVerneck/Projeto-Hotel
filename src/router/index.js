import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/sobreHotel",
    name: "sobreHotel",
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
    path: "/funcionariosAdmin",
    name: "funcionariosAdmin",
    
    component: () =>
      import("../viewsAdmin/FuncionariosAdmin.vue"),
  },
  {

    path: "/loginPublic",
    name: "loginPublic",
    
    component: () =>
      import("../views/LoginPublic.vue"),
  },
  {

    path: "/cadastroPublic",
    name: "CadatrosPublic",
    
    component: () =>
      import("../views/CadastroPublic.vue"),
  },
  
  {
    path: "/quartosAdmin",
    name: "quartosAdmin",
    
    component: () =>
      import("../viewsAdmin/QuartosAdmin.vue"),
  },
  {
    path: "/homeAdmin",
    name: "homeAdmin",
    
    component: () =>
      import("../viewsAdmin/HomeAdmin.vue"),
  },
  {
    path: "/loginAdmin",
    name: "loginAdmin",
    
    component: () =>
      import("../viewsAdmin/LoginAdmin.vue"),

  },
  {
    path: "/paginaTesteApi",
    name: "paginaTesteApi",

    component: () =>
    import("../views/PaginaTesteApi"),
  },
  {
    path: "/hospedesAdmin",
    name: "hospedesAdmin",
    
    component: () =>
      import("../viewsAdmin/HospedesAdmin.vue"),

  },
  
 
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
