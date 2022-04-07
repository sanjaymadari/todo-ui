import Auth from './auth'

import './middleware'

// Active chemes
import scheme_3e2123be from './schemes/local.js'

export default function (ctx, inject) {
  // Options
  const options = {"resetOnError":false,"scopeKey":"scope","rewriteRedirects":true,"fullPathRedirect":false,"watchLoggedIn":true,"redirect":{"login":"/login","logout":"/","home":"/","callback":"/login"},"vuex":{"namespace":"auth"},"cookie":{"prefix":"auth.","options":{"path":"/"}},"localStorage":{"prefix":"auth."},"token":{"prefix":"_token."},"refresh_token":{"prefix":"_refresh_token."},"defaultStrategy":"local"}

  // Create a new Auth instance
  const $auth = new Auth(ctx, options)

  // Inject it to nuxt context as $auth
  inject('auth', $auth)

  // Register strategies

  // local
  $auth.registerStrategy('local', new scheme_3e2123be($auth, {"endpoints":{"login":{"url":"login","method":"post","propertyName":"data.token"},"logout":false,"user":{"url":"me","method":"get","propertyName":"data"}},"_name":"local"}))

  // Initialize auth
  return $auth.init().catch(error => {
    if (process.browser) {
      console.error('[ERROR] [AUTH]', error)
    }
  })
}
