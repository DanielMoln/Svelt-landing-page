<script>
  import Contact from "./components/Contact.svelte";
  import CopyRight from "./components/CopyRight.svelte";
  import Feature from "./components/Feature.svelte";
  import FeatureCollection from "./components/FeatureCollection.svelte";
  import Fingerprint from "./components/Fingerprint.svelte";
  import Navigation from "./components/Navigation.svelte";
</script>

<Navigation />
<Fingerprint />
<Feature num={1} />
<Feature num={2} />
<Feature num={3} />
<FeatureCollection />
<Contact />
<CopyRight />

<style>
  * {
    padding: 0;
    box-sizing: border-box;
  }
  .row {
    margin: 0 !important;
  }
  .padding-side-0 {
    padding-left: 0 !important;
    padding-right: 0 !important;
  }
</style>
