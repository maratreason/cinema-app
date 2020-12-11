import Vue from "vue";
import VueResource from "vue-resource";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "materialize-css/dist/js/materialize.min";

Vue.use(VueResource);

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");
