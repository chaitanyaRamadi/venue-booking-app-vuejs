import { createApp } from 'vue'
import i18n  from './i18n/index'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import router from './router.js'
import store from './store/store.js'


import TheHeading from './components/TheHeading.vue'
import TheDialog from './components/TheDialog.vue'



loadFonts()

createApp(App)
  .component('the-heading',TheHeading)
  .component('the-dialog',TheDialog)
  .use(i18n)
  .use(store)
  .use(router)
  .use(vuetify)
  .mount('#app')
