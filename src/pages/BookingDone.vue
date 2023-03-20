<template>
    <div class="container">
        <section class="head">
            <v-btn @click="GoToVenues">{{ $t('bookingSuccessPage.back') }}</v-btn>
            <h2>{{ $t('bookingSuccessPage.congrats') }} <span class="user-name">{{ bookingDetails.userDetails.name }}</span>! {{ $t('bookingSuccessPage.continuedMsg') }} <span class="venue-name">{{ bookingDetails.venueDetails.name }}</span>.</h2>
        </section>
        <div class="xcard">
        </div>
        <section class="main">
            <v-card class="mx-auto" max-width="400" width="500">
                <v-img :src=bookingDetails.venueDetails.image height="230px" cover></v-img>
                <div class="title-rating">
                    <v-card-title class="title">
                        {{ bookingDetails.venueDetails.name }}
                    </v-card-title>
                    <h3 class="bg-red-lighten-4 text-red-lighten-2">{{ bookingDetails.venueDetails.rating }}</h3>
                </div>
            
                <v-card-subtitle>
                    {{ $t('venuesPage.quote') }}
                </v-card-subtitle>
            
                <v-card-actions>
            
                    <v-spacer></v-spacer>
            
                </v-card-actions>
            </v-card>
        </section>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default/*#__PURE__*/defineComponent({
    computed:{
        bookingDetails(){
            console.log(this.$store.getters.getUserAndVenue.userDetails.name+' name');
            return this.$store.getters.getUserAndVenue
        }
    },
    methods:{
        GoToVenues(){
            this.$router.push('/venues')
        }
    }
})

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@500&display=swap');
.icon{
    font-size: 4rem;
    color: #5b96fd;
    position: absolute;
    top: 0rem;
    right: 0rem;
    z-index: 1000;
    
}
.container{
    display: grid;
    grid-template-columns: repeat(2,1fr);
    grid-template-rows: repeat(1,1fr);
    justify-content: center;
    align-items: center;
    z-index: -1;
}

.head{
    justify-self: center;
    align-content: center;
    margin-left: 5rem;
}
h2{
    font-family: 'IBM Plex Mono', monospace;
    font-size:3rem;
    color:#5b96fd;
    /* text-shadow: 2px 0px 10px #5e96f8 ; */
}
.main{
   margin: 5rem;
   z-index: 100;
}
.xcard{
    border-radius: 5px;
    width: 390px;
    height: 330px;
    position: absolute;
    background: linear-gradient(to right,#6096f4,#87adf0);
    z-index: 1;
    top: 13rem;
    right: 14rem;
}
.user-name{
    font-family: 'IBM Plex Mono', monospace;
    background-color: #82b0ff54;
}
.venue-name{
    font-family: 'IBM Plex Mono', monospace;
    background-color: #82b0ff54;
    
}
</style>