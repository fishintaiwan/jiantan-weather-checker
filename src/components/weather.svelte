<script>
  import { zhongShanWeather } from "../utils/weather.js";

  const zhongShan = zhongShanWeather;
</script>

<style lang="scss">
  @import "../scss/_weather-icons.scss";
  .weather__holder {
    min-width: 100%;
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
  }
  .card__weather {
    --width-card: 120px;
    width: var(--width-card);
    height: var(--width-card);
    display: inline-flex;
    align-items: center;
    flex: 0 0 auto;
  }

  .card__weather:first-of-type {
    margin-left: 0;
  }

  .icon {
    display: inline-block;
  }
  .card__content {
    display: flex;
    flex-direction: column;
    margin: auto;
  }

  .card__content-text {
    margin-bottom: 0.5rem;
    margin-top: 0.5rem;
  }
</style>

<h2>Weather</h2>
{#await zhongShan}
  <!-- getWeather is pending -->
{:then data}
  <div class="weather__holder">
    {#each data.weather as w}
      <div class="card card__weather">
        <div class="card__header">
          <small class="card__header-content">{w.time}</small>
        </div>
        <div class="card__content">
          <p class="card__content-text">
            <span class="gg-thermostat icon" />
            {w.temp}&deg;
          </p>
          <p class="card__content-text">
            <span class="gg-drop icon" />
            {w.rain}%
          </p>
        </div>
      </div>
    {/each}
  </div>
{:catch error}
  <!-- getWeather was rejected -->
{/await}
