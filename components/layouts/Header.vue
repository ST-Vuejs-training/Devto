<template>
  <header class="page-header">
    <div class="container">
      <div class="fl-space-between px-4">
        <h1 class="logo">
          <nuxt-link class="fl-center-y" to="/">
            <img :src="media.LOGO" alt="Blog" class="logo-img" />
          </nuxt-link>
        </h1>
        <header-auth v-if="store?.token" />
        <nav v-else class="nav-auth">
          <ul class="flex nav-list">
            <li class="nav-item">
              <nuxt-link class="btn btn-flat-primary" to="/auth/login">
                Login
              </nuxt-link>
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
import { media } from '@/shared/constants/assetsUrl';
// import HeaderAuth from '@/components/';
export default {
  data() {
    return { media };
  },
  //   components: {
  //     HeaderAuth,
  //   },
};
</script>
