<template>
  <header class="page-header">
    <div class="container">
      <div class="fl-space-between px-4">
        <h1 class="logo">
          <RouterLink class="fl-center-y" to="/">
            <img :src="media.LOGO" alt="Blog" class="logo-img" />
          </RouterLink>
        </h1>
        <header-auth v-if="store?.token" />
        <nav v-else class="nav-auth">
          <ul class="flex nav-list">
            <li class="nav-item">
              <RouterLink class="btn btn-flat-primary" to="/auth/login">
                Login
              </RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="btn btn-primary" to="/auth/register">
                Create an account
              </RouterLink>
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
