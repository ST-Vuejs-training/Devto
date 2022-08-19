<template>
  <nuxt-link :to="`/${article.user.username}/${article.id}`" tag="article">
    <div class="image-wrapper">
      <img
        v-if="article.cover_image"
        :src="article.cover_image"
        :alt="article.title"
      />
      <img v-else :src="article.social_image" :alt="article.title" />
    </div>
    <div class="content">
      <nuxt-link :to="`/${article.user.username}/${article.id}`">
        <h1>{{ article.title }}</h1>
      </nuxt-link>
      <div class="tags">
        <nuxt-link
          v-for="tag in article.tag_list"
          :key="tag"
          :to="`/t/${tag}`"
          class="tag"
        >
          #{{ tag }}
        </nuxt-link>
      </div>
      <div class="meta">
        <div class="scl">
          <span>
            <img src="../../assets/icons/heart2.svg" alt="heart" />
            {{ article.positive_reactions_count }}
          </span>
          <span>
            <img src="../../assets/icons/comments.svg" alt="comments" />
            {{ article.comments_count }}
          </span>
        </div>
        <time>{{ article.readable_publish_date }}</time>
      </div>
    </div>
    <nuxt-link :to="`/edit/${article.user.username}/${article.id}`">
      <button
        class="edit_btn"
        v-if="this.$route.params.username === userInfo?.username"
      >
        Edit post {{ userInfo.username }}
      </button>
    </nuxt-link>
  </nuxt-link>
</template>

<script>
import HeartIcon from "@/assets/icons/heart2.svg?inline";
import CommentsIcon from "@/assets/icons/comments.svg?inline";
import { mapGetters, mapActions } from "vuex";

export default {
  components: {
    HeartIcon,
    CommentsIcon,
  },
  props: {
    article: {
      type: Object,
      default: null,
    },
  },
  computed: {
    ...mapGetters(["userInfo"]),
    logname() {
      console.log("-----", this.article);
    },
  },
};
</script>
