<template>
  <div class="min-h-screen bg-gray-900 flex items-center justify-center">
    <!-- Pack fermé -->
    <div v-if="!isOpening" 
         class="text-center"
         @click="startOpening">
      <div class="relative w-64 h-96 mb-8 cursor-pointer transform hover:scale-105 transition-transform duration-300">
        <img :src="currentPack.image" alt="Pack" class="w-full h-full object-cover rounded-xl shadow-2xl shadow-purple-500/20">
        <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent rounded-xl"></div>
        <div class="absolute bottom-4 left-0 right-0 text-white text-center">
          <p class="text-2xl font-bold">{{ currentPack.name }}</p>
          <p class="text-sm text-purple-400">Cliquez pour ouvrir</p>
        </div>
      </div>
    </div>

    <!-- Animation d'ouverture -->
    <div v-else-if="isOpening && !showCards" 
         class="text-center">
      <div class="w-64 h-96 relative animate-pack-open">
        <img :src="currentPack.image" alt="Pack" class="w-full h-full object-cover rounded-xl shadow-2xl shadow-purple-500/20">
        <div class="absolute inset-0 bg-purple-500/30 animate-pulse rounded-xl"></div>
      </div>
    </div>

    <!-- Cartes obtenues -->
    <div v-else class="text-center">
      <h2 class="text-3xl font-bold text-white mb-8 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
        Vos nouvelles cartes !
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div v-for="(card, index) in cards" 
             :key="card.id"
             class="transform transition-all duration-500"
             :class="{'opacity-0': !showCards}"
             :style="{
               animationDelay: `${index * 0.2}s`,
               animation: 'cardReveal 0.5s ease-out forwards'
             }">
          <div class="bg-gray-800 rounded-xl border border-purple-500/20 overflow-hidden hover:border-purple-500/40 transition-all duration-300 hover:scale-105">
            <div class="relative">
              <img :src="card.image" :alt="card.name" class="w-full h-64 object-cover">
              <div class="absolute top-2 right-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-3 py-1 rounded-full text-sm">
                {{ card.rarity }}
              </div>
            </div>
            <div class="p-4">
              <h3 class="font-bold text-lg text-white">{{ card.name }}</h3>
              <p class="text-gray-400">{{ card.team }}</p>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Boutons de navigation -->
      <div class="mt-8 flex justify-center gap-4">
        <button 
          @click="goToInventory"
          class="bg-gray-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-600 transition-all duration-300 hover:scale-105"
        >
          Retour à l'inventaire
        </button>
        
        <button 
          v-if="hasNextPack"
          @click="openNextPack"
          class="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:from-purple-500 hover:to-blue-500 transition-all duration-300 hover:scale-105"
        >
          Pack suivant ({{ remainingPacks }})
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const isOpening = ref(false)
const showCards = ref(false)

// Simuler une liste de packs disponibles
const availablePacks = ref([
  { id: 1, name: 'Pack Premium', image: 'https://picsum.photos/400/600' },
  { id: 2, name: 'Pack Ultra', image: 'https://picsum.photos/400/601' },
  { id: 3, name: 'Pack Classic', image: 'https://picsum.photos/400/602' },
])

const currentPackIndex = computed(() => {
  const id = Number(route.params.packId)
  return availablePacks.value.findIndex(p => p.id === id)
})

const currentPack = computed(() => {
  const id = Number(route.params.packId)
  return availablePacks.value.find(p => p.id === id) || availablePacks.value[0]
})

const hasNextPack = computed(() => 
  currentPackIndex.value < availablePacks.value.length - 1
)

const remainingPacks = computed(() => 
  availablePacks.value.length - currentPackIndex.value - 1
)

const cards = ref([
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
])

const startOpening = () => {
  isOpening.value = true
  setTimeout(() => {
    showCards.value = true
  }, 2000)
}

const resetState = () => {
  isOpening.value = false
  showCards.value = false
}

const goToInventory = () => {
  router.push('/inventory')
}

const openNextPack = () => {
  if (hasNextPack.value) {
    const nextPack = availablePacks.value[currentPackIndex.value + 1]
    resetState()
    router.push(`/pack-opening/${nextPack.id}`)
  }
}

// Reset state when route changes
watch(
  () => route.params.packId,
  () => resetState()
)

// Reset state on component mount
onMounted(() => {
  resetState()
})
</script>

<style scoped>
@keyframes cardReveal {
  from {
    opacity: 0;
    transform: translateY(20px) scale(0.9);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.animate-pack-open {
  animation: packOpen 2s ease-out;
}

@keyframes packOpen {
  0% {
    transform: scale(1) rotate(0);
  }
  50% {
    transform: scale(1.2) rotate(5deg);
  }
  100% {
    transform: scale(0.8) rotate(0);
    opacity: 0;
  }
}
</style>