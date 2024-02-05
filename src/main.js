import * as Vue from "vue";
import App from "./App.vue";
import router from "./infrastructure/routes"

const app = Vue.createApp(App);

app.use(router);

app.mount("#app");
