<template>
  <article class="card">
    <header class="card-header">
      <p class="card-header-title">{{ article.title }}</p>
    </header>
    <div class="card-content">
      <p class="content">
        <strong>Publication date:</strong> {{ article.pubdate }}<br />
        <strong>Journal:</strong> {{ article.fulljournalname }}<br />
        <strong>Author(s):</strong> {{ authors }}<br />
      </p>
    </div>
    <footer class="card-footer">
      <p class="card-footer-item">
        <span> View on <a :href="href">PubMed</a> </span>
      </p>
    </footer>
  </article>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  name: "PubMedArticle",

  props: {
    article: {
      type: Object,
      required: true,
    },
  },

  computed: {
    authors() {
      return this.article.authors.map(({ name }) => name).join(", ");
    },

    href() {
      return `https://pubmed.ncbi.nlm.nih.gov/${this.article.uid}/`;
    },
  },
});
</script>
