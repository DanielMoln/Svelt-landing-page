<script>
  import dilium_logo from "../assets/images/Raggruppa 69.png";
  import dots from "../assets/images/dots.png";
  import up from "../assets/images/Raggruppa 36.png";
</script>

<div class="container pb-5">
  <div class="row">
    <div
      class="col-12 col-md-3 d-flex justify-content-start align-items-center mt-5"
    >
      <img src={dilium_logo} />
    </div>
    <div class="col-12 col-md-3 container mt-5">
      <div class="row align-items-center">
        <div class="col-12 d-flex justify-content-baseline a title mb-3">
          Indirizzo
        </div>
        <div class="col-12 d-flex justify-content-baseline content">
          dilium Srl<br />Via Selvanesco 75<br />20141 - Milano<br />Italia
        </div>
      </div>
    </div>
    <div class="col-12 col-md-3 container mt-5">
      <div class="row align-items-center">
        <div class="col-12 d-flex justify-content-baseline a title mb-3">
          Info aziendali
        </div>
        <div class="col-12 d-flex justify-content-baseline content">
          P.IVA IT09868270969<br />SDI: M5UXCR1<br />REA: MI - 2118419
        </div>
      </div>
    </div>
    <div class="col-12 col-md-3 mt-5">
      <div class="row align-items-center">
        <div class="col-12 d-flex justify-content-baseline a title mb-3">
          PEC
        </div>
        <div class="col-12 d-flex justify-content-baseline content">
          Siamo sempre disponibili a fornire le informazioni di cui hai bisogno.
        </div>
        <div class="col-12 d-flex justify-content-baseline email mt-2">
          dilium@legalmail.it
        </div>
      </div>
    </div>
  </div>
  <div class="row mt-5">
    <div
      class="col-12 col-md-1 order-md-3 d-flex justify-content-center justify-content-md-start mb-3"
    >
      <img class="align-self-center" src={up} />
    </div>
    <div
      class="col-12 col-md-6 order-md-1 content  justify-content-center justify-content-md-end mb-3"
    >
      ©2023 dilium | All Rights Reserved. Informativa privacy e Cookie Policy
    </div>
    <div
      class="col-12 col-md-4 order-md-2 d-flex justify-content-center justify-content-md-end mb-3"
    >
      <img
        class="align-self-center"
        src={dots}
        style="width: 128px; height: 16px;"
      />
    </div>
  </div>
</div>

<style lang="scss">
  @import "../node_modules/rfs/scss";

  .title {
    font-family: titillium;
    font-weight: 400;
    @include font-size(1.625rem);
    color: white !important;
  }

  .content {
    font-family: titillium;
    font-weight: 400;
    @include font-size(1rem);
    color: #acacac !important;
  }

  .email {
    font-family: titillium;
    font-weight: 400;
    @include font-size(1rem);
    color: #0064a1 !important;
  }
</style>
