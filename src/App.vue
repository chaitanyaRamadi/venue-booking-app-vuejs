<template>
  <v-app>
    <v-main>
      <TheNavbar/>
        <router-view></router-view>
        <!-- <router-view v-slot="{ Component }">
          <keep-alive>
            <component :is="Component" />
          </keep-alive>
        </router-view> -->
    </v-main>
  </v-app>
</template>

<script>
import TheNavbar from './components/TheNavbar.vue'

export default {
  name: 'App',

  components: {
    TheNavbar,
  },

  data: () => ({
    //
  }),
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

</style>