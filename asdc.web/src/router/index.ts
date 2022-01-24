import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import Standards from "@/views/Standards.vue";
import SourceControl from "@/views/Standards/SourceControl.vue";
import CodeStandards from "@/views/Standards/Code.vue";
import TestStandards from "@/views/Standards/TestStandards.vue";

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
        component: CodeStandards
      },
      {
        path: 'sourceControl',
        component: SourceControl
      },
      {
        path: 'testing',
        component: TestStandards
      }
    ]
  },
  {
    path: "/standards/sourceControl",
    name: "SourceControl",
    component: SourceControl
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

export default router;
