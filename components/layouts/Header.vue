<template>
  <header class="page-header">
    <div class="container">
      <div class="fl-space-between px-4">
        <h1 class="logo">
          <nuxt-link class="fl-center-y" to="/">
            <img :src="media.LOGO" alt="Blog" class="logo-img" />
          </nuxt-link>
        </h1>
        <header-auth
          v-if="currentUser.id"
          :currentUser="currentUser"
          @logout="logout"
        />
        <nav v-else class="nav-auth">
          <ul class="flex nav-list">
            <li class="nav-item">
              <button class="btn btn-flat-primary" @click="login">
                Login
              </button>
            </li>
            <li class="nav-item">
              <nuxt-link class="btn btn-primary" to="/auth/register">
                Create an account
              </nuxt-link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
import { media } from "@/shared/constants/assetsUrl";
import HeaderAuth from "@/components/layouts/HeaderAuth";
export default {
  data() {
    return { media, currentUser: {} };
  },
  components: {
    HeaderAuth,
  },
  methods: {
    logout() {
      this.currentUser = "";
    },
  },
  mounted() {
    const userInfo = localStorage.getItem("user") || "";
    console.log("--------", userInfo);
    if (userInfo) {
      this.currentUser = JSON.parse(userInfo);
    }
  },
  methods: {
    async login() {
      await this.$store.dispatch('getUserInfo');
      this.$router.push('/auth/login');
    }
  }
};
</script>
