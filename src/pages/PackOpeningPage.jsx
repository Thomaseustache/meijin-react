import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

function PackOpeningPage() {
  const { packId } = useParams()
  const navigate = useNavigate()
  const [isOpening, setIsOpening] = useState(false)
  const [showCards, setShowCards] = useState(false)

  const availablePacks = [
    { id: 1, name: 'Pack Premium', image: 'https://picsum.photos/400/600' },
    { id: 2, name: 'Pack Ultra', image: 'https://picsum.photos/400/601' },
    { id: 3, name: 'Pack Classic', image: 'https://picsum.photos/400/602' },
  ]

  const currentPack = availablePacks.find(p => p.id === Number(packId)) || availablePacks[0]
  const currentPackIndex = availablePacks.findIndex(p => p.id === Number(packId))
  const hasNextPack = currentPackIndex < availablePacks.length - 1
  const remainingPacks = availablePacks.length - currentPackIndex - 1

  const cards = [
    {
      id: 1,
      name: 'Cyber Knight',
      team: 'Neo Squad',
      image: 'https://picsum.photos/400/600',
      rarity: 'RARE'
    },
    {
      id: 2,
      name: 'Digital Warrior',
      team: 'Pixel Force',
      image: 'https://picsum.photos/400/601',
      rarity: 'EPIC'
    },
    {
      id: 3,
      name: 'Tech Mage',
      team: 'Data Realm',
      image: 'https://picsum.photos/400/602',
      rarity: 'LEGENDARY'
    }
  ]

  const startOpening = () => {
    setIsOpening(true)
    setTimeout(() => {
      setShowCards(true)
    }, 2000)
  }

  const resetState = () => {
    setIsOpening(false)
    setShowCards(false)
  }

  const goToInventory = () => {
    navigate('/inventory')
  }

  const openNextPack = () => {
    if (hasNextPack) {
      const nextPack = availablePacks[currentPackIndex + 1]
      resetState()
      navigate(`/pack-opening/${nextPack.id}`)
    }
  }

  useEffect(() => {
    resetState()
  }, [packId])

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      {!isOpening && (
        <div className="text-center" onClick={startOpening}>
          <div className="relative w-64 h-96 mb-8 cursor-pointer transform hover:scale-105 transition-transform duration-300">
            <img src={currentPack.image} alt="Pack" className="w-full h-full object-cover rounded-xl shadow-2xl shadow-purple-500/20" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent rounded-xl"></div>
            <div className="absolute bottom-4 left-0 right-0 text-white text-center">
              <p className="text-2xl font-bold">{currentPack.name}</p>
              <p className="text-sm text-purple-400">Cliquez pour ouvrir</p>
            </div>
          </div>
        </div>
      )}

      {isOpening && !showCards && (
        <div className="text-center">
          <div className="w-64 h-96 relative animate-pack-open">
            <img src={currentPack.image} alt="Pack" className="w-full h-full object-cover rounded-xl shadow-2xl shadow-purple-500/20" />
            <div className="absolute inset-0 bg-purple-500/30 animate-pulse rounded-xl"></div>
          </div>
        </div>
      )}

      {showCards && (
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-8 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Vos nouvelles cartes !
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cards.map((card, index) => (
              <div 
                key={card.id}
                className="transform transition-all duration-500"
                style={{
                  opacity: showCards ? 1 : 0,
                  animationDelay: `${index * 0.2}s`,
                  animation: 'cardReveal 0.5s ease-out forwards'
                }}
              >
                <div className="bg-gray-800 rounded-xl border border-purple-500/20 overflow-hidden hover:border-purple-500/40 transition-all duration-300 hover:scale-105">
                  <div className="relative">
                    <img src={card.image} alt={card.name} className="w-full h-64 object-cover" />
                    <div className="absolute top-2 right-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-3 py-1 rounded-full text-sm">
                      {card.rarity}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-lg text-white">{card.name}</h3>
                    <p className="text-gray-400">{card.team}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 flex justify-center gap-4">
            <button 
              onClick={goToInventory}
              className="bg-gray-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-600 transition-all duration-300 hover:scale-105"
            >
              Retour à l'inventaire
            </button>
            
            {hasNextPack && (
              <button 
                onClick={openNextPack}
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:from-purple-500 hover:to-blue-500 transition-all duration-300 hover:scale-105"
              >
                Pack suivant ({remainingPacks})
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default PackOpeningPage