;(function($, firebase) {
  

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      $('.js-user-signed-in').show()
      $('.js-user-anon').hide()
      // hide sign in

    } else {
      $('.js-user-signed-in').hide()
      $('.js-user-anon').show()
    }
  })



  var uiConfig = {
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    ]
  }

  $('.js-sign-in').click(function () {
    if (firebase.auth().currentUser) {
      return
    }


     // Initialize the FirebaseUI Widget using Firebase.
     var ui = new firebaseui.auth.AuthUI(firebase.auth());
     // The start method will wait until the DOM is loaded.
     var div = document.createElement('div')
     var c = document.createElement('span')

     c.style.background = 'transparent'
     c.style.margin = 'auto'
     c.style.width = '360px'

     div.style.position = 'fixed'
     div.style.left = div.style.right = div.style.top = div.style.bottom = "0px";
     div.style.backgroundColor = 'rgba(0,0,0,.3)'
     div.style.display = 'flex'
     div.style.alignItems = 'center'

     div.style.zIndex = 99999
     div.appendChild(c)
     document.body.prepend(div)
     ui.start(c, uiConfig);
  })

  // console.log('binding')
  // var pjaxContainer = $('.pjax')

  // $('body').on('click', 'a[pjax]', function (e) {
  //   e.preventDefault()
  //   var url = this.href
  //   console.log('getting ' + url)
  //   var req = $.get(url)

  //   req.always(function (res) {
  //     var html = document.createElement('html')
  //     html.innerHTML = res;

  //     content = html.querySelector('.pjax')
  //     title = html.querySelector('title')

  //     window.history.pushState({}, title.innerText, url)
      
  //     pjaxContainer.html(content.innerHTML)
  //   })
  // })



 
})(jQuery, firebase);

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
      m('a', {href: res.uri}, [res.title])
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
    console.log('oninput', value)
    results = value ? fuse.search(value) : []
  }

  function onblur() {
    console.log('onblur')
    
    setTimeout(() => {
      oninput({target: {value: ''}})
      m.redraw()
    }, 1000)
  }

  return {
    oninit: function(vnode){
      fetch('/index.json')
        .then(res => res.json())
        .then(list => fuse = new Fuse(list, options))
    },
    view: () => (m('form', [
      m('input', { oninput, onblur, onfocus: oninput,  autocomplete: 'off', type: 'text', id: 'query', class: results.length ? 'active' : '', placeholder: 'Search'}),
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