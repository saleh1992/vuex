<template>
  <v-app>
    <v-main>
      <AppBar />
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import AppBar from '@/components/AppBar.vue';

export default {
  name: "App",

  components: { AppBar }
};
</script>

<style lang="scss">
@import "./scss/core.scss";
@import "./scss/variables.scss"
</style>
