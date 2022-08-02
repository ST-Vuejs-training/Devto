<template>
  <div class="page-body">
    <div class="container">
      <div class="article-detail row flex-center-x flex-start-y">
        <div class="col-1 col-sm-0 sticky">
          <aside class="sidebar-left">
            <div class="sidebar-left-content" v-if="article.id">
              <ArticleLiked
                :isLiked="article.isLiked"
                :countLikes="article.likes"
                :articleId="article.id"
                v-if="article?.status !== 'draft'"
              />
              <ArticleDetailBookMark
                :isInBookMark="article?.isInBookmark"
                :articleId="article.id"
                v-if="article?.status !== 'draft'"
              />
              <div class="pin option flex-col flex-center-y">
                <img
                  class="pin-icon"
                  src="https://cdn0.iconfinder.com/data/icons/smoothies-vector-icons-volume-2/48/143-512.png"
                  alt="option"
                />
              </div>
            </div>
          </aside>
        </div>
        <main class="col-11 col-sm-12">
          <div class="row">
            <div class="main col-9 col-md-12">
              <div class="article-wrapper">
                <article class="article-section">
                  <div class="article-header">
                    <h2 class="article-title">{{ article?.title }}</h2>
                    <div class="article-meta flex-between-x flex-center-y">
                      <div class="meta-author flex-start-x flex-center-y">
                        <RouterLink
                          class="article-author-link flex-center-x flex-center-y mr-2"
                          :to="`/user/profile/${
                            article?.user?.email === currentUser?.email
                              ? ''
                              : article?.userId
                          }`"
                        >
                          <img
                            class="author-img"
                            :src="userInfo?.profile_image || AVATAR_DEFAUL"
                            :alt="userInfo?.name"
                          />
                          <p class="article-author-name">
                            {{ userInfo?.name }}
                          </p>
                        </RouterLink>
                        <div class="flex-center-x flex-center-y">
                          <time
                            class="article-time"
                            :dateTime="new Date().toISOString()"
                            title="Hôm nay đó"
                          >
                            {{ article?.createdAt }}
                          </time>
                        </div>
                      </div>
                      <div
                        class="meta-action"
                        v-if="article?.user?.email === currentUser?.email"
                      >
                        <RouterLink to="update">
                          <button class="btn btn-secondary mr-2">Edit</button>
                        </RouterLink>
                      </div>
                    </div>
                  </div>
                  <div class="article-body">
                    <div class="article-description py-4">
                      <h4 class="description">
                        {{ article?.description }}
                      </h4>
                    </div>
                    <div class="article-info">
                      <img
                        class="article-img"
                        :src="article?.cover_image || COVER_DEFAULT"
                        :alt="article?.title"
                      />
                      <div
                        class="article-content"
                        v-html="article?.body_html"
                      ></div>
                    </div>
                  </div>
                </article>
                <Comments :postId="article?.id" />
              </div>
            </div>
            <AuthorDetail :userId="article.userId" :articleId="article.id" />
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async fetch() {
    const article = await fetch(
      `https://dev.to/api/articles/${this.$route.params.id}`
    ).then((res) => res.json());

    const userInfo = await fetch(
      `https://dev.to/api/users/by_username?url=${this.$route.params.username}`
    ).then((res) => res.json());

    console.log(article);
    console.log(userInfo);
    this.article = article;
    this.userInfo = userInfo;
  },

  data() {
    return {
      article: {},
      userInfo: {},
    };
  },
  computed: {
    logArticle: () => {
      console.log(this.article);
    },
  },
};
</script>
