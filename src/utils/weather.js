const getWeather = (async () => {
    const request = await fetch(
      "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-061?Authorization=rdec-key-123-45678-011121314"
    );

    return await request.json();
  })();

  function formatTime(d) {
    let format = new Intl.DateTimeFormat('en-US', {month: "numeric", day: "numeric", hour: "numeric", minute: "numeric", hour12: false, timeZone: 'Asia/Taipei'})
    const [{ value: mo },,{ value: da },,{ value: ho },,{ value: mi }] = format.formatToParts(d) 

    return `${da}/${mo} ${ho}:${mi}`
  }

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
            { time: formatTime(tempDate), temp: d.elementValue[0].value, rain: percip }
          ];
        }
      }
    });
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

  const weather = zhongShanWeather;
  export { weather as zhongShanWeather};