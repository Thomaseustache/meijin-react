<template>
  <div class="container mx-auto px-4 py-8 text-white">
    <h1 class="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
      Marketplace
    </h1>

    <!-- Filtres -->
    <div class="bg-gray-800/50 backdrop-blur rounded-xl border border-purple-500/20 p-4 mb-8">
      <div class="flex flex-wrap items-center gap-4">
        <div class="flex-1 min-w-[200px]">
          <input 
            type="text" 
            placeholder="Rechercher une carte..." 
            class="w-full bg-gray-900/50 border border-purple-500/20 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/40"
          >
        </div>
        
        <div class="flex gap-2">
          <button 
            v-for="filter in filters" 
            :key="filter.name"
            :class="[
              'px-4 py-2 rounded-lg font-medium transition-all duration-300',
              filter.active 
                ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white' 
                : 'bg-gray-900/50 text-gray-400 hover:text-white'
            ]"
            @click="filter.active = !filter.active"
          >
            {{ filter.name }}
          </button>
        </div>

        <div class="flex items-center gap-2">
          <span class="text-gray-400">Trier par:</span>
          <select class="bg-gray-900/50 border border-purple-500/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-500/40">
            <option>Prix (croissant)</option>
            <option>Prix (décroissant)</option>
            <option>Rareté</option>
            <option>Date d'ajout</option>
          </select>
        </div>
      </div>
    </div>

    <!-- Grille de cartes -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <div 
        v-for="card in marketCards" 
        :key="card.id"
        class="group"
      >
        <div class="bg-gray-800/50 backdrop-blur rounded-xl border border-purple-500/20 overflow-hidden hover:border-purple-500/40 transition-all duration-300 hover:transform hover:scale-105">
          <div class="relative">
            <img :src="card.image" :alt="card.name" class="w-full h-64 object-cover">
            <div class="absolute top-2 right-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-3 py-1 rounded-full text-sm">
              {{ card.rarity }}
            </div>
          </div>
          <div class="p-4">
            <h3 class="font-bold text-lg group-hover:text-purple-400 transition-colors">{{ card.name }}</h3>
            <p class="text-gray-400 mb-4">{{ card.team }}</p>
            <div class="flex justify-between items-center">
              <span class="text-purple-400 font-bold">{{ card.price }} 💎</span>
              <button class="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:from-purple-500 hover:to-blue-500 transition-all duration-300">
                Acheter
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const filters = ref([
  { name: 'SPECIAL', active: false },
  { name: 'CHALLENGER', active: false },
  { name: 'GRANDMASTER', active: false },
  { name: 'MASTER', active: false },
])

const marketCards = ref([
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
])
</script>