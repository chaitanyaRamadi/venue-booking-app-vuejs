import { createRouter,createWebHistory, RouteLocationNormalized } from "vue-router";
import store from "./store";


import TheLogin from '@/pages/TheLogin.vue'
import TheHome from '@/pages/TheHome.vue'
import VenuesPage from './pages/VenuesPage.vue'
import TheBooking from './pages/TheBooking.vue'
import BookingDone from './pages/BookingDone.vue'
import ErrorPage from './pages/ErrorPage.vue'

const redirectIfLoggedIn = (to: any,from: any, next: any) => {
    if(store.getters.getLog){
        next({name:'venues-page'})
    }
    else
        next();
}

const isLoggedIn = (to: any,from: any, next: any) => {
    if(!store.getters.getLog){
        next({name:'login-page'})
    }
    else
        next();
}

const router =  createRouter({
   history:createWebHistory(),
   routes:[
    {
        name:'home',
        path:'/',
        component:TheHome
    },
    {
        name:'login-page',
        path:'/login',
        component: TheLogin,
        beforeEnter: redirectIfLoggedIn
    },
    {
        name:'venues-page',
        path:'/venues',
        component:VenuesPage,
        beforeEnter: isLoggedIn
    },
    {
        name:'booking-page',
        path:'/venues/:id',
        component:TheBooking,
        beforeEnter: isLoggedIn
    },
    {
        name:'success-page',
        path:'/booking-success',
        component:BookingDone,
        beforeEnter: isLoggedIn
    },
    {
        name:'error-page',
        path:'/:notFound(.*)',
        component:ErrorPage
    },

   ],
   linkActiveClass:'active-link'
})

export default router;