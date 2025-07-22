import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

const app = createApp(App);
app.use(router);
app.mount('#app');
// main.js or App.vue
router.afterEach(() => {
  if (window.adsbygoogle) {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.warn("Adsbygoogle push failed", e);
    }
  }
});
