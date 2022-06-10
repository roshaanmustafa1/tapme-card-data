import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Toast from "vue-toastification";
import store from "./store";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "vue-toastification/dist/index.css";
import "./style.scss";

const options = {};

const firebaseConfig = {
  apiKey: "AIzaSyD5yyPo05z6tGphdXj3grGsmxhiH-jxQyc",
  authDomain: "tapme-c4e7c.firebaseapp.com",
  projectId: "tapme-c4e7c",
  storageBucket: "tapme-c4e7c.appspot.com",
  messagingSenderId: "211245439908",
  appId: "1:211245439908:web:f9f17c00bd20243dc2bf31",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
Vue.prototype.$app = app;
Vue.prototype.$db = db;
Vue.prototype.$storage = storage;

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(Toast, options);
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");
