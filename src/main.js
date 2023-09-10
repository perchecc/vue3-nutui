import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

// Toast
import { showToast } from "@nutui/nutui";
import "@nutui/nutui/dist/packages/toast/style";

// Notify
import { showNotify } from "@nutui/nutui";
import "@nutui/nutui/dist/packages/notify/style";

// Dialog
import { showDialog } from "@nutui/nutui";
import "@nutui/nutui/dist/packages/dialog/style";

// ImagePreview
import { showImagePreview } from "@nutui/nutui";
import "@nutui/nutui/dist/packages/imagepreview/style";

const app = createApp(App);

//  挂载方法到实例上
app.config.globalProperties.$showToast = showToast;
app.config.globalProperties.$showNotify = showNotify;
app.config.globalProperties.$showDialog = showDialog;
app.config.globalProperties.$showImagePreview = showImagePreview;

app.use(createPinia());
app.use(router);

app.mount("#app");
