<script>
  import mutogatos from "./assets/images/pexels-christin.png";
  import meglepodott from "./assets/images/Gruppo di masch.png";
  import telefon from "./assets/images/Immagine 8.png";

  import Contact from "./components/Contact.svelte";
  import CopyRight from "./components/CopyRight.svelte";
  import Fingerprint from "./components/Fingerprint.svelte";
  import Navigation from "./components/Navigation.svelte";
  import Feature from "./components/Feature.svelte";
  import FeatureCollection from "./components/FeatureCollection.svelte";
</script>

<Navigation />
<Fingerprint />
<div class="col-12 background-blue">
  <Feature
    isRight={true}
    img={mutogatos}
    Title="L’app a portata di Touch ID"
    Content="DBlock è progettata e sviluppata per proteggere dati e documenti importanti di privati e dipendenti aziendali. L’app è un deposito inviolabile di tutti i propri documenti digitali riservati (note, video, immagini)."
  />
  <Feature
    isRight={false}
    img={meglepodott}
    Title="Facile da impostare e da utilizzare"
    Content="DBLock permette di trovare i documenti contenuti in modo semplice e immediato, senza alcuna perdita di tempo da parte dell’utente. Non sarà più necessario ricordare o trascrivere in luoghi non sicuri username, password, codici pin, dettagli delle proprie carte di credito, poiché tutte le informazioni importanti e riservate potranno essere salvate qui."
  />
  <Feature
    isRight={true}
    img={telefon}
    Title="Immediata e intuitiva"
    Content="DBlock non richiede alcuna password per fare in modo che l’applicazione funzioni, poiché è sufficiente usare il proprio Touch ID per sbloccarla. Con questo semplice gesto è possibile criptare tutte le proprie informazioni confidenziali, proteggerle e renderle sicure da attacchi hacker."
  />
</div>
<Contact />
<CopyRight />

<style>
  .background-blue {
    background-color: #00131e;
  }
</style>
