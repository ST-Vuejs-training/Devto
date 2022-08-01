<template>
  <li class="article-item mb-3">
    <div class="article pd-4">
      <div class="article-header flex mb-2">
        <RouterLink :to="`/user/profile/${article.userId}`">
          <div class="article-meta flex">
            <div class="article-author-img mr-2">
              <img
                :src="article?.user?.profile_image_90 || AVATAR_DEFAUL"
                :alt="article?.user?.firstName"
                class="author-img"
              />
            </div>
            <div>
              <p class="article-author-name">
                {{ article?.user?.name }}
              </p>
              <time
                class="article-time"
                :dateTime="new Date().toISOString()"
                title="Hôm nay đó"
              >
                {{ article?.published_at }}
              </time>
            </div>
          </div>
        </RouterLink>
      </div>
      <div class="article-body pl-10">
        <h3 class="article-title mb-3">
          <RouterLink :to="`/articles/${article?.id}`">{{
            article?.title
          }}</RouterLink>
        </h3>
        <p class="article-description end-line mb-2">
          {{ article?.description }}
        </p>
        <div class="article-action fl-space-between">
          <div class="article-action-left flex-center-y">
            <div class="btn btn-flat-primary">
              <RouterLink :to="`/articles/${article?.id}`">
                <div class="flex-center-y">
                  <i class="far fa-heart mr-2" />
                  <span class="sm-hide">
                    {{
                      `${article?.positive_reactions_count} ${
                        article?.positive_reactions_count > 1 ? 'likes' : 'like'
                      }`
                    }}
                  </span>
                  <span class="d-hide sm-visiable">{{ article?.positive_reactions_count }}</span>
                </div>
              </RouterLink>
            </div>
            <div class="btn btn-flat-primary">
              <RouterLink :to="`/articles/${article?.id}`">
                <div class="flex-center-y">
                  <i class="far fa-comments mr-2" />
                  <span class="sm-hide">
                    {{
                      `${article?.comments_count} ${
                        article?.comments_count > 1 ? 'comments' : 'comment'
                      }`
                    }}
                  </span>
                  <span class="d-hide sm-visiable">{{
                    article?.comments_count
                  }}</span>
                </div>
              </RouterLink>
            </div>
          </div>
          <div class="article-action-right">
            <ButtonSave
              onClick="{handleToggleBookmark}"
              status="{isInBookmark}"
            />
          </div>
        </div>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  // components: {
  //   HeartIcon,
  //   CommentsIcon,
  // },
  props: {
    article: {
      type: Object,
      default: null,
    },
  },
};
</script>
