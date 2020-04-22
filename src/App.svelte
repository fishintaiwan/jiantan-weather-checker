<script>
  import Weather from "./components/weather.svelte";
  import CCTV from "./components/cctv.svelte";
</script>

<style>
  .text-link {
    font-weight: bold;
    text-decoration: underline;
    transition: all 0.3s;
    color: var(--teal-green);
  }

  .text-link:hover {
    color: var(--pale-grey);
    text-decoration: none;
  }

  .footer {
    min-height: 25vh;
    background: var(--bg-secondary);
    margin-top: 2em;
    position: relative;
    color: var(--primary-text);
  }
</style>

<main>
  <div class="container">
    <h1>Jiantan Checker</h1>
    <Weather />
    <CCTV />
  </div>
</main>

<footer class="footer">
  <div class="container">
    <p>
      Made by
      <a href="https://www.fershad.com" class="text-link">Fershad Irani</a>
    </p>
    <p>
      If you find this handy, please consider supporting my work.
      <a href="https://www.buymeacoffee.com/fishintaiwan" class="text-link">
        Buy me a coffee
      </a>
    </p>
  </div>
</footer>
