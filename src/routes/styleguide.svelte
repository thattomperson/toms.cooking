

<script>
  import RecipeMiniCard from '../components/RecipeMiniCard.svelte';
  import Qa from '../components/Qa.svelte';
  import RecipeCard from '../components/RecipeCard.svelte';
  import Grid from '../components/Grid.svelte';


  let recipe = {
    // img: '/pasta.jpg',
    name: 'Zucchini, Garlic, Chilli, & Lemon Spaghetti With Parmesan',
  }

</script>



<Grid>
  <Qa name="RecipeMiniCard">
    <RecipeMiniCard recipe={recipe}></RecipeMiniCard>
  </Qa>
  <Qa name="RecipeCard">
    <RecipeCard recipe={recipe}></RecipeCard>
  </Qa>
</Grid>