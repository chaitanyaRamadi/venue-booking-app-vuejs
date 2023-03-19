<template>
    <nav>
        <router-link to="/">
            <div class="logo">
                <h1>{{ $t('homePage.brand') }}</h1>
            </div>
        </router-link>
        <!-- <div class="nav-section"></div> -->
        <div class="nav-section">
            <router-link v-if="!getLog" to="/login">
                
                    <v-btn>{{ $t('loginPage.login') }} <v-icon icon="mdi-account-circle"></v-icon></v-btn>
              
            </router-link>
            <v-btn @click="logout" v-else>
                {{ $t('loginPage.logout') }}
                <v-icon icon="mdi-logout"></v-icon>
            </v-btn>
            <div class="locale">
                <the-dropdown :locale="true" :list="languages" @dropdown-event="handleLocale"></the-dropdown>
            </div>
            <!-- <v-icon class="btn-earth" icon="mdi-earth"></v-icon> -->
            <h1>{{ justNum }}</h1>
        </div>
    </nav>
</template>
<script>
import TheDropdown from '@/components/TheDropdown.vue';
// import app from '../main';

export default {
    components: {
        TheDropdown
    },
    data() {
        return {
            languages: [
                { key: 'english', abbr: 'en' },
                { key: 'german', abbr: 'ge' },
                { key: 'french', abbr: 'fr' },
            ],
        }
    },
    mounted() {
        // console.log(app.config.globalProperties.$justTime);
        // console.log(this.$justTime);
    },
    computed:{
        getLog(){
            return this.$store.getters.getLog
        }
    },
    methods:{
        handleLocale(event) {
            this.$i18n.locale = event.target.value.slice(0, 2);
            this.$store.dispatch('setLocale', event.target.value)
        },
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
.btn-earth{
    position: absolute;
    right: 12rem;
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
    margin-left: 2rem;
    width: 10vw;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 10px;
}
.logo{
    text-align: center;
    display: flex;
    flex-direction: column;
    font-size: 2rem;
    font-family: 'Abril Fatface', cursive;
    color: #303F9F;
    width: 15rem;
    /* text-shadow: 0 2px 10px #829dc5d5; */
    /* background-color: #8daadb72; */

}
</style>