import { useParams, Link } from 'react-router-dom'

function CardDetailPage() {
  const { id } = useParams()
  
  const card = {
    id,
    name: `Cyber Knight ${id}`,
    team: `Neo Squad ${id}`,
    image: `https://picsum.photos/400/${600 + Number(id)}`
  }

  return (
    <div className="container mx-auto px-4 py-8 text-white">
      <div className="max-w-4xl mx-auto bg-gray-800/50 backdrop-blur rounded-xl border border-purple-500/20 overflow-hidden">
        <div className="p-8">
          <Link 
            to="/collection" 
            className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors mb-8"
          >
            ← Retour à la collection
          </Link>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative group">
              <img 
                src={card.image} 
                alt={card.name} 
                className="w-full rounded-lg border-2 border-purple-500/20 group-hover:border-purple-500/40 transition-all duration-300"
              />
              <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-3 py-1 rounded-full text-sm">
                Rare
              </div>
            </div>
            <div>
              <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                {card.name}
              </h1>
              <p className="text-gray-400 mb-6">{card.team}</p>
              
              <div className="space-y-4">
                <div className="bg-black/20 p-4 rounded-lg border border-purple-500/20">
                  <h3 className="font-bold mb-2 text-purple-400">Détails</h3>
                  <p className="text-gray-300">Édition #123/1000</p>
                  <p className="text-gray-300">Rareté: Légendaire</p>
                </div>
                
                <div className="bg-black/20 p-4 rounded-lg border border-purple-500/20">
                  <h3 className="font-bold mb-2 text-purple-400">Stats</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-300">Puissance</span>
                      <div className="w-32 bg-gray-700 rounded-full h-2">
                        <div className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full" style={{width: '85%'}}></div>
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Défense</span>
                      <div className="w-32 bg-gray-700 rounded-full h-2">
                        <div className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full" style={{width: '70%'}}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 space-x-4">
                <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:from-purple-500 hover:to-blue-500 transition-all duration-300 hover:scale-105">
                  Échanger
                </button>
                <button className="bg-gray-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-600 transition-all duration-300">
                  Ajouter aux favoris
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardDetailPage