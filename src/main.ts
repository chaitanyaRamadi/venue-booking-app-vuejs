import { createApp } from 'vue'
import i18n  from './i18n/index'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import router from './router'
import store from './store'
import idleTracker from './plugins/idleTracker'

import TheDialog from './components/TheDialog.vue'
import { App as VueApp } from '@vue/runtime-core'

loadFonts()

let app:VueApp|any;
function mountApp():void{
  app = createApp(App)
  app.use(idleTracker,{time:1000})
  app.component('the-dialog',TheDialog)
  app.use(i18n)
  app.use(store)
  app.use(router)
  app.use(vuetify)
  app.mount('#app');
}

mountApp();

// app.config.globalProperties.justName = 'Rama';
app.config.globalProperties.$myGlobalObject = {
  // your global object properties and methods go here
  foo: 'bar',
  someMethod: function() {
    console.log('Hello from global method!')
  }
}

export default app;