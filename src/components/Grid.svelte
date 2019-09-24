<div class="grid">
  <slot></slot>
</div>

<style>

.grid {
  display: grid;
  grid-gap: 5px;
  grid-template-columns: repeat(auto-fill, minmax(300px, auto));
  align-items: center;
  justify-items: center;
}

</style>


<script>
  

</script>