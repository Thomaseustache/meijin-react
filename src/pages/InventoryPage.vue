<template>
  <div class="container mx-auto px-4 py-8 text-white">
    <h1 class="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
      Mon Inventaire
    </h1>

    <!-- Notification de packs -->
    <div v-if="packs.length > 0" class="bg-blue-500/20 border border-blue-500/40 rounded-xl p-4 mb-8 flex items-center justify-between">
      <div class="flex items-center gap-2">
        <span class="text-blue-400">🎁</span>
        <span>Vous avez <strong>{{ packs.length }} packs</strong> à ouvrir !</span>
      </div>
      <button 
        class="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg transition-colors"
        @click="openAllPacks"
      >
        Tout ouvrir
      </button>
    </div>

    <!-- Grille de packs -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <div 
        v-for="pack in packs" 
        :key="pack.id"
        class="group"
      >
        <div class="bg-gray-800/50 backdrop-blur rounded-xl border border-purple-500/20 overflow-hidden hover:border-purple-500/40 transition-all duration-300 hover:transform hover:scale-105">
          <div class="relative">
            <img :src="pack.image" :alt="pack.name" class="w-full h-64 object-cover">
            <div class="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <router-link 
                :to="`/pack-opening/${pack.id}`"
                class="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:from-purple-500 hover:to-blue-500 transition-all duration-300 transform hover:scale-110"
              >
                Ouvrir le pack
              </router-link>
            </div>
            <div class="absolute top-2 right-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-3 py-1 rounded-full text-sm">
              {{ pack.type }}
            </div>
          </div>
          <div class="p-4">
            <h3 class="font-bold text-lg group-hover:text-purple-400 transition-colors">{{ pack.name }}</h3>
            <p class="text-gray-400">{{ pack.description }}</p>
            <div class="mt-4 flex items-center gap-2 text-sm text-gray-400">
              <span>Contient:</span>
              <span class="text-purple-400">{{ pack.cardCount }} cartes</span>
              <span>•</span>
              <span class="text-yellow-400">{{ pack.guaranteedRarity }}+ garantie</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Message si pas de packs -->
    <div v-if="packs.length === 0" class="text-center py-16">
      <div class="text-6xl mb-4">🎁</div>
      <h3 class="text-2xl font-bold mb-2">Aucun pack à ouvrir</h3>
      <p class="text-gray-400 mb-8">Rendez-vous dans la boutique pour obtenir de nouveaux packs !</p>
      <router-link 
        to="/shop" 
        class="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:from-purple-500 hover:to-blue-500 transition-all duration-300 inline-block"
      >
        Voir la boutique
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const packs = ref([
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
])

const openAllPacks = () => {
  // Cette fonction serait implémentée pour ouvrir tous les packs
  console.log('Opening all packs')
}
</script>