<script>
  let urls = [
    { location: "Bailing Bridge 承德中正", id: "042" },
    { location: "Zhongshan Rd 中山北路-通河街口", id: "232" },
    { location: "Jiantan-Chengde Rd 劍潭路-承德路口", id: "251" },
    { location: "Jiantan-Zhonshan Rd 劍潭路-中山北路口", id: "252" }
  ];
  // https://gist.github.com/sobstel/fb854a6e7152577b28f2647d157829ae
  const API_URL = "https://cctv2.bote.gov.taipei:8502/MJPEG/";
  const TIMEOUT = 10; // seconds

  async function getImage(path) {
    /* global fetch */
    const req = fetch(API_URL + path);

    const timeout = new Promise((resolve, reject) => {
      return setTimeout(
        () => reject(new Error("request timeout")),
        TIMEOUT * 1000
      );
    });

    return Promise.race([req, timeout]).then(response => {
      return response;
    });
  }
</script>

<style lang="scss">
  @import "../scss/_loader.scss";
</style>

<h2>CCTV</h2>
{#each urls as camera}
  <div>
    <small>{camera.location}</small>
    {#await getImage(camera.id)}
      <span class="loader" />
    {:then data}
      <img src={data.url} alt="CCTV camera at {camera.location}" />
    {:catch error}
      {error} | Opps........
    {/await}
  </div>
{/each}
