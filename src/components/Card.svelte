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
  }

  .card-content {
    
  }

  .card-image {
    height: 130px;
    width: 100%;

    object-fit: cover;
  }
</style>


<script>
  export let img = ""
  export let name = ""

</script>