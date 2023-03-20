import { createRouter,createWebHistory } from "vue-router";


import TheLogin from '@/pages/TheLogin.vue'
import TheHome from '@/pages/TheHome.vue'
import VenuesPage from './pages/VenuesPage.vue'
import TheBooking from './pages/TheBooking.vue'
import BookingDone from './pages/BookingDone.vue'
import ErrorPage from './pages/ErrorPage.vue'


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
        component:TheLogin
    },
    {
        name:'venues-page',
        path:'/venues',
        component:VenuesPage
    },
    {
        name:'booking-page',
        path:'/venues/:id',
        component:TheBooking
    },
    {
        name:'success-page',
        path:'/booking-success',
        component:BookingDone
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