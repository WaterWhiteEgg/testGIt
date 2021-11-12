import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

axios({
  url: "http://api.yesapi.cn/?s=App.Hello.World",
  method:'get',
   headers:{},
  params:{
    
  }
}).then((res) => {
  console.log(res);
});
