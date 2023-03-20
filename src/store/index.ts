import { createStore } from "vuex";
import data from '../venues';
import app from '../main'
import { RootState } from "@/types/vuex";

export default createStore<RootState>({
    state(){
        return {
            venues:data,
            locale:'en',
            selectedCity:'Bangalore',
            isLoggedIn:false,
            user:{},
            bookedVenueAndUser:{},
            isTracking:'no'
        }
    },
    getters:{
        getVenues(state:RootState){
            return state.venues
        },
        getLog(state:RootState){
            return state.isLoggedIn
        },
        getSelectedCity(state:RootState){
            return state.selectedCity
        },
        getLocale(state:RootState){
            return state.locale
        },
        getUsers(state:RootState){
            return state.user
        },
        getUserAndVenue(state:RootState){
            return state.bookedVenueAndUser
        },
        getTrackStatus(state:RootState){
            return state.isTracking;
        }
    },
    mutations:{
        setSelectedCity(state:RootState,payload){
            state.selectedCity = payload
        },
        setLocale(state:RootState,payload){
            state.locale = payload
        },
        setLog(state:RootState,payload){
            state.isLoggedIn = payload
        },
        addUser(state:RootState,payload){
            state.user = payload
        },
        setVenue(state:RootState,payload){
            state.bookedVenueAndUser = payload
        },
        resetState(state:RootState){
            state.isLoggedIn = false,
            state.user = {},
            state.bookedVenueAndUser = {}

        },
        setTracking(state:RootState){
            state.isTracking = 'yes'
        }
    },
    actions:{
        setSelectedCity({ commit },payload){
            commit('setSelectedCity',payload)
            console.log(app.config.globalProperties.$myGlobalObject.foo);
            console.log(app.config.globalProperties.$justHero);
            app.config.globalProperties.$startTracking();
        },
        setLocale({ commit },payload){
            commit('setLocale',payload)
        },
        setLog({ commit },payload){
            commit('setLog',payload)
        },
        addUser({ commit },payload){
            commit('addUser',payload)
        },
        setVenue({ commit },payload){
            console.log(payload,' from actions');
            commit('setVenue',payload)
        },
        resetState({ commit }){
            commit('resetState')
        }
    }
})