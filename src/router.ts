import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './pages/HomePage.vue'
import CollectionPage from './pages/CollectionPage.vue'
import CardDetailPage from './pages/CardDetailPage.vue'
import MarketplacePage from './pages/MarketplacePage.vue'
import InventoryPage from './pages/InventoryPage.vue'
import PackOpeningPage from './pages/PackOpeningPage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: HomePage
    },
    {
      path: '/collection',
      component: CollectionPage
    },
    {
      path: '/card/:id',
      component: CardDetailPage
    },
    {
      path: '/market',
      component: MarketplacePage
    },
    {
      path: '/inventory',
      component: InventoryPage
    },
    {
      path: '/pack-opening/:packId',
      component: PackOpeningPage
    }
  ]
})

export default router