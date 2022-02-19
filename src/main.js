import Vue from 'vue'
import app from "@/App";
import vuetify from '@/plugins/vuetify' // path to vuetify export

new Vue({
  vuetify,
  render: (h) => h(app),
}).$mount('#app')
