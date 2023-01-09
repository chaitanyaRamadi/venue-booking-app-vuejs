import { createStore } from "vuex";
import data from '@/venues.js'

export default createStore({
    state(){
        return {
            venues:data,
            selectedCity:'Bangalore',
            isLoggedIn:false,
            user:{},
            bookedVenueAndUser:{}
        }
    },
    getters:{
        getVenues(state){
            return state.venues
        },
        // getVenue:(state)=>(venueId)=>{
        //     return state.venues.find((item) => item.id === venueId)
           
        // },
        getLog(state){
            return state.isLoggedIn
        },
        getSelectedCity(state){
            return state.selectedCity
        },
        getUsers(state){
            return state.user
        },
        getUserAndVenue(state){
            return state.bookedVenueAndUser
        }
    },
    mutations:{
        setSelectedCity(state,payload){
            state.selectedCity = payload
        },
        setLog(state,payload){
            state.isLoggedIn = payload
        },
        addUser(state,payload){
            state.user = payload
        },
        setVenue(state,payload){
            state.bookedVenueAndUser = payload
        },
        resetState(state){
            state.isLoggedIn = false,
            state.user = {},
            state.bookedVenueAndUser = {}

        }
    },
    actions:{
        setSelectedCity(context,payload){
            context.commit('setSelectedCity',payload)
        },
        setLog(context,payload){
            context.commit('setLog',payload)
        },
        addUser(context,payload){
            context.commit('addUser',payload)
        },
        setVenue(context,payload){
            console.log(payload,' from actions');
            context.commit('setVenue',payload)
        },
        resetState(context){
            context.commit('resetState')
        }
    }
})