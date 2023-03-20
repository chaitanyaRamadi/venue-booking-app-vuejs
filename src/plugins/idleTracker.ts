import store from '../store'
import { ref,App } from 'vue';
import TheHeading from '../components/TheHeading.vue'

export default {
    install:function(app:App,{ time }:{time:number}){

        const randomText = ref<string>();
        const startTracking = function(){
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
        const stopTracking = function(){
            console.log(randomText.value+' -- from stop tracking');
        }
        app.config.globalProperties.$stopTracking = stopTracking;
    }
}