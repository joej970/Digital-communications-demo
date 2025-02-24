import {createWebHistory, createRouter, Router} from "vue-router";

export interface Route {
  path: string;
  name: string;
  label: string;
  // TODO: Type this
  component: () => any;
  icon: string[];
}

const routes: Route[] = [
  {
    path: "/",
    name: "Home",
    label: 'Domov',
    component: () => import("@/js/views/Home.vue"),
    icon: ['fas', 'home'],
  },
  {
    path: "/spectrum",
    name: "Spectrum",
    label: 'Spekter',
    component: () => import("@/js/views/Spectrum.vue"),
    icon: ['fas', 'wave-square'],
  },
  {
    path: "/modulations",
    name: "Modulations",
    label: 'Modulacije',
    component: () => import("@/js/views/Modulations.vue"),
    icon: ['fas', 'signal'],
  },
  {
    path: "/harmonics",
    name: "Harmonics",
    label: 'Harmoniki',
    component: () => import("@/js/views/Harmonics.vue"),
    icon: ['fas', 'water'],
  },
  {
    path: "/pointers",
    name: "Pointers",
    label: 'Kazalci',
    component: () => import("@/js/views/Pointers.vue"),
    icon: ['fas', 'long-arrow-alt-up'],
  },
  {
    path: "/correlation",
    name: "Correlation",
    label: 'Korelacija',
    component: () => import("@/js/views/Correlation.vue"),
    icon: ['fas', 'equals'],
  },
  {
    path: "/isi",
    name: "ISI",
    label: 'Intersimbolna interferenca',
    component: () => import("@/js/views/ISI.vue"),
    icon: ['fas', 'eye'],
  },
];

const router: Router = createRouter({
  history: createWebHistory(),
  routes,
});

export {routes};
export {router};
