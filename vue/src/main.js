import { createApp } from "vue";
import { CalciteComponentsVue } from "@esri/calcite-components-vue/dist/index";

import App from "./App.vue";

const app = createApp(App).use(CalciteComponentsVue);

app.mount("#app");
