<template>
    <section class="drop">
        <the-heading><h2 class="text-h4">Select a City</h2></the-heading>
        <!-- <v-select  class="select"  @change="handleChange" :hint="`${select.state}, ${select.abbr}`" :items="items" item-title="state" item-value="abbr"
            label="Select" variant="solo" persistent-hint return-object single-line></v-select> -->
        <select name="LeaveType" @change="handleChange" class="form-control" >
            <option class="option" v-for="item in items" :key="item.abbr">{{item.state}}</option>
        </select>
    </section>
    <!-- <v-icon icon="mdi-email"></v-icon> -->
</template>

<script>
export default {
    data(){
        return {
            items: [
                { state: 'Bangalore', abbr: 'BG' },
                { state: 'Delhi', abbr: 'DE' },
                { state: 'Kolkata', abbr: 'KL' },
                { state: 'Chennai', abbr: 'CH' },
                { state: 'Hyderabad', abbr: 'HY' },
            ],
         }
    },
    methods:{
        handleChange(event){
            this.$store.dispatch('setSelectedCity', event.target.value)
        }
    },
    // computed: {
    //     selectedCity() {
    //         return this.$store.getters.getSelectedCity
    //     }
    // },
    // created(){
    //     console.log(this.select.state);
    // }
}
</script>

<style scoped>
.drop{
    width: 100vw;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 2rem;
    width:30vw;
}
select{
    text-align: left;
    margin-top:2rem ;
    padding: .5rem 1rem;
    height: 3rem;
    width: 20rem;
    cursor: pointer;
    border-radius: 4px;
    box-shadow: 1px 2px 6px rgba(32, 32, 32, 0.414);
    color: gray;
            appearance: none;
        outline: 0;
}
.option{
    height: 2rem;
}
</style>