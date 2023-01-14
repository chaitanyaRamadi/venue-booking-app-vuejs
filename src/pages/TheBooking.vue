<template>
    <div class="heading text-h5">
        <the-heading><h2>{{ $t('bookingPage.booking') }}</h2></the-heading>
    </div>
    <form>
            <div class="col">
                <label>{{ $t('loginPage.name') }}</label>
                <input @blur="v$.name.$touch"  name="username" ref="name"  v-model="name" type="text" :placeholder="$t('loginPage.namePlaceholder')"/>
                <template v-if="v$.name.$error" >
                    <p  :class="{'warn-msg':true}">Name is invalid</p>
                </template>
            </div>
            <div class="col">
                <label>{{ $t('bookingPage.date') }}</label>
                <input @blur="v$.date.$touch"  name="date" v-model="date"  type="date"/>
                <template v-if="v$.date.$error" >
                    <p :class="{'warn-msg':true}">date is invalid</p>
                </template>
            </div>
            <div class="col">
                <label>{{ $t('bookingPage.startTime') }}</label>
                <input @blur="v$.startTime.$touch" name="start-time" v-model="startTime" ref="stime" type="time"/>
                <template v-if="v$.startTime.$error" >
                    <p :class="{'warn-msg':true}">venue opens at 9:00 AM</p>
                </template>
            </div>
            <div class="col">
                <label>{{ $t('bookingPage.endTime') }}</label>
                <input @blur="v$.endTime.$touch" name="end-time" v-model="endTime" ref="etime" type="time" />
                <template v-if="v$.endTime.$error">
                    <p :class="{'warn-msg':true}">venue closes at 11:00 PM</p>
                </template>
            </div>
            <div class="col">
                <label>{{ $t('bookingPage.memberCount') }}</label>
                <input @blur="v$.memberCount.$touch" name="members" v-model.number="memberCount" ref="count" type="number" />
                <template v-if="v$.memberCount.$error" >
                    <p :class="{'warn-msg':true}">member count should atleast be 10!</p>
                </template>
            </div>
            <div class="double-btn">
                <v-btn color="primary" @click.prevent="confirmDetails" type="submit">{{ $t('bookingPage.confirm') }}</v-btn>
                <v-btn color="red" @click.prevent="cancelAndBack"  type="submit">{{ $t('bookingPage.cancel') }}</v-btn>
            </div>
        </form>
        <v-dialog v-model="dialog">
            <v-card>
                <v-card-text>
                    <h3>{{msg}}</h3>
                </v-card-text>
                <v-card-actions>
                    <v-btn color="primary" block @click="dialog = false">Close Dialog</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
</template>

<script>
import { useVuelidate } from '@vuelidate/core'
import { required,minValue,minLength } from '@vuelidate/validators'
import { isValidDate,isValidStartTime,isValidEndTime } from '../validators.js'



export default {
    setup() { return { v$: useVuelidate() } },
    data(){
        return {
            name: "",
            date: null,
            startTime: null,
            endTime: null,
            memberCount: null,
            dialog:false,
            currentVenue:{},
            msg:''
        }
    },
    validations(){
        return {
            name: {
                required,
                minLength:minLength(5)
            },
            date: {
                required,
                isValidDate
            },
            startTime: {
                required,
                isValidStartTime
            },
            endTime: {
                required,
                isValidEndTime
            },
            memberCount: { 
                required,
                minValue:minValue(10) 
            },
        }
    },
    computed:{
        venueData(){
            return this.$store.getters.getVenues
        }
    },
    created(){
        this.currentVenue = this.venueData.find((item) => item.id == this.$route.params.id)
    },
    methods:{
        cancelAndBack(){
            this.$router.push('/venues')
        },
        async confirmDetails(){
            const isFormCorrect = await this.v$.$validate()
            if (isFormCorrect){
                let bookingDetails = {}
                bookingDetails = {
                    name: this.name,
                    date:this.date,
                    startTime: this.startTime,
                    endTime: this.endDate,
                    memberCount: this.memberCount
                }
                this.$store.dispatch('setVenue',{
                    userDetails:bookingDetails,
                    venueDetails:this.currentVenue
                })
                this.$router.push('/booking-success')
            } 
            else{
                this.dialog = true
                this.msg = "some of the fields are invalid"
            }
            }
        }
    
}
</script>

<style scoped>
.date-invalid{
    border: 2px solid red;
}
.warn-msg{
    color: tomato;
    font-size: .8rem;
    margin-top: 2px;
}
.heading{
    width: 100vw;
    display: flex;
    justify-content: center;
    margin: 3rem auto;
}

form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 2rem auto;
    width: 450px;
    height: 600px;
    max-height: 1000px;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.26);
    border-radius: 5px;
}

.col {
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
}

input {
    width: 340px;
    height: 40px;
    padding: 5px;
    border: 1px solid black;
}

input::placeholder {
    color: rgb(131, 131, 131);
    font-weight: 400;
}

input:focus {
    background: rgba(16, 69, 125, 0.133);

}

label {
    margin-bottom: 2px;
    letter-spacing: 1px;
    font-weight: 500;
    font-size: small;
}

.btn {
    padding: 10px 15px;
    border: none;
    color: white;
    background-color: black;
    border-radius: 5px;
    cursor: pointer;
}
.double-btn{
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 3rem;
}
</style>