import { createRouter, createWebHashHistory, RouteLocationNormalized, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import Standards from "@/views/Standards.vue";
import SourceControl from "@/views/Standards/SourceControl.vue";
import CodeStandards from "@/views/Standards/CodeConsistent.vue";
import TestStandards from "@/views/Standards/TestStandards.vue";
import CodeExtensible from "@/views/Standards/CodeExtensible.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/standards",
    name: "Standards",
    component: Standards,
    children: [
      {
        path: '',
        name: 'CodeStandards',
        component: CodeStandards
      },
      {
        path: 'codeExtensible',
        name: 'ExtensibleCode',
        component: CodeExtensible
      },
      {
        path: 'sourceControl',
        name: 'SourceControl',
        component: SourceControl
      },
      {
        path: 'testing',
        name: 'Testing',
        component: TestStandards
      }
    ]
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.afterEach((to: RouteLocationNormalized) => {
  (<any>window).gtag('event', 'page_view', { 
    page_title: to.name,
    page_path: to.path,
  });
})

export default router;
