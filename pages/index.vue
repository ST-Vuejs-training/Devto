<template>
  <div class="page-body home-page">
    <section class="articles-section pd-4">
      <div class="container">
        <div class="row">
          <div class="sm-hide col-2 col-md-3">
            <SideBar />
          </div>
          <div class="col-7 col-md-9 col-sm-12">
            <header class="fl-space-between mb-2">
              <h2 class="section-title">Articles</h2>
              <nav class="nav-tab sm-hide">
                <ul class="flex nav-tab-list">
                  <li 
                    v-for="(filter, index) in filterArr"
                    :key="index"
                    class="nav-tab-item mx-1"
                    :class="{selected: filter === filterSelected}"
                    @click="changeFilter(filter)"
                  >
                    <nuxt-link
                      :to="`?tag=${filter}`"
                      class="pd-2 txt-capitalize"
                    >
                      {{ filter }}
                    </nuxt-link>
                  </li>
                </ul>
              </nav>
              <select class="crayon-select d-hide sm-visiable">
                <option value="all">All</option>
                <option value="Frontend">Frontend</option>
                <option value="Backend">Backend</option>
                <option value="Database">Database</option>
              </select>
            </header>
            <template>
              <ul
                class="articles-list"
                v-for="(article, index) in articles"
                :key="index"
              >
                <Article :article="article" />
              </ul>
            </template>
          </div>
          <SideBarRight />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Vue from "vue";
import SideBarRight from "@/components/Home/SideBarRight";
import SideBar from "@/components/Home/SideBar";

export default {
  components: {
    SideBarRight,
    SideBar,
  },
  async fetch() {
    let tag = this.$route.query.tag;
    if (!this.filterArr.includes(tag)) {
      tag = 'all';
    }
    this.filterSelected = tag;
    await this.fetchArticle(tag);
  },
  mounted() {
    if (!this.filterArr.slice(1).includes(this.$route.query.tag)) {
      this.$router.replace({'query': null});
    }
  },
  watchQuery(newQuery) {
    if (newQuery.tag === 'all') {
      this.$router.replace({'query': null});
    }
  },
  data() {
    return {
      currentPage: 1,
      articles: [],
      filterSelected: 'all',
      filterArr: ['all', 'frontend', 'backend', 'database']
    };
  },
  methods: {
    changeFilter(filter) {
      this.filterSelected = filter;
      this.fetchArticle(filter);
    },
    async fetchArticle(filter) {
      this.articles = await fetch(
        `https://dev.to/api/articles?tag=${filter === 'all' ? '' : filter}`
      )
      .then((res) => res.json());
    }
  }
};
</script>
