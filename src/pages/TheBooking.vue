<template>
    <div class="heading text-h5">
        <the-heading><h2>Booking</h2></the-heading>
    </div>
    <form>
            <div class="col">
                <label>Name</label>
                <input  name="username" ref="name"  v-model="name.val" type="text" placeholder="enter name"  required/>
                <p v-if="!name.isValid" :class="{'warn-msg':true}">Name must be valid!</p>
            </div>
            <div class="col">
                <label>Date</label>
                <input  name="date" ref="date" v-model="date.val" @blur="validateDate" @change="validateDate"   type="date"/>
                <p v-if="!date.isValid" :class="{'warn-msg':true}">Date must be valid!</p>
            </div>
            <div class="col">
                <label>Start Time</label>
                <input name="start-time" v-model="startTime.val" ref="stime" type="time" @change="validateTime"  @blur="afterLoseFocus('startTime',$event)"/>
                <p v-if="!startTime.isValid" :class="{'warn-msg':true}">Start Time must be valid!</p>
            </div>
            <div class="col">
                <label>End Time</label>
                <input name="end-time" v-model="endTime.val" ref="etime" type="time" @blur="afterLoseFocus('endTime',$event)"/>
                <p v-if="!endTime.isValid" :class="{'warn-msg':true}">End Time must be valid!</p>
            </div>
            <div class="col">
                <label>Member Count</label>
                <input name="members" v-model="memberCount.val" ref="count" type="number" @blur="afterLoseFocus('memberCount',$event)"/>
                <p v-if="!memberCount.isValid" :class="{'warn-msg':true}">Member Count must be valid!</p>
            </div>
            <div class="double-btn">
                <v-btn color="primary" @click.prevent="confirmDetails" type="submit">confirm</v-btn>
                <v-btn color="red" @click.prevent="cancelAndBack" type="submit">cancel</v-btn>
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

export default {
    data(){
        return {
            currentVenue:{},
            name:{
                val:null,
                isValid:true
            },
            date: {
                val: null,
                isValid: true
            },
            startTime: {
                val: null,
                isValid: true
            },
            endTime: {
                val: null,
                isValid: true
            },
            memberCount: {
                val: 0,
                isValid: true
            },
            dialog:false,
            msg:'',
            dateStyle:''
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
        validateDate(event){
            if (new Date(event.target.value).getDate() <= new Date().getDate() || this.$refs.date.value == '' )
                this.date.isValid = false
            else{
                this.date.isValid = true
            }
        },
        validateTime(event){
            let time = Date(event.target.value)
            console.log(time);
        },
        afterLoseFocus(input,event){
            if (event.target.value === '' || event.target.value === null )
                this[input].isValid = false
            else
                this[input].isValid = true
        },
        confirmDetails(){
            console.log(this.$refs.name.value + ' refs');
            if (!this.$refs.name.value || !this.$refs.date.value || !this.$refs.stime.value || !this.$refs.etime.value || !this.$refs.count.value){
                this.msg = 'one or more of your inputs are invalid!'
                // this.dialog=true

            }
            else{
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
        },
        cancelAndBack(){
            this.$router.push('/venues')
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