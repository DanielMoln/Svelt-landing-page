<script>
  import fingerprint from "../assets/images/Intersezione 1.png";
  import appleBtn from "../assets/images/App-Store_ita_b.png";
</script>

<div class="fingerground" style="height: 808px;">
  <div class="container d-flex h-100 align-center">
    <div class="col-12 col-xl-8 d-flex align-items-start">
      <div
        class="row justify-content-center align-self-top align-self-xl-center"
      >
        <h1 class="col-12 text-center text-xl-left fingerText mt-5 mt-xl-0">
          Gestisci e proteggi i tuoi documenti confidenziali
        </h1>
        <div
          class="col-12 mt-4 ml-xl-4 row d-flex justify-content-center justify-content-xl-start"
        >
          <div
            class="col-12 col-xl-auto mr-0 mr-xl-3 d-flex justify-content-center padding-side-0"
          >
            <button class="scopriBtn">SCOPRI DI PIù</button>
          </div>
          <div
            class="col-12 col-xl-auto mt-4 mt-xl-0 d-flex justify-content-center padding-side-0"
          >
            <img src={appleBtn} alt="Apple" />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<style lang="scss">
  @import "../node_modules/rfs/scss";

  .fingerground {
    background-image: url("../assets/images/Esclusione 1.png");
  }

  .fingerText {
    font-family: "titillium";
    @include font-size(6.25rem);
    font-weight: 400;
    font-style: normal;
    color: #ffffff;
  }

  .scopriBtn {
    font-family: titillium;
    font-weight: bold;
    font-size: 14px;
    color: white;

    outline: none;
    border: none;

    background-color: #066ab1;

    width: 122px;
    height: 41px;
    border-radius: 5px;
  }
  .padding-side-0 {
    padding-left: 0 !important;
    padding-right: 0 !important;
  }
</style>
