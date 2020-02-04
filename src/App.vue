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
              <a class="nav-link btn rounded bold" href="javascript:void(0)"
                >Sign Up</a
              >
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
              v-model="toShorten"
              class="form-control"
              type="text"
              placeholder="Shorten a link here..."
            />
          </div>
          <div class="col-2">
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
          <div class="col-2 ">
            <button
              class="btn btn-block"
              v-clipboard:copy="link.shortenedUrl"
              v-clipboard:success="handleCopyStatus(true)"
              v-clipboard:error="handleCopyStatus(false)"
            >
              Copy
            </button>
          </div>
        </div>
      </div>
    </section>
    <section class="statistics-section">
      <div class="container">
        <div class="title-area">
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
                <img class="card-img-top" alt="brand recognition" />
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
                <img class="card-img-top" alt="brand recognition" />
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
                <img class="card-img-top" alt="brand recognition" />
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
            <img src="./assets/images/logo.svg" alt="logo" />
          </div>
          <div class="col-8">
            <div class="row">
              <div class="col-8">
                <div class="row">
                  <div class="col">
                    <h6>Features</h6>
                    <ul class="list-unstyled">
                      <li>Link Sharing</li>
                      <li>Branded Links</li>
                      <li>Analytics</li>
                    </ul>
                  </div>
                  <div class="col">
                    <h6>Resources</h6>
                    <ul class="list-unstyled">
                      <li>Blog</li>
                      <li>Developers</li>
                      <li>Support</li>
                    </ul>
                  </div>
                  <div class="col">
                    <h6>Company</h6>
                    <ul class="list-unstyled">
                      <li>About</li>
                      <li>Our Team</li>
                      <li>Careers</li>
                      <li>Contact</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-4">
                <ul class="list-inline">
                  <li>facebook</li>
                  <li>twitter</li>
                  <li>pinterest</li>
                  <li>instagram</li>
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
      links: []
    };
  },
  methods: {
    shortenUrl(url) {
      if (!this.isUrl(url)) return;
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
          shortenedUrl: shortenedUrl
        });
      });
    },
    addLink(link) {
      const existingHash = this.links.filter(appLink => {
        return appLink.hashid == link.hashid;
      });
      if (existingHash.length == 0) {
        this.links.push(link);
        localStorage.appLinks = JSON.stringify(this.links);
        window.console.log(localStorage.appLinks);
        this.toShorten = "";
      } else {
        window.console.log("link already existsts. Please enter new link");
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
    handleCopyStatus(status) {
      window.console.log(status);
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
      margin-bottom: -60px;
    }
    .row.shortened {
      background-color: #fff;
      border: 1px sold $gray;
      margin-top: 1rem;
      margin-bottom: 1rem;
      &:last-child {
        margin-bottom: 0px !important;
      }
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
  .statistics-section {
    background-color: $light-gray;
    height: 80vh;
    padding: 8rem 0px;
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
      }
      .card {
      }
    }
  }
  .footer-banner {
    padding: 4rem 0px;
  }
  footer {
    padding: 5rem 0px;
    background-color: $very-dark-violet;
    color: #fff;
  }
}
</style>
