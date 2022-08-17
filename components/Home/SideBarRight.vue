<template>
  <div class="col-3 md-hide">
    <aside class="side-bar right mt-9">
      <div class="crayons">
        <div class="crayons-header">
          <h3 class="crayons-title">#recommends</h3>
          <ul class="crayons-list">
            <template v-for="(article, index) in articles">
              <li class="crayons-item" :key="index">
                <nuxt-link
                  :to="`/${article.user.username}/${article.id}`"
                  class="crayons-link mb-1"
                >
                  {{ article.title }}
                </nuxt-link>
                <div>
                  <span class="crayons-comment">{{
                    article.user.username
                  }}</span>
                </div>
              </li>
            </template>
          </ul>
        </div>
      </div>
    </aside>
    <aside class="side-bar right">
      <div class="crayons">
        <div class="crayons-header">
          <h3 class="crayons-title">#news</h3>
          <ul class="crayons-list">
            <li class="crayons-item">
              <nuxt-link to="/" class="crayons-link mb-1">
                MoonZoon Dev News (5): Chat example, MoonZoon Cloud
              </nuxt-link>
              <div>
                <span class="btn btn-primary">New</span>
              </div>
            </li>
            <li class="crayons-item">
              <nuxt-link to="/" class="crayons-link mb-1">
                This week in Flutter #10
              </nuxt-link>
              <div>
                <span class="btn btn-primary">New</span>
              </div>
            </li>
            <li class="crayons-item">
              <nuxt-link to="/" class="crayons-link mb-1">
                JS1024 has started!
              </nuxt-link>
              <div>
                <span class="btn btn-primary">New</span>
              </div>
            </li>
            <li class="crayons-item">
              <nuxt-link to="/" class="crayons-link mb-1">
                The Temporal Date API
              </nuxt-link>
              <div>
                <span class="btn btn-primary">New</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  </div>
</template>
<script>
export default {
  async fetch() {
    const articles = await fetch(
      `https://dev.to/api/articles?tag=nuxt&state=rising&per_page=10`
    ).then((res) => res.json());

    this.articles = this.articles.concat(articles);
    console.log(this.articles);
  },

  data() {
    return {
      currentPage: 1,
      articles: [],
    };
  },
};
</script>
