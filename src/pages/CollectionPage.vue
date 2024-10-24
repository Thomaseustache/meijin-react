<template>
  <div class="container mx-auto px-4 py-8 text-white">
    <h1 class="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
      Ma Collection
    </h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <router-link 
        v-for="card in cards" 
        :key="card.id"
        :to="`/card/${card.id}`"
        class="group"
      >
        <div class="bg-gray-800/50 backdrop-blur rounded-xl border border-purple-500/20 overflow-hidden hover:border-purple-500/40 transition-all duration-300 hover:transform hover:scale-105">
          <div class="relative">
            <img :src="card.image" :alt="card.name" class="w-full h-64 object-cover">
            <div class="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
          <div class="p-4">
            <h3 class="font-bold text-lg group-hover:text-purple-400 transition-colors">{{ card.name }}</h3>
            <p class="text-gray-400">{{ card.team }}</p>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
const cards = [
  { id: 1, name: 'Cyber Knight', team: 'Neo Squad', image: 'https://picsum.photos/400/600' },
  { id: 2, name: 'Digital Warrior', team: 'Pixel Force', image: 'https://picsum.photos/400/601' },
  { id: 3, name: 'Tech Mage', team: 'Data Realm', image: 'https://picsum.photos/400/602' },
  { id: 4, name: 'Network Ninja', team: 'Code Elite', image: 'https://picsum.photos/400/603' },
]
</script>