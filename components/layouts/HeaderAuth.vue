<template>
  <nav class="nav-user">
    <ul class="flex nav-list">
      <li class="nav-item fl-center-y">
        <nuxt-link class="btn btn-primary" to="/articles/new">
          Create Post
        </nuxt-link>
      </li>
      <li class="nav-item ml-4">
        <div class="user">
          <div class="user-img-wrapper">
            <nuxt-link :to="`/${currentUser.username}`" class="user-link pd-1">
              <img
                :src="currentUser.profile_image"
                :alt="currentUser.username"
                class="user-img"
              />
            </nuxt-link>
          </div>
          <div class="dropdown">
            <ul class="dropdown-list">
              <li class="dropdown-item">
                <nuxt-link
                  :to="`/${currentUser.username}`"
                  class="dropdown-item-link"
                >
                  {{ currentUser.username }}
                </nuxt-link>
              </li>
              <li class="dropdown-item">
                <nuxt-link to="/articles/new" class="dropdown-item-link">
                  Create Post
                </nuxt-link>
              </li>
              <li class="dropdown-item">
                <nuxt-link to="/personal/bookmark" class="dropdown-item-link">
                  Bookmark
                </nuxt-link>
              </li>
              <li class="dropdown-item">
                <nuxt-link to="/personal" class="dropdown-item-link">
                  Personal
                </nuxt-link>
              </li>
              <li class="dropdown-item">
                <nuxt-link
                  to="/user/profile/update/change-password"
                  class="dropdown-item-link"
                >
                  Change Password
                </nuxt-link>
              </li>
              <li class="dropdown-item fl-center-x">
                <button class="btn btn-flat-primary" @click="handleLogout">
                  Sign Out
                </button>
              </li>
            </ul>
          </div>
        </div>
      </li>
    </ul>
  </nav>
</template>

<script>
import Vue from "vue";
export default {
  //   data() {
  //     return {
  //       currentUser: props.currentUser,
  //     };
  //   },
  props: ["currentUser"],
  methods: {
    handleLogout() {
      localStorage.removeItem("api-key");
      this.$emit("logout");
    },
  },
};
</script>
