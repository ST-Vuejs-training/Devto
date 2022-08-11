<template>
  <div class="page-body">
    <section class="login-section">
      <div class="section-header">
        <h1 class="login-title">Welcome to Nuxtjs PJ - DEV TO</h1>
        <h1 class="register-description">
          Do not have an account?
          <Link class="login-link" to="/auth/register"> Register </Link>
        </h1>
      </div>
      <div class="section-body">
        <div class="login-network">
          <a
            class="btn btn-submit flex-center-x flex-center-y gmail"
            href="https://dev.to/enter"
          >
            <i class="network-icon fab fa-google" />
            <p class="network-txt">Continue with Gmail</p>
          </a>
        </div>
        <div class="login-network">
          <a
            class="btn btn-submit flex-center-x flex-center-y github"
            href="https://dev.to/enter"
          >
            <i class="network-icon fab fa-github" />
            <p class="network-txt">Continue with Github</p>
          </a>
        </div>
        <div class="login-network">
          <a
            class="btn btn-submit flex-center-x flex-center-y facebook"
            href="https://dev.to/enter"
          >
            <i class="network-icon fab fa-facebook" />
            <p class="network-txt">Continue with Facebook</p>
          </a>
        </div>

        <div class="login-hr txt-center">
          <span class="hr-txt"
            >Have a password? Continue with your devto account with API
            KEY</span
          >
        </div>

        <form class="login-form" @submit="checkForm">
          <div class="login-field">
            <label class="login-label" htmlFor="email"> API KEY </label>
            <input
              class="input-text"
              type="text"
              placeholder="API KEY"
              id="apikey"
              v-model="apikey"
            />
          </div>
          <div class="login-submit">
            <input class="btn btn-submit" type="submit" value="Login" />
          </div>
        </form>
        <div class="forgot-password">
          <a class="forgot-password-link" href="#"> Forgot password </a>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  data: {
    errors: [],
    apikey: "",
  },
  methods: {
    checkForm: async function (e) {
      e.preventDefault();
      if (this.apikey) {
        console.log(this.apikey);
        const articles = await fetch("https://dev.to/api/users/me", {
          headers: {
            "api-key": this.apikey,
          },
        }).then((res) => res.json());
        console.log(articles);
        return true;
      }

      this.errors = [];

      if (!this.apikey) {
        this.errors.push("Name required.");
      }
    },
  },
};
</script>
