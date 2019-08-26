<script>
  export let segment;

  let open = false;
</script>

<style>
.inner {
  width: 24em;
  flex-shrink: 0;
}
</style>

<div id="sidebar">
  <div class="inner">
    <section id="search" class="bg-gray-200">
      <form><input autocomplete="off" type="text" id="query" placeholder="Search" class="">
        <ul class="results"></ul>
      </form>
    </section>
    <nav id="menu">
      <header class="major">
        <h2>Menu</h2>
      </header>
      <ul>
        <li><a href="/">Homepage</a></li>
        <li><span class="opener active">Recipes</span>
          <ul>
            <li><a href="/recipes">All Recipes</a></li>
            <li><a href="/tags/baking/">Baking</a></li>
            <li><a href="/tags/base/">base</a></li>
            <li><a href="/tags/biscuits/">Biscuits</a></li>
            <li><a href="/tags/curry/">curry</a></li>
            <li><a href="/tags/gluten-free/">Gluten-Free</a></li>
            <li><a href="/tags/healthy/">Healthy</a></li>
            <li><a href="/tags/indian/">indian</a></li>
            <li><a href="/tags/italian/">Italian</a></li>
            <li><a href="/tags/simple/">Simple</a></li>
            <li><a href="/tags/slow-cooker/">Slow Cooker</a></li>
            <li><a href="/tags/soup/">Soup</a></li>
            <li><a href="/tags/spices/">spices</a></li>
            <li><a href="/tags/thai/">Thai</a></li>
            <li><a href="/tags/vegan/">Vegan</a></li>
            <li><a href="/tags/vegetarian/">Vegetarian</a></li>
          </ul>
        </li>
      </ul>
    </nav>
    <section class="adverts">
      <header class="major">
        <h2>Sponsored Content</h2>
      </header>
      <div class="mini-posts">
        <article>
          
        </article>
      </div>
    </section>
    <section>
      <header class="major">
        <h2>FAQ</h2>
      </header>
      <p><b>Hey, You stole this recipe from someone!</b><br>Yeah probably, I give credit at the bottom of every recipe,
        sometimes I make small changes too.<br><br><b>Is that a photo of you?</b><br>No sadly not, it is a
        photo from the talented photographer Aaron Thomas. Check out his other
        photos on <a href="https://unsplash.com/@aaronphs">Unsplash</a></p>
    </section>
    <footer id="footer">
      <p class="copyright">© Tom's Cooking. All rights reserved.<br>Demo Images:
        <a href="https://unsplash.com">Unsplash</a>. Design:
        <a href="https://html5up.net">HTML5 UP</a>.</p>
    </footer>
  </div><a href="#sidebar" class="toggle">Toggle</a>
</div>