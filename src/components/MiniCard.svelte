<div class="card">
  <img class="card-image" src="{img}" alt="{name}">
  <div class="card-content">
    <h2 class="card-heading">{name}</h2>
    <GhostButton href="{href}">Cook</GhostButton>    
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
    padding: 10px;
  }

  .card-heading {
    font-size: 18px;
  }

  .card-image {
    height: 130px;
    width: 100%;

    object-fit: cover;
  }
</style>


<script>
  import GhostButton from './GhostButton.svelte'


  export let img = "https://via.placeholder.com/295x130"
  export let name = ""
  export let href = ""
</script>