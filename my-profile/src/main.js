import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './assets/style.css';
import * as echarts from 'echarts';
// 引入 echarts-wordcloud 扩展
import 'echarts-wordcloud';

Vue.prototype.$echarts = echarts;
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router
}).$mount('#app');
