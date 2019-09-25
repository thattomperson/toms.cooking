<div data-qa={formattedName}><slot></slot></div>

<script>
  export let name = ''

  const KEBAB_REGEX = /[A-Z\u00C0-\u00D6\u00D8-\u00DE]/g;

  const dashify = (str, options) => {
    if (typeof str !== 'string') throw new TypeError('expected a string');
    return str.trim()
      .replace(/([a-z])([A-Z])/g, '$1-$2')
      .replace(/\W/g, m => /[À-ž]/.test(m) ? m : '-')
      .replace(/^-+|-+$/g, '')
      .replace(/-{2,}/g, m => options && options.condense ? '-' : m)
      .toLowerCase();
  };

  let formattedName = dashify(name)
</script>