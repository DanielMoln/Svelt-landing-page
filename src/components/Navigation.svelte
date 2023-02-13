<script>
  import logo from "../assets/images/dblock.png";
</script>

<nav
  class="navbar navbar-expand-md navbar-dark wrapper d-flex w-100"
  style="padding-left: 0 !important; padding-right: 0 !important;"
>
  <div class="col-md-12 background" />
  <div class="container">
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-4 d-flex ">
          <a
            class="navbar-brand d-flex align-items-center justify-content-end justify-content-md-start col-8 padding-side-0"
            href="#"
          >
            <img
              src={logo}
              alt="Logo"
              class="d-inline-block"
              style="vertical-align: middle; width: 41px; height: 41px"
            />
            <span class="d-inline-block align-text-center">DBLOCK</span>
          </a>
          <div class="d-flex justify-content-end col-4 padding-side-0">
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon" />
            </button>
          </div>
        </div>
        <div
          class="col-12 col-md-8 row-cols-md collapse navbar-collapse align-items-center d-md-flex "
          id="navbarNav"
        >
          <div
            class="col-12 col-md-6 d-flex justify-content-center align-items-center align-text-center"
          >
            <ul
              class="d-md-flex column row-cols-md justify-content-center align-items-center text-center w-100"
              style="text-align: center;"
            >
              <p class="nav-link"><a href="#">HOME</a></p>
              <p class="nav-link"><a href="#">FEATURES</a></p>
              <p class="nav-link"><a href="#">CHI SIAMO</a></p>
            </ul>
          </div>
          <div
            class="col-12 col-md-6 d-flex align-items-center justify-content-center justify-content-md-end padding-side-0"
          >
            <button class="contactBtn">CONTATTI</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</nav>

<!--





-->
<style>
  .padding-side-0 {
    padding-left: 0 !important;
    padding-right: 0 !important;
  }

  .background {
    position: absolute;
    background-color: black;
    opacity: 0.5;

    width: 100%;
    height: 100%;
  }

  @media (max-width: 767.98px) {
    .background {
      background-color: #00131e;
      opacity: 1;
    }
  }

  ul {
    margin: 0 !important;
    padding: 0 !important;
  }
  .nav-link {
    margin: 0 10px !important;
    padding: 0 !important;

    font-family: titillium;
    font-weight: bold;
    font-size: 14px;
    color: white !important;

    white-space: nowrap;
  }
  a {
    color: #fff !important;
    font-weight: 900;
  }
</style>
