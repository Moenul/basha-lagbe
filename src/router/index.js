import { createRouter, createWebHashHistory } from "vue-router";

import viewHome from "@/views/viewHome.vue";
import viewHouse from "@/views/viewHouse.vue";


const routes = [
    {
        path: "/",
        name: "Home",
        component: viewHome,
    },
    {
        path: "/houses",
        name: "House",
        component: viewHouse,
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;