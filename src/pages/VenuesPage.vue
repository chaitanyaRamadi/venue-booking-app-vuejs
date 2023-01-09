<template>
<the-dropdown></the-dropdown>
<div class="items">
    <div  v-for="venue in city" :key="venue.name">
            <v-card   class="mx-auto" max-width="400" width="500">
                <v-img :src=venue.image height="230px" cover></v-img>
                
                <div class="title-rating">
                    <v-card-title class="title">
                        {{ venue.name }}
                    </v-card-title>
                    <h3 class="bg-red-lighten-4 text-red-lighten-2">{{ venue.rating }}</h3>
                </div>
            
                <v-card-subtitle>
                    1,000 miles of wonder
                </v-card-subtitle>
            
                <v-card-actions>
                    <v-btn @click="bookNow(venue.id)" color="orange-lighten-2" variant="text">
                        Book Now
                    </v-btn>
            
                    <v-spacer></v-spacer>

                </v-card-actions>
            </v-card>
        </div>
</div>

</template>

<script>
import TheDropdown from '@/components/TheDropdown.vue'


export default {
    components:{
        TheDropdown
    },
    data(){
        return {
            city: []
        }
    },
    computed: {
        selectedCity() {
            return this.$store.getters.getSelectedCity
        },
        venuesData(){
            return this.$store.getters.getVenues
        }   
    },
    methods:{
        bookNow(venueId){
            this.$router.push('/venues/'+venueId)
        },
        filterVenuesByCity(){
            this.city = this.venuesData.filter((item) => item.city == this.selectedCity)
        }
    },
    watch:{
        selectedCity(){
            this.filterVenuesByCity()
        }
    },
    created(){
        this.filterVenuesByCity()

    }
}
</script>

<style>
.items{
    margin-top: 7rem;
    width: 100vw;
    height: max-content;
    display: grid;
    grid-template-rows: repeat(2,1fr);
    grid-template-columns: repeat(3,1fr);
    gap: 2rem;
}
.title-rating{
    display: grid;
    grid-template-rows: repeat(1,1fr);
    grid-template-columns: repeat(4,1fr);
}
.title{
    grid-column-start: 1;
    grid-column-end: 4;
}
.title-rating h3{
    justify-self: center;
    align-self: center;
    width: 50px;
    height: 25px;
    text-align: center;
    border-radius: 4px;
    grid-column-start: 4;
    grid-column-end: -1;
}
</style>