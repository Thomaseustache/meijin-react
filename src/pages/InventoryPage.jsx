import { Link } from 'react-router-dom'

function InventoryPage() {
  const packs = [
    {
      id: 1,
      name: 'Pack Premium',
      type: 'PREMIUM',
      description: 'Un pack contenant des cartes rares et exclusives',
      image: 'https://picsum.photos/400/600',
      cardCount: 3,
      guaranteedRarity: 'RARE'
    },
    {
      id: 2,
      name: 'Pack Ultra',
      type: 'ULTRA',
      description: 'Le meilleur pack avec des cartes légendaires',
      image: 'https://picsum.photos/400/601',
      cardCount: 5,
      guaranteedRarity: 'EPIC'
    },
    {
      id: 3,
      name: 'Pack Classique',
      type: 'CLASSIC',
      description: 'Un pack standard avec une chance de cartes rares',
      image: 'https://picsum.photos/400/602',
      cardCount: 3,
      guaranteedRarity: 'COMMON'
    }
  ]

  const openAllPacks = () => {
    console.log('Opening all packs')
  }

  return (
    <div className="container mx-auto px-4 py-8 text-white">
      <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
        Mon Inventaire
      </h1>

      {packs.length > 0 && (
        <div className="bg-blue-500/20 border border-blue-500/40 rounded-xl p-4 mb-8 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-blue-400">🎁</span>
            <span>Vous avez <strong>{packs.length} packs</strong> à ouvrir !</span>
          </div>
          <button 
            className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg transition-colors"
            onClick={openAllPacks}
          >
            Tout ouvrir
          </button>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {packs.map(pack => (
          <div key={pack.id} className="group">
            <div className="bg-gray-800/50 backdrop-blur rounded-xl border border-purple-500/20 overflow-hidden hover:border-purple-500/40 transition-all duration-300 hover:transform hover:scale-105">
              <div className="relative">
                <img src={pack.image} alt={pack.name} className="w-full h-64 object-cover" />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Link 
                    to={`/pack-opening/${pack.id}`}
                    className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:from-purple-500 hover:to-blue-500 transition-all duration-300 transform hover:scale-110"
                  >
                    Ouvrir le pack
                  </Link>
                </div>
                <div className="absolute top-2 right-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-3 py-1 rounded-full text-sm">
                  {pack.type}
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg group-hover:text-purple-400 transition-colors">{pack.name}</h3>
                <p className="text-gray-400">{pack.description}</p>
                <div className="mt-4 flex items-center gap-2 text-sm text-gray-400">
                  <span>Contient:</span>
                  <span className="text-purple-400">{pack.cardCount} cartes</span>
                  <span>•</span>
                  <span className="text-yellow-400">{pack.guaranteedRarity}+ garantie</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {packs.length === 0 && (
        <div className="text-center py-16">
          <div className="text-6xl mb-4">🎁</div>
          <h3 className="text-2xl font-bold mb-2">Aucun pack à ouvrir</h3>
          <p className="text-gray-400 mb-8">Rendez-vous dans la boutique pour obtenir de nouveaux packs !</p>
          <Link 
            to="/shop" 
            className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:from-purple-500 hover:to-blue-500 transition-all duration-300 inline-block"
          >
            Voir la boutique
          </Link>
        </div>
      )}
    </div>
  )
}

export default InventoryPage