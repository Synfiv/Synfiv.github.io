const routes = [
  {
    path: "/",
    component: () => import("src/layouts/MainHeader.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      {
        path: "/aboutPage",
        component: () => import("src/pages/AboutPage.vue"),
      },
      {
        path: "/pricesPage",
        component: () => import("src/pages/PricesPage.vue"),
      },
      {
        path: "/termsPage",
        component: () => import("src/pages/TermsPage.vue"),
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
