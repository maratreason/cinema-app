import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "home",
        component: () => import("../views/Home.vue"),
    },
    {
        path: "/films/:id",
        name: "home",
        component: () => import("../views/Home.vue"),
    },
    {
        path: "/favorites",
        name: "favorites",
        component: () => import("../views/Favorites.vue"),
    },
    {
        path: "/film/:id",
        name: "carditem",
        component: () => import("../views/CardItem.vue"),
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;
