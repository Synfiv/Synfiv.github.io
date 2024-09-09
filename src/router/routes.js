const routes = [
  {
    path: "/",
    component: () => import("layouts/Mainheader.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      {
        path: "/aboutPage",
        component: () => import("src/pages/AboutPage.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
