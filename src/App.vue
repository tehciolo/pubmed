<template>
  <div class="container" id="app">
    <PubMed />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import PubMed from "./components/PubMed.vue";

export default defineComponent({
  name: "App",
  components: {
    PubMed,
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
