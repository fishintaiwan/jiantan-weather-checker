<style lang="scss">
  @import "../scss/_loader.scss";

  .cctv__grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-row-gap: 2em;
    grid-column-gap: 1em;
  }
</style>

<script>
  let urls = [
    { location: "Bailing Bridge 承德中正", id: "042" },
    { location: "Zhongshan Rd 中山北路-通河街口", id: "232" },
    { location: "Jiantan-Chengde Rd 劍潭路-承德路口", id: "251" },
    { location: "Jiantan-Zhonshan Rd 劍潭路-中山北路口", id: "252" }
  ];
  // // https://gist.github.com/sobstel/fb854a6e7152577b28f2647d157829ae
  // const API_URL = "https://cctv.bote.gov.taipei:8501/MJPEG/";
  // const TIMEOUT = 10; // seconds

  // async function getImage(path) {
  //   /* global fetch */
  //   const req = fetch(API_URL + path);

  //   const timeout = new Promise((resolve, reject) => {
  //     return setTimeout(
  //       () => reject(new Error("request timeout")),
  //       TIMEOUT * 1000
  //     );
  //   });

  //   return Promise.race([req, timeout]).then(response => {
  //     return response;
  //   });
  // }

  import Image from "./image.svelte";
</script>

<h2>CCTV</h2>
<div class="cctv__grid">
  {#each urls as camera}
    <Image {camera} />
    <!-- <div class="card card__cctv">
      <small class="card__header">{camera.location}</small>
      {#await getImage(camera.id)}
        <span class="loader" />
      {:then data}
        <img
          src={data.url}
          alt="CCTV camera at {camera.location}"
          class="card__image" />
      {:catch error}
        <img
          src="./img/no-tv.png"
          class="card__image .card__image-404"
          alt="Cannot load CCTV image"
          title="Image by Ouch.pics https://icons8.com" />
      {/await}
    </div> -->
  {/each}
</div>
