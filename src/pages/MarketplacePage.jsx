import { useState } from 'react'

function MarketplacePage() {
  const [filters, setFilters] = useState([
    { name: 'SPECIAL', active: false },
    { name: 'CHALLENGER', active: false },
    { name: 'GRANDMASTER', active: false },
    { name: 'MASTER', active: false },
  ])

  const marketCards = [
    { 
      id: 1, 
      name: 'Cyber Knight', 
      team: 'Neo Squad', 
      image: 'https://picsum.photos/400/600',
      rarity: 'Special',
      price: 12000
    },
    { 
      id: 2, 
      name: 'Digital Warrior', 
      team: 'Pixel Force', 
      image: 'https://picsum.photos/400/601',
      rarity: 'Challenger',
      price: 8500
    },
    { 
      id: 3, 
      name: 'Tech Mage', 
      team: 'Data Realm', 
      image: 'https://picsum.photos/400/602',
      rarity: 'Grandmaster',
      price: 15000
    },
    { 
      id: 4, 
      name: 'Network Ninja', 
      team: 'Code Elite', 
      image: 'https://picsum.photos/400/603',
      rarity: 'Master',
      price: 10000
    },
  ]

  const toggleFilter = (index) => {
    setFilters(filters.map((filter, i) => 
      i === index ? { ...filter, active: !filter.active } : filter
    ))
  }

  return (
    <div className="container mx-auto px-4 py-8 text-white">
      <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
        Marketplace
      </h1>

      <div className="bg-gray-800/50 backdrop-blur rounded-xl border border-purple-500/20 p-4 mb-8">
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex-1 min-w-[200px]">
            <input 
              type="text" 
              placeholder="Rechercher une carte..." 
              className="w-full bg-gray-900/50 border border-purple-500/20 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/40"
            />
          </div>
          
          <div className="flex gap-2">
            {filters.map((filter, index) => (
              <button 
                key={filter.name}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  filter.active 
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white' 
                    : 'bg-gray-900/50 text-gray-400 hover:text-white'
                }`}
                onClick={() => toggleFilter(index)}
              >
                {filter.name}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <span className="text-gray-400">Trier par:</span>
            <select className="bg-gray-900/50 border border-purple-500/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-500/40">
              <option>Prix (croissant)</option>
              <option>Prix (décroissant)</option>
              <option>Rareté</option>
              <option>Date d'ajout</option>
            </select>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {marketCards.map(card => (
          <div key={card.id} className="group">
            <div className="bg-gray-800/50 backdrop-blur rounded-xl border border-purple-500/20 overflow-hidden hover:border-purple-500/40 transition-all duration-300 hover:transform hover:scale-105">
              <div className="relative">
                <img src={card.image} alt={card.name} className="w-full h-64 object-cover" />
                <div className="absolute top-2 right-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-3 py-1 rounded-full text-sm">
                  {card.rarity}
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg group-hover:text-purple-400 transition-colors">{card.name}</h3>
                <p className="text-gray-400 mb-4">{card.team}</p>
                <div className="flex justify-between items-center">
                  <span className="text-purple-400 font-bold">{card.price} 💎</span>
                  <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:from-purple-500 hover:to-blue-500 transition-all duration-300">
                    Acheter
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MarketplacePage