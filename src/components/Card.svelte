<div class="card">
  <img class="card-image" src="{img}" alt="{name}">
  <div class="card-content">
    <h1 class="card-heading">{name}</h1>
  </div>
</div>


<style>
  .card {
    border-radius: 8px;
    width: 295px;
    overflow: hidden;
    background-color: white;

    box-shadow: rgba(13, 51, 32, .1) 0px 6px 20px;
  }

  .card-content {
    padding: 5px;
  }

  .card-heading {
    font-size: 18px;
  }

  .card-image {
    height: 353px;
    width: 100%;
    object-fit: cover;
  }
</style>


<script>
  export let img = "https://via.placeholder.com/295x353"
  export let name = ""
</script>