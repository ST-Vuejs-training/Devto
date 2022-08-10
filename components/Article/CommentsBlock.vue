<template>
  <div>
    <ul v-if="comments.length" id="comments">
      <comment-block
        v-for="comment in comments"
        :key="comment.id_code"
        :comment="comment"
        :level="0"
      />
    </ul>
    <a
      :href="addCommentLink"
      target="_blank"
      rel="nofollow noopener noreferer"
      class="add-comment"
    >
      Add comment
    </a>
  </div>
</template>

<script>
import CommentBlock from '@/components/Article/CommentBlock';

export default {
  components: {
    CommentBlock,
  },
  props: [],
  async fetch() {
    this.comments = await fetch(
      `https://dev.to/api/comments?a_id=${this.$route.params.id}`
    ).then((res) => res.json());
  },
  fetchOnServer: false,
  data() {
    return {
      comments: [],
    };
  },
  computed: {
    addCommentLink() {
      // const { slug } = this.$store.state.currentArticle || {};
      // return `https://dev.to/${this.$route.params.username}/${slug}`;
      return `https://dev.to/${this.$route.params.username}`;
    },
  },
};
</script>
