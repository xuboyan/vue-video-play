import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VideoPlayer from 'vue-video-player';
require('video.js/dist/video-js.css');
require('vue-video-player/src/custom-theme.css');
import 'videojs-flash';
import 'videojs-contrib-hls';
Vue.use(VideoPlayer)
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
