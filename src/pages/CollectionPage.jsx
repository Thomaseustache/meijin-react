import { Link } from 'react-router-dom'

const cards = [
  { id: 1, name: 'Cyber Knight', team: 'Neo Squad', image: 'https://picsum.photos/400/600' },
  { id: 2, name: 'Digital Warrior', team: 'Pixel Force', image: 'https://picsum.photos/400/601' },
  { id: 3, name: 'Tech Mage', team: 'Data Realm', image: 'https://picsum.photos/400/602' },
  { id: 4, name: 'Network Ninja', team: 'Code Elite', image: 'https://picsum.photos/400/603' },
]

function CollectionPage() {
  return (
    <div className="container mx-auto px-4 py-8 text-white">
      <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
        Ma Collection
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {cards.map(card => (
          <Link 
            key={card.id}
            to={`/card/${card.id}`}
            className="group"
          >
            <div className="bg-gray-800/50 backdrop-blur rounded-xl border border-purple-500/20 overflow-hidden hover:border-purple-500/40 transition-all duration-300 hover:transform hover:scale-105">
              <div className="relative">
                <img src={card.image} alt={card.name} className="w-full h-64 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg group-hover:text-purple-400 transition-colors">{card.name}</h3>
                <p className="text-gray-400">{card.team}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default CollectionPage