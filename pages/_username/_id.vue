<template>
  <div class="article-detail page-wrapper">
    <div class="article-content-wrapper">
      <div class="article-block">
        <template>
          <article>
            <template v-if="$fetchState.pending">
              <content-placeholders rounded>
                <content-placeholders-heading />
                <content-placeholders-img />
                <content-placeholders-text :lines="50" />
              </content-placeholders>
            </template>
            <template v-else-if="$fetchState.error">
              <inline-error-block :error="$fetchState.error" />
            </template>
            <template v-else>
              <header>
                <h1>{{ article.title }}</h1>
                <div class="tags">
                  <nuxt-link
                    v-for="tag in article.tags"
                    :key="tag"
                    :to="{ name: 't-tag', params: { tag } }"
                    class="tag"
                  >
                    #{{ tag }}
                  </nuxt-link>
                </div>
                <div v-if="article.cover_image" class="image-wrapper">
                  <img :src="article.cover_image" :alt="article.title" />
                </div>
                <div class="meta">
                  <div class="scl">
                    <span>
                      <img src="../../assets/icons/heart2.svg" alt="heart" />
                      {{ article.positive_reactions_count }}
                    </span>
                    <span class="comments" @click="scrollToComments">
                      <img
                        src="../../assets/icons/comments.svg"
                        alt="comments"
                      />
                      {{ article.comments_count }}
                    </span>
                  </div>
                  <time>{{ article.readable_publish_date }}</time>
                </div>
              </header>
              <!-- eslint-disable-next-line -->
              <div class="content" v-html="article.body_html" />
            </template>
          </article>
          <comments-block v-if="article.title" class="comments-block" />
        </template>
      </div>

      <div class="aside-username-wrapper">
        <user-block class="aside-username-block" />
      </div>
    </div>
  </div>
</template>

<!-- <script>
import ArticleBlock from '@/components/blocks/ArticleBlock';
import AsideUsernameBlock from '@/components/blocks/AsideUsernameBlock';

export default {
  components: {
    ArticleBlock,
    CommentsBlock,
    AsideUsernameBlock,
  },
};
</script> -->

<script>
import CommentsBlock from "@/components/Article/CommentsBlock";
import UserBlock from "@/components/User/UserBlock";
import InlineErrorBlock from "@/components/ErrorBlock";

export default {
  components: {
    CommentsBlock,
    UserBlock,
    InlineErrorBlock,
  },
  props: [],
  async fetch() {
    const article = await fetch(
      `https://dev.to/api/articles/${this.$route.params.id}`
    ).then((res) => res.json());

    if (article.id && article.user.username === this.$route.params.username) {
      this.article = article;
      // this.$store.commit('SET_CURRENT_ARTICLE', this.article);
    } else {
      // set status code on server
      if (process.server) {
        this.$nuxt.context.res.statusCode = 404;
      }
      throw new Error("Article not found");
    }
  },
  data() {
    return {
      article: {},
    };
  },
  activated() {
    // Call fetch again if last fetch more than 60 sec ago
    if (this.$fetchState.timestamp <= Date.now() - 60000) {
      this.$fetch();
    }
  },
  methods: {
    scrollToComments() {
      const el = document.querySelector("#comments");
      if (el) {
        const scrollTo = el.getBoundingClientRect().top;
        window.scrollBy({ top: scrollTo - 20, left: 0, behavior: "smooth" });
      }
    },
  },
  head() {
    return {
      title: this.article.title,
    };
  },
};
</script>
