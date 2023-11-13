import { createApp } from "vue";
import App from "./App.vue";
import store from "./store/index.js";
import router from "./router/router.js";

import "./assets/styles/variables.scss";
import "./assets/styles/global.scss";

import BaseButton from "./components/base/BaseButton.vue";

const app = createApp(App);

app.component("base-button", BaseButton);

app.use(store);
app.use(router);

app.mount("#app");
