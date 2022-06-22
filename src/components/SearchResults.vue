<template>
  <section class="section is-medium">
    <p v-if="isPristine">
      PubMed is a free resource supporting the search and retrieval of biomedical and life
      sciences literature with the aim of improving health – both globally and personally.
      Enter a search term above to start.
    </p>
    <div v-else>
      <p class="subtitle">We have found {{ count }} article(s).</p>

      <ul>
        <li v-for="result in results" :key="result.uid">
          <PubMedArticle :article="result" />
        </li>
      </ul>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import PubMedArticle from "./PubMedArticle.vue";

export default defineComponent({
  name: "SearchResults",

  props: {
    count: {
      type: String,
      required: true,
    },
    results: {
      type: Array,
      required: true,
    },
    isPristine: {
      type: Boolean,
      required: true,
    },
  },

  components: {
    PubMedArticle,
  },
});
</script>

<style scoped>
li:not(:last-of-type) {
  margin-bottom: 2em;
}

section {
  background-color: rgb(223, 223, 222);
}
</style>
