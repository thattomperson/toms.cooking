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

  console.log('binding')
  var pjaxContainer = $('.pjax')

  $('body').on('click', 'a[pjax]', function (e) {
    e.preventDefault()
    var url = this.href
    console.log('getting ' + url)
    var req = $.get(url)

    req.always(function (res) {
      var html = document.createElement('html')
      html.innerHTML = res;

      content = html.querySelector('.pjax')
      title = html.querySelector('title')

      window.history.pushState({}, title.innerText, url)
      
      pjaxContainer.html(content.innerHTML)
    })
  })
})(jQuery, firebase);