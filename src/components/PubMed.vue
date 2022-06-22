<template>
  <div>
    <section class="hero is-info">
      <div class="hero-body">
        <p class="title">PubMed</p>
        <p class="subtitle">an online repository of biomedical journal articles</p>
      </div>
    </section>

    <SearchForm @search-performed="updateResults" />
    <SearchResults :results="results" :count="count" :is-pristine="isPristine" />
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from "@vue/composition-api";
import SearchForm from "./SearchForm.vue";
import SearchResults from "./SearchResults.vue";

export default defineComponent({
  name: "PubMed",

  components: {
    SearchForm,
    SearchResults,
  },

  data() {
    return {
      results: [],
      count: "",
      isPristine: true,
    };
  },

  methods: {
    updateResults({ count, results }) {
      this.isPristine = false;
      this.results = results;
      this.count = count;
    },
  },
});
</script>
