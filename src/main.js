import "./app.scss";
import App from "./App.svelte";
import "./main.css";
import "./assets/fonts/titillium/TitilliumFont.css";

const app = new App({
  target: document.getElementById("app"),
});

export default app;
