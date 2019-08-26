<script>
	import Nav from '../components/Nav.svelte';

	export let segment;
</script>

<style>
.wrapper {
  flex-direction: row-reverse;
  min-height: 100vh;
}

.header {
  /* border-bottom: solid 5px #f56a6a; */
  padding: 6em 0 1em;
  position: relative;
  justify-content: space-between;
}
</style>

<div class="wrapper flex">
  <main class="px-16">
    <header class="flex header border-b-4 border-red">
      <a href="/" class="logo">
        <strong>Tom's</strong> Cooking
      </a>
      <ul class="icons">
        <li>
          <a href="https://github.com/thattomperson/toms.cooking" class="icon fa-github">
            <span class="label">Github</span>
          </a>
        </li>
      </ul>
    </header>
    <slot></slot>
  </main>
  <Nav {segment}/>
</div>