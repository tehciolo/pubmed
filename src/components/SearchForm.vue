<template>
  <section class="section is-medium">
    <form @submit.prevent="search">
      <div class="field has-addons">
        <div class="control">
          <input
            v-model="query"
            class="input"
            type="text"
            placeholder="Find an article"
          />
        </div>
        <div class="control">
          <button
            type="submit"
            class="button is-info"
            :class="{ 'is-loading': isLoading }"
          >
            Search
          </button>
        </div>
      </div>
    </form>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import { getResults } from "../api";

export default defineComponent({
  name: "SearchForm",

  data() {
    return {
      query: "",
      isLoading: false,
    };
  },

  methods: {
    async search() {
      if (this.query.trim().length) {
        this.isLoading = true;

        getResults(this.query)
          .then(({ count, response }) => {
            // result contains an Object with article ids as keys (but also a 'uids' key that lists all the article uids). we don't need that so we remove it here
            delete response.result.uids;

            this.$emit("search-performed", {
              count,
              results: Object.values(response.result),
            });
          })
          // TODO: handle properly
          .catch(console.error)
          .finally(() => {
            this.isLoading = false;
          });
      }
    },
  },
});
</script>
