<template>
  <div class="min-h-screen flex flex-col">
    <!-- Header avec une ombre et un fond blanc -->
    <header class="bg-white shadow-md py-4">
      <h1 class="text-center text-4xl font-bold text-gray-800">📜 Blog Collaboratif</h1>
    </header>

    <!-- Main content avec une image d'arrière-plan -->
    <main class="flex-1 flex justify-center items-center relative">
      <!-- Image d'arrière-plan -->
      <div class="absolute inset-0 bg-cover bg-center z-0" :style="{ backgroundImage: 'url(https://source.unsplash.com/1600x900/?blog,writing,notes)' }"></div>
      <!-- Overlay pour améliorer la lisibilité -->
      <div class="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
      <!-- Contenu principal -->
      <router-view class="z-20 relative" />
    </main>

    <!-- Footer avec un fond semi-transparent -->
    <footer class="text-center text-white py-4 bg-black bg-opacity-50">
      🚀 Créé avec Vue.js & Tailwind CSS
    </footer>
  </div>
</template>

<style>
/* Animation de fond pour le body */
body {
  background: linear-gradient(135deg, #667eea, #764ba2);
  animation: gradientAnimation 10s infinite alternate;
}

@keyframes gradientAnimation {
  from {
    background: linear-gradient(135deg, #667eea, #764ba2);
  }
  to {
    background: linear-gradient(135deg, #ff758c, #ff7eb3);
  }
}

/* Styles pour l'image d'arrière-plan */
.bg-cover {
  background-size: cover;
}

.bg-center {
  background-position: center;
}

/* Overlay pour améliorer la lisibilité du contenu */
.bg-opacity-50 {
  background-color: rgba(0, 0, 0, 0.5);
}
</style>