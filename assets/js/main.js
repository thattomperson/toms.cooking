var options = {
  caseSensitive: true,
  shouldSort: true,
  threshold: 0.4,
  location: 0,
  distance: 100,
  maxPatternLength: 32,
  minMatchCharLength: 1,
  keys: [
    "title",
    "tags",
    "description"
  ]
};

function Results() {
  function result(res) {
    return m('li', [
      m('a', {href: res.uri}, [
        m('img', {src: res.image}),
        m('h3', res.title),
        m('span', res.description)
      ])
    ])
  }

  return {
    view: (vnode) => {
      
      let cname = ['results']
      if (vnode.attrs.results.length > 0) {
        cname.push('active')
      }

      return m('ul', { class: cname.join(' ') }, [
        vnode.attrs.results.map(result)
      ])
    }
  }
}

function Search() {
  let results = []
  let fuse;

  function oninput({ target: { value }}) {
    results = value ? fuse.search(value) : []
  }

  function onblur() {    
    setTimeout(() => {
      oninput({target: {value: ''}})
      m.redraw()
    }, 1000)
  }

  return {
    oninit: function(vnode){
      m.request('/index.json')
        .catch(e => console.log(e))
        .then(list => {
          fuse = new Fuse(list, options)
        })
    },
    view: () => (m('form', [
      m('input', { oninput, onblur, onfocus: oninput, autocomplete: 'off', type: 'text', id: 'query', class: results.length ? 'active' : '', placeholder: 'Search'}),
      m(Results, { results })
    ]))
  }
}

m.mount(document.getElementById('search'), Search)


// const query = $('#query')
// query.one('focus', () => {
//   let fuse = null
//   let root = document.createElement('div')

//   root.className = 'search-results'

//   fetch('/index.json')
//     .then(res => res.json())
//     .then(list => new Fuse(list, options))
//     .then(f => fuse = f)

//   function render(results, search, enabled) {
//     m.render(root, enabled ? m("ul", [
//       results.length ? results.map((r) => m('li', [
//         m('a', {href: r.uri}, [decodeURIComponent(r.title)])
//       ])) : m('li', [search ? 'No Results' : 'Search for something'])
//     ]) : [])
//   }

//   update = () => render(query.val() ? fuse.search(query.val()) : [], query.val(), true)

//   query.on('input', update)
//   query.on('focus', update)

//   query.on('blur', () => {
//     setTimeout(() => render([], query.val(), false), 1000)
//   })

//   query.parent().append(root)
// })