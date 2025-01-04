export const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/1",
    name: "1",
    component: () => import("../views/1.vue"),
  },
  {
    path: "/2",
    name: "2",
    component: () => import("../views/2.vue"),
  },
];
