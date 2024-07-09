import { createRouter, createWebHashHistory } from "vue-router";

import viewHome from "@/views/viewHome.vue";


const routes = [
    {
        path: "/",
        name: "Home",
        component: viewHome,
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;