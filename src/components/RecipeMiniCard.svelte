<MiniCard img={recipe.img} name={recipe.name}></MiniCard>

<script>
  import MiniCard from './MiniCard.svelte'

  export let recipe = {}
</script>