import { createI18n } from 'vue-i18n'
import en from './en.json'
import ge from './ge.json'
import fr from './fr.json'


const i18n = createI18n({
  locale:'en',
  messages:{
    en,
    ge,
    fr,
  }
})

export default i18n