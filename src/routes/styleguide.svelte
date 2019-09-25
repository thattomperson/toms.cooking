

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
  <div class="qa qa-recipe-mini-card">
  <RecipeMiniCard recipe={recipe}></RecipeMiniCard>
  </div>
  <div class="qa qa-recipe-card">
  <RecipeCard recipe={recipe}></RecipeCard>
  </div>
</Grid>