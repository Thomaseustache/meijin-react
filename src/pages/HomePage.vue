<template>
  <div class="container mx-auto px-4 py-16 text-center text-white relative">
    <!-- Effet de particules en arrière-plan -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -top-48 -left-48"></div>
      <div class="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -bottom-48 -right-48"></div>
    </div>

    <div class="relative">
      <h1 class="text-7xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
        Digital Cards Collection
      </h1>
      <p class="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
        Découvrez et collectionnez des cartes numériques uniques dans un univers gaming moderne
      </p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
        <div class="bg-gray-800/50 backdrop-blur p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all hover:transform hover:scale-105">
          <div class="text-purple-400 mb-4 text-3xl">🎮</div>
          <h3 class="text-xl font-bold mb-4">Watch Streams</h3>
          <p class="text-gray-400">Gagnez des cartes en regardant vos streamers préférés</p>
        </div>
        <div class="bg-gray-800/50 backdrop-blur p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all hover:transform hover:scale-105">
          <div class="text-purple-400 mb-4 text-3xl">🎁</div>
          <h3 class="text-xl font-bold mb-4">Get Packs</h3>
          <p class="text-gray-400">Ouvrez des packs et découvrez des cartes rares</p>
        </div>
        <div class="bg-gray-800/50 backdrop-blur p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all hover:transform hover:scale-105">
          <div class="text-purple-400 mb-4 text-3xl">🔄</div>
          <h3 class="text-xl font-bold mb-4">Trade Cards</h3>
          <p class="text-gray-400">Échangez avec d'autres collectionneurs</p>
        </div>
      </div>

      <router-link 
        to="/collection" 
        class="inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg text-xl font-bold hover:from-purple-500 hover:to-blue-500 transition-all duration-300 hover:scale-105 shadow-lg shadow-purple-500/20"
      >
        Commencer la Collection
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>