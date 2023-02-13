<script>
  import fingerprint from "../assets/images/Intersezione 1.png";
  import line from "../assets/images/Sottrazione 1.png";
  import cloud from "../assets/images/noun-cloud-5485.png";
</script>

<div class="container pb-5">
  <div class="col-12">
    <div class="row d-flex w-100 justify-content-center flex-wrap flex-row">
      <div class="col-12 text-left mb-5 text-lg-center bigTitle">Fetures</div>
      <div class="row col-12">
        <div class="row d-flex w-100 align-items-start">
          <div class="col-12 col-md-4 my-5">
            <div class="row d-flex justify-content-center align-items-center">
              <div
                class="col-6 col-md-12 d-flex justify-content-center align-items-center"
              >
                <img
                  src={fingerprint}
                  style="height: 150px; max-width: 150px; object-fit: scale-down;"
                />
              </div>
              <div class="col-6 col-md-12">
                <div class="col-12 title my-4">Accesso Touch ID</div>
                <div class="col-12 content">
                  Solo l’utente può avere accesso all’app, perché soltanto la
                  sua impronta digitale può sbloccare, criptare e decriptare le
                  informazioni personali contenute.
                </div>
              </div>
            </div>
          </div>

          <div class="col-12 col-md-4 my-5">
            <div class="row d-flex justify-content-center align-items-center">
              <div
                class="col-6 col-md-12 d-flex justify-content-center align-items-center"
              >
                <img
                  src={line}
                  style="height: 150px; max-width: 150px; object-fit: scale-down;"
                />
              </div>
              <div class="col-6 col-md-12">
                <div class="col-12 title  my-4">Cifratura a 256-bit AES</div>
                <div class="col-12 content">
                  DBlock protegge i dati personali dei propri utenti con
                  l’algoritmo di crittografia con 256-bit AES, AES a 256 bit,
                  riconosciuto come il migliore sistema di cifratura per la
                  sicurezza.
                </div>
              </div>
            </div>
          </div>

          <div class="col-12 col-md-4 my-5">
            <div class="row d-flex justify-content-center align-items-center">
              <div
                class="col-6 col-md-12 d-flex justify-content-center align-items-center"
              >
                <img
                  src={cloud}
                  style="height: 150px; max-width: 150px; object-fit: scale-down;"
                />
              </div>
              <div class="col-6 col-md-12">
                <div class="col-12 title  my-4">Salvataggio in cloud</div>
                <div class="col-12 content">
                  In questo modo tutti i dati confidenziali saranno sempre al
                  sicuro e viene garantita la massima riservatezza dei
                  documenti.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<style lang="scss">
  @import "../node_modules/rfs/scss";
  .padding-side-0 {
    padding-left: 0 !important;
    padding-right: 0 !important;
  }

  .bigTitle {
    font-family: titillium;
    font-weight: 400;
    @include font-size(5rem);
    color: white !important;
  }

  .title {
    font-family: titillium;
    font-weight: 400;
    @include font-size(1.75rem);
    color: white !important;
  }

  .content {
    font-family: titillium;
    font-weight: 400;
    @include font-size(1.25rem);
    color: white !important;
    opacity: 0.7;
  }

  .featureBox {
    min-height: 100%;
    max-height: 600px !important;
  }
</style>
