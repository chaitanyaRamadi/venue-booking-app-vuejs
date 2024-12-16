<template>
    <div class="text-center">
    
        <v-dialog v-model="dialog">
            <v-card>
                <v-card-text>
                    One or More than one of your inputs are Inavalid
                </v-card-text>
                <v-card-actions>
                    <v-btn color="primary" block @click="dialog = false">Close Dialog</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
    <div class="center">
        <the-heading>
            <h2 class="lg--text">{{ $t('loginPage.login') }}</h2>
        </the-heading>
    </div>
    <div class="hello">
        <form @submit.prevent="handleSubmit">
            <v-icon class="icon" icon="mdi-account-circle"></v-icon>
            <div class="col">
                <label>{{ $t('loginPage.name') }}</label>
                <input name="username" required v-model="username" type="text" :placeholder="$t('loginPage.namePlaceholder')" />
            </div>
            <div class="col">
                <label>{{ $t('loginPage.password') }}</label>
                <input name="password" required v-model="password" type="password" :placeholder="$t('loginPage.passwordPlaceholder')" />
            </div>
            <v-btn color="black"  @click="handleSubmit" type="submit">{{ $t('loginPage.submit') }}</v-btn>
        </form>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default /*#__PURE__*/defineComponent({
    name: 'TheLogin',
    data(){
        return {
            username:'',
            password:'',
            dialog:false
        }
    },
    methods: {
        handleSubmit() {
            if (this.username.trim() ==='' || this.password.trim() ===''){
                this.dialog = true
            }
            else{
                this.username = '';
                this.password = '';
                this.$store.dispatch('setLog',true)
                this.$router.push('/venues')
            }
        }
    },
    computed:{
        getLog(){
            return this.$store.getters.getLog
        },
        getTrack(){
            return this.$store.getters.getTrackStatus
        }
    }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.icon{
    margin-bottom: 2rem;
    font-size: 4rem;
}
.lg--text{
    font-size: 2.5rem;
    letter-spacing: 1px;
    
}
.center{
    margin-top: 2rem;
    display: flex;
    justify-content: center;
}
.hello {
    width: 100vw;
    height: 100vh;
}

form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 80px auto;
    width: 400px;
    height: 420px;
    box-shadow: 2px 2px 8px rgba(0,0,0,0.26);
    border-radius: 5px;
}

.col {
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
}

input {
    width: 300px;
    height: 40px;
    padding: 5px;
    border: 1px solid black;
}
input::placeholder{
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
</style>
