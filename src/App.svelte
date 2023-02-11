<script>
  import Contact from "./components/Contact.svelte";
  import CopyRight from "./components/CopyRight.svelte";
  import Feature from "./components/Feature.svelte";
  import FeatureCollection from "./components/FeatureCollection.svelte";
  import Navigation from "./components/Navigation.svelte";
</script>

<div class="container" style="border: 1px solid red; height: 100vh;">
  <div class="row">
    <div
      class="col-12 d-flex flex-column justify-content-center align-items-center"
    >
      <div class="row w-100">
        <Navigation />
      </div>
      <div class="row w-100">
        <h1>Fingerprint</h1>
      </div>
      <div class="row w-100">
        <Feature num={1} />
      </div>
      <div class="row w-100">
        <Feature num={2} />
      </div>
      <div class="row w-100">
        <Feature num={3} />
      </div>
      <div class="row w-100">
        <FeatureCollection />
      </div>
      <div class="row w-100">
        <Contact />
      </div>
      <div class="row w-100">
        <CopyRight />
      </div>
    </div>
  </div>
</div>

<style>
  * {
    padding: 0;
    box-sizing: border-box;
  }
  .row {
    margin: 0 !important;
  }
</style>
