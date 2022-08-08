<template>
  <div class="personal-info page-wrapper">
    <username-block />
    <username-articles-block />
  </div>
</template>

<script>
import UsernameBlock from '@/components/User/UserInfoBlock';
import UsernameArticlesBlock from '@/components/User/UserArticles';

export default {
  components: {
    UsernameBlock,
    UsernameArticlesBlock,
  },
};
</script>

<style lang="scss" scoped>
.page-wrapper {
  max-width: 1280px;
  margin: auto;
  padding: 1rem;
}
</style>
