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
                  <li class="nav-tab-item mx-1 pd-2 selected">
                    <nuxt-link to="/">All</nuxt-link>
                  </li>
                  <li class="nav-tab-item mx-1 pd-2">
                    <nuxt-link to="/">Frontend</nuxt-link>
                  </li>
                  <li class="nav-tab-item mx-1 pd-2">
                    <nuxt-link to="/">Backend</nuxt-link>
                  </li>
                  <li class="nav-tab-item mx-1 pd-2">
                    <nuxt-link to="/">Database</nuxt-link>
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

export default {
  components: {
    SideBarRight,
  },
  async fetch() {
    const articles = await fetch(
      `https://dev.to/api/articles?state=rising&page=${this.currentPage}`
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
