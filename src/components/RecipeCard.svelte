<Card img={recipe.img} name={recipe.name}></Card>

<script>
  import Card from './Card.svelte'

  export let recipe = {}
</script>