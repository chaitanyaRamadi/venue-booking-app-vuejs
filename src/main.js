import { createApp } from 'vue'
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
  .use(store)
  .use(router)
  .use(vuetify)
  .mount('#app')
