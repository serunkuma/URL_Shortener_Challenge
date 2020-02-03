<template>
  <div id="app">
    <div class="container nav-container">
      <nav class="navbar navbar-expand-sm">
        <a class="navbar-brand" href="#">
          <img src="./assets/images/logo.svg" alt="logo" />
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
              <a class="nav-link btn rounded bold" href="#">Sign Up</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
    <section class="landing-section">
      <div class="container">
        <div class="row">
          <div class="col-6">
            <h1>More than just <br />shorter links</h1>
            <p>
              Build your brand’s recognition and get detailed insights on how
              your links are performing.
            </p>
            <a href="#" class="btn bold rounded"> Get Started</a>
          </div>
          <div class="col-4"></div>
        </div>
      </div>
    </section>
    <section class="urls-section">
      <div class="container">
        <div class="row d-flex justify-content-center shorten-it">
          <div class="col-8">
            <input
              class="form-control"
              type="text"
              placeholder="Shorten a link here..."
            />
          </div>
          <div class="col-2">
            <a href="#" class="btn btn-block bold">Shorten It!</a>
          </div>
        </div>
        <div class="row d-flex justify-content-between shortened">
          <div class="col-8 d-flex align-items-center">
            https://www.frontendmentor.io
          </div>
          <div class="col-4 d-flex align-items-center">
            https://rel.ink/k4lKyk
            <a href="" class="btn d-inline ml-3">Copy</a>
          </div>
        </div>
        <div class="row d-flex justify-content-between shortened">
          <div class="col-8 d-flex align-items-center">
            https://www.frontendmentor.io
          </div>
          <div class="col-4 d-flex align-items-center">
            https://rel.ink/k4lKyk
            <a href="" class="btn d-inline ml-3">Copy</a>
          </div>
        </div>
        <div class="row d-flex justify-content-between shortened">
          <div class="col-8 d-flex align-items-center">
            https://www.frontendmentor.io
          </div>
          <div class="col-4 d-flex align-items-center">
            https://rel.ink/k4lKyk
            <a href="" class="btn d-inline ml-3">Copy</a>
          </div>
        </div>
      </div>
    </section>
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
  components: {},
  data: function() {
    return {};
  }
};
</script>

<style lang="scss">
@import "variables";
#app {
  nav ul.login-signup {
    min-width: 200px;
    display: flex;
    justify-content: space-around;
    > li {
      width: 100%;
    }
  }

  .landing-section {
    height: 80vh;
    display: flex;
    align-items: center;
  }

  .urls-section {
    background-color: $light-gray;
    .row.shorten-it {
      padding: 50px 0px;
      background-color: $dark-violet;
      border-radius: 10px;
      position: relative;
      top: -80px;
    }
    .row.shortened {
      background-color: #fff;
      border: 1px sold $gray;
    }
    .row > div {
      height: 60px;
    }
    input,
    a.btn {
      height: 100%;
      display: flex;
      align-items: center;
    }
    a.btn {
      border-radius: 10px;
      justify-content: center;
    }
  }
}
</style>
