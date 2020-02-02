<template>
  <div id="app">
    <div class="container nav-container">
      <nav class="navbar navbar-expand-sm">
        <a class="navbar-brand" href="#">
          <img src="./assets/logo.svg" alt="logo" />
        </a>
        <button
          class="navbar-toggler collapsed"
          type="button"
          data-toggle="collapse"
          data-target="#navigation-links"
          aria-controls="navigation-links"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="navbar-collapse collapse" id="navigation-links" style="">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#"
                >Features <span class="sr-only">(current)</span></a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Pricing</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Resources</a>
            </li>
          </ul>
          <ul class="login-signup navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="#">Login</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Sign Up</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
    <section class="landing-section">
      <div class="container">
        lests get started
      </div>
    </section>
    <section class="urls-section"></section>
    <section class="statistics-section"></section>
    <section class="footer-banner"></section>
    <footer>
      <div class="container"></div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {}
};
</script>

<style lang="scss">
#app {
}
</style>
