import store from '../store/store.js'
import { ref } from 'vue';
import TheHeading from '../components/TheHeading.vue'

export default {
    install:function(app,{ time }){

        let randomText = ref();
        let startTracking = function(){
            console.log(store.getters.getTrackStatus);
            store.commit('setTracking');
            console.log(store.getters.getTrackStatus);
            console.log('from plugin -- started tracking activity '+time);
            randomText.value = "testing ref inside a plugin";
        }
        // app.provide('idleTime',time)
        app.component('the-heading',TheHeading);
        app.config.globalProperties.$justHero = 'hanuman';
        app.config.globalProperties.$startTracking = startTracking;
        let stopTracking = function(){
            console.log(randomText.value+' -- from stop tracking');
        }
        app.config.globalProperties.$stopTracking = stopTracking;
    }
}