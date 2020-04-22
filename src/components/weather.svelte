<script>
  import { zhongShanWeather } from "../utils/weather.js";

  const zhongShan = zhongShanWeather;
</script>

<style>

</style>

<h2>Weather</h2>
{#await zhongShan}
  <!-- getWeather is pending -->
{:then data}
  <h3>{data.name}</h3>
  {#each data.weather as w}
    <p>{w.time} | {w.temp}&deg; | {w.rain}%</p>
  {/each}
{:catch error}
  <!-- getWeather was rejected -->
{/await}
