<script>
  const getWeather = (async () => {
    const request = await fetch(
      "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-061?Authorization=rdec-key-123-45678-011121314"
    );

    return await request.json();
  })();

  const getTemps = (temp, rain) => {
    let todayDate = new Date();
    let tempArray = [];

    temp.forEach(d => {
      let tempDate = new Date(d.dataTime);
      let percip;

      if (tempArray.length < 3) {
        if (tempDate > todayDate) {
          rain.forEach(r => {
            let start = new Date(r.startTime);
            let end = new Date(r.endTime);

            if (tempDate >= start && tempDate <= end) {
              percip = r.elementValue[0].value;
            }
          });
          tempArray = [
            ...tempArray,
            { time: tempDate, temp: d.elementValue[0].value, rain: percip }
          ];
        }
      }
    });

    console.log(tempArray);
    return tempArray;
  };

  const zhongShanWeather = (async () => {
    let data = await getWeather;
    let weather = await getTemps(
      data.records.locations[0].location[4].weatherElement[3].time,
      data.records.locations[0].location[4].weatherElement[7].time
    );
    let zhongShan = {
      name: data.records.locations[0].location[4].locationName,
      weather: weather
    };

    return await zhongShan;
  })();

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
