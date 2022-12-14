<template>
  <div class="page-tag page-wrapper container">
    <template v-if="$fetchState.pending && !articles.length">
      <div class="article-cards-wrapper">
        <content-placeholders
          v-for="p in 30"
          :key="p"
          rounded
          class="article-card-block"
        >
          <content-placeholders-img />
          <content-placeholders-text :lines="3" />
        </content-placeholders>
      </div>
    </template>
    <template v-else-if="$fetchState.error">
      <inline-error-block :error="$fetchState.error" />
    </template>
    <template v-else>
      <div class="article-cards-wrapper">
        <article-card-block
          v-for="(article, i) in articles"
          :key="article.id"
          v-observe-visibility="
            i === articles.length - 1 ? lazyLoadArticles : false
          "
          :article="article"
          class="article-card-block"
        />
      </div>
    </template>
    <template v-if="$fetchState.pending && articles.length">
      <div class="article-cards-wrapper">
        <content-placeholders
          v-for="p in 30"
          :key="p"
          rounded
          class="article-card-block"
        >
          <content-placeholders-img />
          <content-placeholders-text :lines="3" />
        </content-placeholders>
      </div>
    </template>
  </div>
</template>

<script>
import ArticleCardBlock from "@/components/Article/ArticleCardBlock";
import InlineErrorBlock from "@/components/ErrorBlock";

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export default {
  components: {
    ArticleCardBlock,
    InlineErrorBlock,
  },
  async fetch() {
    const articles = await fetch(
      `https://dev.to/api/articles?tag=${this.$route.params.tag}&top=365&page=${this.currentPage}`
    ).then((res) => res.json());

    if (!articles.length && this.currentPage === 1) {
      // set status code on server
      if (process.server) {
        this.$nuxt.context.res.statusCode = 404;
      }
      throw new Error(`Tag ${this.$route.params.tag} not found`);
    }

    this.articles = this.articles.concat(articles);
  },
  data() {
    return {
      currentPage: 1,
      articles: [],
    };
  },
  methods: {
    lazyLoadArticles(isVisible) {
      if (isVisible) {
        if (this.currentPage < 5) {
          this.currentPage++;
          this.$fetch();
        }
      }
    },
  },
  head() {
    return {
      title:
        this.$route.params.tag &&
        `${capitalize(this.$route.params.tag)} articles`,
    };
  },
};
</script>
