

<script>
  import RecipeMiniCard from '../components/RecipeMiniCard.svelte';
  import RecipeCard from '../components/RecipeCard.svelte';
  import Grid from '../components/Grid.svelte';


  let recipe = {
    // img: '/pasta.jpg',
    name: 'Zucchini, Garlic, Chilli, & Lemon Spaghetti With Parmesan',
  }

</script>



<Grid>
  <RecipeMiniCard recipe={recipe}></RecipeMiniCard>
  <RecipeCard recipe={recipe}></RecipeCard>
</Grid>