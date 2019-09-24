<a href={href}>
  <slot></slot>
</a>

<style>
  a {
    color: #30BE76;
    text-decoration: none;

    padding: 3px 6px;
    border: #30BE76 solid 1px;
    border-radius: 2px;
  }
</style>

<script>
  export let href = ""
</script>