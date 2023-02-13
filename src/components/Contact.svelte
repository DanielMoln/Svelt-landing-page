<script>
</script>

<div class="container my-5">
  <div class="row">
    <div class="col-12 text-center bigTitle">Vuoi saperne di più?</div>
    <div class="col-12">
      <div
        class="container mt-4 border border-white"
        style="border-radius: 26px; border-width: 2px !important;"
      >
        <div class="container">
          <div class="row">
            <div
              class="col-12 text-center title mt-5 mb-5"
              style="padding-left: 0; padding-right: 0;"
            >
              Qua andrebbe specificato il motivo per cui vogliamo che venga
              lasciato il contatto.Che tipo di dati vogliamo raccogliere? A che
              scopo?
            </div>
            <div class="col-12 mb-4">
              <input placeholder="Name*" class="w-100" />
            </div>
            <div class="col-12 mb-4">
              <input placeholder="Cognome*" class="w-100" />
            </div>
            <div class="col-12 mb-4">
              <input placeholder="Indirizzo e-mail*" class="w-100" />
            </div>
            <div class="col-12 mb-4">
              <textarea
                placeholder="Il tuo messaggio..."
                class="w-100 inputInput"
              />
            </div>
            <div class="col-12 mb-4">
              <button class="msgBtn">Invia messaggio</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<style lang="scss">
  @import "../node_modules/rfs/scss";

  .msgBtn {
    outline: none;
    border: none;

    font-family: titillium;
    font-weight: bold;
    font-size: 14px;

    background-color: white;
    color: #0064a1;

    width: 100%;
    height: 63px;
    border-radius: 5px;
  }

  @media (min-width: 768px) {
    /* CUSTOM WIDTHS */
    .msgBtn {
      width: 182px;
    }
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

  input,
  textarea {
    background-color: transparent;
    border: none;
    outline: none;

    font-family: titillium;
    font-weight: 400;
    font-size: 20px;

    border-bottom: 2px solid white;
    border-color: rgba($color: white, $alpha: 0.7);

    color: white;
    text-indent: 1%;
  }

  input::placeholder,
  textarea::placeholder {
    font-family: titillium;
    font-weight: 400;
    font-size: 20px;
    color: white !important;
  }
</style>
