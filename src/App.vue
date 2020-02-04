<template>
  <div id="app">
    <header>
      <div class="container py-5">
        <nav class="navbar navbar-expand-sm navbar-light">
          <a class="navbar-brand" href="#">
            <img src="./assets/images/logo.svg" svg-inline alt="logo" />
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
            <ul class="navbar-nav mr-auto pl-5">
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
                <a class="nav-link btn rounded bold" href="javascript:void(0)"
                  >Sign Up</a
                >
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
    <section class="landing-section">
      <div class="container d-flex align-items-center">
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <h1 class="bold ">More than just <br />shorter links</h1>
            <p>
              Build your brand’s recognition and get detailed insights on how
              your links are performing.
            </p>
            <a href="#" class="btn bold rounded"> Get Started</a>
          </div>
          <div class="col-sm-12 col-md-4"></div>
        </div>
      </div>
    </section>
    <section class="urls-section">
      <div class="container">
        <div class="row d-flex justify-content-center shorten-it">
          <div
            class="col-sm-12 col-md-8"
            :class="errorMessage.length > 0 ? 'error' : ''"
          >
            <input
              v-model="toShorten"
              class="form-control"
              type="text"
              placeholder="Shorten a link here..."
              name="toShorten"
              :class="errorMessage.length > 0 ? 'error' : ''"
              @change="clearErrors()"
            />
            <label for="toShorten" v-if="errorMessage.length > 0">
              {{ errorMessage }}
            </label>
          </div>
          <div class="col-sm-12 col-md-2">
            <a
              href="javascript:void(0)"
              class="btn btn-block bold"
              @click="shortenUrl(toShorten)"
              >Shorten It!</a
            >
          </div>
        </div>
        <div
          class="row shortened"
          v-for="link in links"
          v-bind:key="link.hashid"
        >
          <div class="col-7 d-flex align-items-center">
            {{ link.originalUrl }}
          </div>
          <div class="col-3 d-flex align-items-center">
            {{ link.shortenedUrl }}
          </div>
          <div class="col-2 d-flex align-items-center">
            <button
              class="btn btn-block"
              v-clipboard:copy="link.shortenedUrl"
              @click="handleCopyStatus(link.hashid)"
              :id="link.hashid"
            >
              Copy
            </button>
          </div>
        </div>
      </div>
    </section>
    <section class="statistics-section">
      <div class="container">
        <div class="title-area text-center">
          <h2>Advanced Statistics</h2>
          <p>
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </div>

        <div class="stat-cards-wrapper">
          <hr />
          <div class="row stat-cards">
            <div class="col-4">
              <div class="card">
                <div class="img-wrapper">
                  <img
                    class="card-img-top"
                    alt="brand recognition"
                    src="./assets/images/icon-brand-recognition.svg"
                    svg-inline
                  />
                </div>

                <div class="card-body">
                  <h4>Brand Recognition</h4>
                  <p class="card-text">
                    Boost your brand recognition with each click. Generic links
                    don’t mean a thing. Branded links help instil confidence in
                    your content.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-4">
              <div class="card">
                <div class="img-wrapper">
                  <img
                    class="card-img-top"
                    alt="brand recognition"
                    src="./assets/images/icon-detailed-records.svg"
                    svg-inline
                  />
                </div>

                <div class="card-body">
                  <h4>Detailed Records</h4>
                  <p class="card-text">
                    Gain insights into who is clicking your links. Knowing when
                    and where people engage with your content helps inform
                    better decisions.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-4">
              <div class="card">
                <div class="img-wrapper">
                  <img
                    class="card-img-top"
                    alt="brand recognition"
                    src="./assets/images/icon-fully-customizable.svg"
                    svg-inline
                  />
                </div>

                <div class="card-body">
                  <h4>Fully Customizable</h4>
                  <p class="card-text">
                    Improve brand awareness and content discoverability through
                    customizable links, supercharging audience engagement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="footer-banner">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12 text-center">
            <h4>Boost your links today</h4>
            <a href="" class="btn rounded bold">Get Started</a>
          </div>
        </div>
      </div>
    </section>
    <footer>
      <div class="container">
        <div class="row">
          <div class="col-4">
            <img
              src="./assets/images/logo.svg"
              svg-inline
              alt="logo"
              class="footer-logo"
            />
          </div>
          <div class="col-8">
            <div class="row">
              <div class="col-8">
                <div class="row">
                  <div class="col">
                    <h6>Features</h6>
                    <ul class="list-unstyled">
                      <li>
                        <a href="javscript:void(0)" class="footer-link"
                          >Link Sharing</a
                        >
                      </li>
                      <li>
                        <a href="javscript:void(0)" class="footer-link"
                          >Branded Links</a
                        >
                      </li>
                      <li>
                        <a href="javscript:void(0)" class="footer-link"
                          >Analytics</a
                        >
                      </li>
                    </ul>
                  </div>
                  <div class="col">
                    <h6>Resources</h6>
                    <ul class="list-unstyled">
                      <li>
                        <a href="javscript:void(0)" class="footer-link">Blog</a>
                      </li>
                      <li>
                        <a href="javscript:void(0)" class="footer-link"
                          >Developers</a
                        >
                      </li>
                      <li>
                        <a href="javscript:void(0)" class="footer-link"
                          >Support</a
                        >
                      </li>
                    </ul>
                  </div>
                  <div class="col">
                    <h6>Company</h6>
                    <ul class="list-unstyled">
                      <li>
                        <a href="javscript:void(0)" class="footer-link"
                          >About</a
                        >
                      </li>
                      <li>
                        <a href="javscript:void(0)" class="footer-link"
                          >Our Team</a
                        >
                      </li>
                      <li>
                        <a href="javscript:void(0)" class="footer-link"
                          >Careers</a
                        >
                      </li>
                      <li>
                        <a href="javscript:void(0)" class="footer-link"
                          >Contact</a
                        >
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-4">
                <ul class="list-unstyled social-links">
                  <li>
                    <a href="javascript:void(0)">
                      <img
                        src="./assets/images/icon-facebook.svg"
                        svg-inline
                        alt="facebook"
                      />
                    </a>
                  </li>

                  <li>
                    <a href="javascript:void(0)">
                      <img
                        src="./assets/images/icon-twitter.svg"
                        svg-inline
                        alt="twitter"
                      />
                    </a>
                  </li>

                  <li>
                    <a href="javascript:void(0)">
                      <img
                        src="./assets/images/icon-pinterest.svg"
                        svg-inline
                        alt="pinterest"
                      />
                    </a>
                  </li>

                  <li>
                    <a href="javascript:void(0)">
                      <img
                        src="./assets/images/icon-instagram.svg"
                        svg-inline
                        alt="instagram"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "app",
  components: {},
  data() {
    return {
      $_relinkUrl: "https://rel.ink/api/links/",
      $_relinkBase: "https://rel.ink/",
      toShorten: "",
      links: [],
      errorMessage: ""
    };
  },
  methods: {
    shortenUrl(url) {
      const errors = this.checkForErrors(url);
      if (errors) return;
      axios({
        url: "https://rel.ink/api/links/",
        method: "post",
        headers: {
          "Content-Type": "application/json"
        },
        data: {
          url: url
        }
      }).then(response => {
        const hashid = response.data.hashid;
        const originalUrl = response.data.url;
        const shortenedUrl = "https://rel.ink/" + hashid;
        this.addLink({
          hashid: hashid,
          originalUrl: originalUrl,
          shortenedUrl: shortenedUrl,
          copied: false
        });
      });
    },
    checkForErrors(url) {
      const isUrlValid = this.isUrl(url);
      const isUrlEmpty = url.length == 0;

      if (isUrlEmpty) {
        this.errorMessage = "Please add a link";
        return true;
      } else if (!isUrlValid) {
        this.errorMessage = "Please enter a valid URL. e.g http://example.com";
        return true;
      } else {
        this.errorMessage = "";
        return false;
      }
    },
    clearErrors() {
      this.errorMessage = "";
    },
    addLink(link) {
      const existingHash = this.links.filter(appLink => {
        return appLink.hashid == link.hashid;
      });
      if (existingHash.length == 0) {
        this.links.push(link);
        localStorage.appLinks = JSON.stringify(this.links);
        this.toShorten = "";
      } else {
        this.errorMessage = "Link already exists. Please enter new link";
        this.toShorten = "";
      }
    },
    isUrl(str) {
      const regexp = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
      if (regexp.test(str)) {
        return true;
      } else {
        return false;
      }
    },
    handleCopyStatus(hashid) {
      if (hashid.lenght !== 0) {
        document.getElementById(hashid).style.backgroundColor =
          "hsl(260, 8%, 14%)";
        document.getElementById(hashid).innerHTML = "Copied";
      }
    }
  },
  mounted() {
    if (localStorage.appLinks) {
      this.links = JSON.parse(localStorage.appLinks);
    }
  }
};
</script>

<style lang="scss">
@import "variables";
/* --- Media query mixins --- */
@mixin for-sm-only {
  @media (max-width: 420px) {
    @content;
  }
}
@mixin for-md-up {
  @media (min-width: 768px) {
    @content;
  }
}
#app {
  /* --- Header --- */
  nav {
    ul {
      > li {
        width: 100%;
        font-size: 1rem;
        font-weight: bold;
        a {
          color: $gray;
          &:hover {
            color: $very-dark-violet;
          }
          &.btn:hover {
            background-color: $very-dark-violet;
          }
        }
      }
      &.login-signup {
        min-width: 200px;
        display: flex;
        justify-content: space-around;
        .btn {
          color: #fff;
        }
      }
    }
    button.navbar-toggler {
      color: $gray;
      border: none;
    }
  }

  /* --- Landing Section --- */
  .landing-section {
    height: 60vh;
    display: flex;
    align-items: center;
    background-image: url("./assets/images/illustration-working.svg");
    background-repeat: no-repeat;
    background-position: 110% 50%;
    margin-bottom: 6.25rem;
    @include for-sm-only {
      background: none;
      margin-bottom: 10rem;
    }
    .col-sm-12.col-md-4 {
      @include for-sm-only {
        order: 1;
        height: 40vh;
        background-repeat: no-repeat;
        background-image: url("./assets/images/illustration-working.svg");
        background-size: cover;
        background-position: -50% 50%;
      }
    }
    .col-sm-12.col-md-6 {
      h1 {
        font-size: 4rem;
        color: $very-dark-violet;
        & + p {
          color: $gray;
          font-size: 1.375rem;
          margin-bottom: 2rem;
        }
      }
      @include for-sm-only {
        order: 2;
        padding: 3rem;
        h1 {
          font-size: 2.5rem;
          text-align: center;
          & + p {
            text-align: center;
            font-size: 1rem;
            & + a.btn {
              display: block;
              width: 50%;
              margin: 0 auto;
            }
          }
        }
      }
    }
  }

  /* --- URLS Section ---  */
  .urls-section {
    background-color: $light-gray;
    @include for-sm-only {
      .container {
        padding: 3rem;
      }
    }
    .row {
      @include for-sm-only {
        .col-sm-12.col-md-8 {
          margin-bottom: 1.5rem;
        }
      }

      > div {
        height: 60px;
        border-radius: 0.925rem;
      }
      &.shorten-it {
        padding: 50px 0px;
        background-color: $dark-violet;
        border-radius: 10px;
        position: relative;
        top: -80px;
        margin-bottom: -60px;
        background-image: url("./assets/images/bg-shorten-desktop.svg");
        background-size: cover;
        @include for-sm-only {
          top: -100px;
          padding: 20px;
          background-image: url("./assets/images/bg-shorten-mobile.svg");
          .col-sm-12.col-md-8 {
            &.error {
              margin-bottom: 40px;
            }
          }
        }
        input,
        a.btn {
          height: 100%;
          display: flex;
          align-items: center;
        }
        input.error {
          border: 2px solid $red;
          color: $red;
          &::placeholder {
            color: $red;
          }
          & + label {
            color: $red;
            font-weight: bold;
            font-style: italic;
            font-size: 1rem;
            padding-top: 0.8rem;
          }
          @include for-sm-only {
            & + label {
              padding: 0px;
              margin: 0px;
              margin-top: 5px;
              display: block;
            }
          }
        }
        a.btn {
          border-radius: 10px;
          justify-content: center;
        }
      }
      &.shortened {
        background-color: #fff;
        border: 1px sold $gray;
        margin-top: 1rem;
        margin-bottom: 1rem;
        &:last-child {
          margin-bottom: 0px !important;
        }
        .col-7 {
          color: $very-dark-violet;
        }
        .col-3 {
          color: $cyan;
        }
        button.btn {
          border-radius: 5px;
          font-weight: bold;
          .copied {
            background-color: $very-dark-violet;
          }
        }
      }
    }
  }

  /* --- Statistics Section --- */
  .statistics-section {
    background-color: $light-gray;
    height: 80vh;
    padding: 8rem 0px;
    .title-area {
      margin-bottom: 4rem;
    }
    h2 {
      font-weight: bold;
      text-align: center;
      color: $very-dark-violet;
      & + p {
        color: $gray;
        width: 50%;
        margin: 0 auto;
      }
    }
    .stat-cards-wrapper {
      position: relative;
      > hr {
        border: 4px solid #2acfcf;
        position: absolute;
        top: calc(50% - 2px);
        z-index: 1;
        left: 20%;
        width: 60%;
      }
    }
    .stat-cards {
      display: flex;
      height: 300px;

      > hr {
        position: absolute;
      }
      .col-4 {
        z-index: 2;
        height: 200px;
        &:nth-child(1) {
          align-self: flex-start;
        }
        &:nth-child(2) {
          align-self: center;
        }
        &:nth-child(3) {
          align-self: flex-end;
        }
        .card {
          border: none;
          padding: 0px 1rem 1rem;
          .img-wrapper {
            width: 80px;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 80px;
            border-radius: 60px;
            background: $dark-violet;
            position: relative;
            top: -40px;
            left: 40px;
            margin-bottom: -40px;
            > svg.card-img-top {
              width: 50%;
            }
          }
          h4 {
            font-weight: bold;
            color: $very-dark-violet;
            & + p {
              color: $gray;
              font-size: 1rem;
            }
          }
        }
      }
    }
  }

  /* --- Footer Boost Links banner --- */
  .footer-banner {
    padding: 4rem 0px;
    background-color: $dark-violet;
    background-image: url("./assets/images/bg-boost-desktop.svg");
    background-size: cover;
    h4 {
      font-weight: bold;
      font-size: 2rem;
      color: #fff;
      margin-bottom: 1.5rem;
      & + a.btn {
        height: 3rem;
        display: flex;
        width: 200px;
        margin: 0 auto;
        align-items: center;
        justify-content: center;
      }
    }
  }

  /* --- Footer --- */
  footer {
    padding: 5rem 0px;
    background-color: $very-dark-violet;
    color: #fff;
    svg.footer-logo > path {
      fill: #fff;
    }
    .col {
      h6 {
        font-weight: bold;
      }
      ul.list-unstyled {
        a.footer-link {
          color: $gray;
          font-size: 0.925rem;
          &:hover {
            color: $cyan;
            text-decoration: none;
          }
        }
      }
    }
    ul.list-unstyled {
      &.social-links {
        display: flex;
        justify-content: space-around;
        align-items: center;
        a:hover {
          svg > path {
            fill: $cyan;
          }
        }
      }
    }
  }
}
</style>
