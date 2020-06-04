<style>
  .card__image {
    max-width: 100%;
    margin: 0;
    height: 100%;
    object-fit: cover;
    display: block;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }

  .card__cctv {
    padding: 0;
    max-width: 400px;
    min-width: 200px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    max-height: 300px;
    min-height: 200px;
    margin: 0;
    width: 100%;
    height: 100%;
  }
</style>

<script>
  const path = "https://cctv.bote.gov.taipei:8501/MJPEG/";
  export let camera;
  let src = "./img/no-tv.png";

  function photoLoaded() {
    src = path + camera.id;
  }
</script>

<div class="card card__cctv">
  <small class="card__header">{camera.location}</small>
  <img {src} alt="CCTV camera at " class="card__image" on:load={photoLoaded} />
</div>
