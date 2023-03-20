<template>
    <div class="center">
        <the-heading>
            <h2 class="text-h4">{{ $t("venuesPage.selectACity") }}</h2>
        </the-heading>
    </div>
    <the-dropdown :locale="false" :list="states" @dropdown-event="handleStatesChange"></the-dropdown>
    <!-- <the-dropdown :list="languages" @dropdown-event="handleLocale"></the-dropdown> -->
<div class="items">
    <div  v-for="venue in cities" :key="venue.name">
            <v-card   class="mx-auto" max-width="400" width="500">
                <v-img :src=venue.image height="230px" cover></v-img>
                
                <div class="title-rating">
                    <v-card-title class="title">
                        {{ venue.name }}
                    </v-card-title>
                    <h3 class="bg-red-lighten-4 text-red-lighten-2">{{ venue.rating }}</h3>
                </div>
            
                <v-card-subtitle>
                    {{ $t('venuesPage.quote') }}
                </v-card-subtitle>
            
                <v-card-actions>
                    <v-btn @click="bookNow(venue.id)" color="orange-lighten-2" variant="text">
                        {{ $t('venuesPage.bookNow') }}
                    </v-btn>
            
                    <v-spacer></v-spacer>

                </v-card-actions>
            </v-card>
        </div>
</div>

</template>

<script lang="ts">
import { venue } from '@/types/venueData'
import TheDropdown from '@/components/TheDropdown.vue'
import { defineComponent } from 'vue'

export default/*#__PURE__*/defineComponent({
    components:{
        TheDropdown
    },
    data(){
        return {
            cities: [] as Array<venue>,
            states: [
                { key: 'Bangalore', abbr: 'BG' },
                { key: 'Delhi', abbr: 'DE' },
                { key: 'Kolkata', abbr: 'KL' },
                { key: 'Chennai', abbr: 'CH' },
                { key: 'Hyderabad', abbr: 'HY' },
            ],
            languages: [
                { key: 'english', abbr: 'en' },
                { key: 'german', abbr: 'ge' },
                { key: 'french', abbr: 'fr' },
            ],
        }
    },
    computed: {
        selectedCity():String {
            return this.$store.getters.getSelectedCity
        },
        venuesData():Array<venue>{
            return this.$store.getters.getVenues
        }   
    },
    methods:{
        handleLocale(event:Event){
            this.$i18n.locale = (event.target as HTMLInputElement).value.slice(0,2);
            this.$store.dispatch('setLocale', (event.target as HTMLInputElement).value)
        },
        handleStatesChange(event:Event):void{
            this.$store.dispatch('setSelectedCity', (event.target as HTMLInputElement).value)
        },
        bookNow(venueId:number):void{
            this.$router.push('/venues/'+venueId)
        },
        filterVenuesByCity():void{
            this.cities = this.venuesData.filter((item) => item.city == this.selectedCity)
        }
    },
    watch:{
        selectedCity(){
            this.filterVenuesByCity()
        }
    },
    created(){
        this.filterVenuesByCity()

    },
    mounted(){
        console.log(this.$i18n.locale);
    }
})
</script>

<style>
.center{
    display: flex;
    justify-content: center;
    margin: 2rem auto;
}
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