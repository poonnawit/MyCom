import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

import FormCard from "./components/ui/FormCard.vue";
import ProductCard from "./components/ui/ProductCard.vue";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.component("FormCard", FormCard);
app.component("ProductCard", ProductCard);

app.mount("#app");
