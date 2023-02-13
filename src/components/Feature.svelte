<script>
  export let img;
  export let isRight;
  export let Title;
  export let Content;
</script>

<div class="container mb-5">
  <div class="row">
    <div
      class={"d-flex w-100 flex-row" +
        (isRight ? "" : "-reverse") +
        " flex-wrap"}
    >
      <div class="col-12 col-lg-6 d-flex">
        <img
          class="w-100 img-fluid"
          src={img}
          alt="Image"
          style="border-radius: 20px;"
        />
      </div>

      <div class="col-12 col-lg-6 d-flex">
        <div class="row d-flex justify-content-start align-items-center">
          <div class="container">
            <div class="col-12 mb-3">
              <span class="title">{Title}</span>
            </div>
            <div class="col-12">
              <span class="content">{Content}</span>
            </div>
          </div>
        </div>
      </div>
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
    @include font-size(1.25rem);
    color: white !important;
  }
</style>
