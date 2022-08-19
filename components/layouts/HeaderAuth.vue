<template>
  <nav class="nav-user">
    <ul class="flex nav-list">
      <li class="nav-item fl-center-y">
        <nuxt-link class="btn btn-primary" to="/new"> Create Post </nuxt-link>
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
                <nuxt-link to="/new" class="dropdown-item-link">
                  Create Post
                </nuxt-link>
              </li>
              <li class="dropdown-item">
                <nuxt-link
                  :to="`/${currentUser.username}`"
                  class="dropdown-item-link"
                >
                  Personal
                </nuxt-link>
              </li>
              <li class="dropdown-item fl-center-x">
                <button class="btn btn-flat-primary" @click="openModal">
                  Sign Out
                </button>
              </li>
            </ul>
          </div>
        </div>
      </li>
    </ul>
    <v-modal name="confirm-logout-modal">
      <div class="popup">
        <div class="popup-body pd-2 mb-2">
          <p class="popup-content">Do you wanna sign out?</p>
        </div>
        <div class="popup-footer pd-2">
          <div class="popup-action flex-end-x">
            <button class="btn btn-outline-primary" @click="closeModal">
              Cancel
            </button>
            <button class="btn btn-primary ml-2" @click="handleLogout">
              Ok
            </button>
          </div>
        </div>
      </div>
    </v-modal>
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
    closeModal() {
      this.$modal.close({ name: "confirm-logout-modal" });
    },
    openModal() {
      this.$modal.open({ name: "confirm-logout-modal" });
    },
    handleLogout() {
      localStorage.removeItem("api-key");
      this.$emit("logout");
    },
  },
};
</script>
