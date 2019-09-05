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
    view: () => m('form', [
      m('input', { oninput, onblur, onfocus: oninput, autocomplete: 'off', type: 'text', id: 'query', class: results.length ? 'active' : '', placeholder: 'Search'}),
      m(Results, { results })
    ])
  }
}

m.mount(document.getElementById('search'), Search)

let c = document.getElementById('recipe-container');
if (c) {
  const id = c.getAttribute('data-id');
  const ingredients = c.querySelectorAll('#ingredients input');
  for (let i = 0, ingredient; ingredient = ingredients[i]; i++) {
    if (window.localStorage.getItem(id + ingredient.id)) {
      ingredient.checked = true
    }

    ingredient.onchange = function (e) {
      if (e.target.checked) {
        window.localStorage.setItem(id + e.target.id, true)
      } else {
        window.localStorage.removeItem(id + e.target.id)
      }
    }
  }
  
}