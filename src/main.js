import Vue from 'vue'
import App from './app.vue'

Vue.config.productionTip = false
Vue.prototype.$translation = {"texts": {}};

new Vue({
  render: h => h(App),
}).$mount('#app')
