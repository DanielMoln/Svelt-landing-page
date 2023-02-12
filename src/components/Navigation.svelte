<script>
  import logo from "../assets/images/dblock.png";
</script>

<nav
  class="nav navbar wrapper d-flex justify-content-between align-items-center"
>
  <div class="container d-flex justify-content-between align-items-center">
    <a class="navbar-brand d-flex align-items-center" href="#">
      <img
        src={logo}
        alt="Logo"
        class="d-inline-block"
        style="vertical-align: middle; width: 41px; height: 41px"
      />
      <span class="d-inline-block align-text-center">DBLOCK</span>
    </a>

    <ul class="d-flex flex-row align-items-center justify-content-between">
      <p class="nav-link"><a href="#">HOME</a></p>
      <p class="nav-link"><a href="#">FEATURES</a></p>
      <p class="nav-link"><a href="#">CHI SIAMO</a></p>
    </ul>

    <button class="contactBtn">CONTATTI</button>
  </div>
</nav>

<style>
  .wrapper {
    background-image: url("../assets/images/header_bg.png");
    height: 80px !important;
  }
  ul {
    margin: 0 !important;
    padding: 0 !important;
  }
  .nav-link {
    margin: 0 10px !important;
    padding: 0 !important;
  }

  a {
    font-family: titillium;
    font-weight: bold;
    font-size: 14px;
    color: white !important;

    white-space: nowrap;
  }
</style>
