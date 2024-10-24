import { Link, Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <nav className="bg-black/40 backdrop-blur-lg border-b border-purple-500/20 p-4 sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-white text-2xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent hover:scale-105 transition-transform">
            MEIJIN CARDS
          </Link>
          <div className="flex items-center space-x-6">
            <Link 
              to="/market" 
              className="text-gray-300 hover:text-white transition-colors"
            >
              Marketplace
            </Link>
            <Link 
              to="/inventory" 
              className="text-gray-300 hover:text-white transition-colors"
            >
              Inventaire
            </Link>
            <Link 
              to="/collection" 
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:from-purple-500 hover:to-blue-500 transition-all duration-300 hover:scale-105 shadow-lg shadow-purple-500/20"
            >
              Ma Collection
            </Link>
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  )
}

export default Layout