import { createRouter, createWebHashHistory } from 'vue-router'
import { authGuard } from '@bcwdev/auth0provider-client'

function loadPage(page) {
  return () => import(`./pages/${page}.vue`)
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: loadPage('HomePage')
  },
  {
    path: '/about',
    name: 'About',
    component: loadPage('AboutPage')
  },
  {
    path: '/pokemon',
    name: 'PokePage',
    component: loadPage('PokePage')
  },
  {
    path: '/magic',
    name: 'MagiPage',
    component: loadPage('MagiPage')
  },
  {
    path: '/pokemon-market',
    name: 'PokeMarket',
    component: loadPage('PokeMarket')
  },
  {
    path: '/magic-market',
    name: 'MagiMarket',
    component: loadPage('MagiMarket')
  },
  {
    path: '/account',
    name: 'Account',
    component: loadPage('AccountPage'),
    beforeEnter: authGuard
  }
]

export const router = createRouter({
  linkActiveClass: 'router-link-active',
  linkExactActiveClass: 'router-link-exact-active',
  history: createWebHashHistory(),
  routes
})
