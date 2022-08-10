<template>
  <li class="comment" :class="level !== 0 && 'reply'">
    <div class="card">
      <div class="profile">
        <nuxt-link
          :to="{
            name: 'username',
            params: { username: comment.user.username },
          }"
          class="inner-link"
        >
          <img :src="comment.user.profile_image_90" :alt="comment.user.name" />
          <span>{{ comment.user.name }}</span>
        </nuxt-link>
        <a
          v-if="comment.user.twitter_username"
          :href="`https://twitter.com/${comment.user.twitter_username}`"
          target="_blank"
        >
          <img src="../../assets/icons/twitter.svg" alt="twitter" />
        </a>
        <a
          v-if="comment.user.github_username"
          :href="`https://github.com/${comment.user.github_username}`"
          target="_blank"
        >
          <img src="../../assets/icons/github.svg" alt="github" />
        </a>
        <a
          v-if="comment.user.website_url"
          :href="comment.user.website_url"
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          <img src="../../assets/icons/external-link.svg" alt="twitter" />
        </a>
      </div>
      <!-- eslint-disable-next-line -->
      <div v-html="comment.body_html" class="html-content"></div>
    </div>
    <ul>
      <comment-block
        v-for="reply in comment.children"
        :key="reply.id_code"
        :comment="reply"
        :level="level + 1"
      />
    </ul>
  </li>
</template>

<script>
import CommentBlock from '@/components/Article/CommentBlock';

export default {
  name: 'CommentBlock',
  components: {
    CommentBlock,
  },
  props: {
    comment: {
      type: Object,
      default: null,
    },
    level: {
      type: Number,
      default: null,
    },
  },
};
</script>

<style lang="scss" scoped></style>
