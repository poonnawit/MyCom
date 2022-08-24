import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

import FormCard from "./components/ui/FormCard.vue";
import ProductItems from "./components/ui/ProductItems.vue";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.component("FormCard", FormCard);
app.component("ProductItems", ProductItems);

app.mount("#app");
