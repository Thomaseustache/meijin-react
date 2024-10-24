<template>
  <div class="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
    <nav class="bg-black/40 backdrop-blur-lg border-b border-purple-500/20 p-4 sticky top-0 z-50">
      <div class="container mx-auto flex justify-between items-center">
        <router-link to="/" class="text-white text-2xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent hover:scale-105 transition-transform">
          MEIJIN CARDS
        </router-link>
        <div class="flex items-center space-x-6">
          <router-link 
            to="/market" 
            class="text-gray-300 hover:text-white transition-colors"
          >
            Marketplace
          </router-link>
          <router-link 
            to="/inventory" 
            class="text-gray-300 hover:text-white transition-colors"
          >
            Inventaire
          </router-link>
          <router-link 
            to="/collection" 
            class="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:from-purple-500 hover:to-blue-500 transition-all duration-300 hover:scale-105 shadow-lg shadow-purple-500/20"
          >
            Ma Collection
          </router-link>
        </div>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
</script>