import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import CollectionPage from './pages/CollectionPage'
import CardDetailPage from './pages/CardDetailPage'
import MarketplacePage from './pages/MarketplacePage'
import InventoryPage from './pages/InventoryPage'
import PackOpeningPage from './pages/PackOpeningPage'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/collection" element={<CollectionPage />} />
        <Route path="/card/:id" element={<CardDetailPage />} />
        <Route path="/market" element={<MarketplacePage />} />
        <Route path="/inventory" element={<InventoryPage />} />
        <Route path="/pack-opening/:packId" element={<PackOpeningPage />} />
      </Route>
    </Routes>
  )
}

export default App