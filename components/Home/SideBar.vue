<template>
  <aside class="sidebar left">
    <nav class="side-bar-nav">
      <h3 class="txt-bold pd-2">Popular Tags</h3>
      <ul class="nav-list">
        <template v-for="(tag, index) in tags">
          <li class="nav-item" :key="index">
            <nuxt-link :to="`/t/${tag.label}`" class="nav-link pd-2">
              {{ `#${tag.label}` }}
            </nuxt-link>
          </li>
        </template>
      </ul>
    </nav>
  </aside>
</template>
<script>
import { TAGS } from "../../shared/constants/tags.ts";
export default {
  data() {
    return {
      tags: TAGS,
    };
  },
};
</script>
