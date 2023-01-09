<template>
    <nav>
        <router-link to="/">
        <div class="nav-section logo">
            <h1>VENEW</h1>
        </div>
        </router-link>
        <div class="nav-section"></div>
        <div class="nav-section">
            <router-link v-if="!getLog" to="/login">
                <span >
                    <v-btn>Login <v-icon icon="mdi-account-circle"></v-icon></v-btn>
                </span>
            </router-link>
            <v-btn @click="logout" v-else>
                Logout
                <v-icon icon="mdi-logout"></v-icon>
            </v-btn>
        </div>
    </nav>
</template>
<script>
export default {
    computed:{
        getLog(){
            return this.$store.getters.getLog
        }
    },
    methods:{
        logout(){
            this.$store.dispatch('setLog',false)
            this.$router.replace('/')
        }
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Bebas+Neue&display=swap');
nav{
    width: 100vw;
    height: 5rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    box-shadow: 0 2px 10px #5e6b7037;
} 
a{
    text-decoration: none;
    color: black;
    cursor: pointer;
}
span{
    padding: 8px 12px;
}
.nav-section{
}
.logo{
    display: flex;
    flex-direction: column;
    font-size: 2rem;
    font-family: 'Abril Fatface', cursive;
    color: #303F9F;
    /* text-shadow: 0 2px 10px #829dc5d5; */
    /* background-color: #8daadb72; */

}
</style>