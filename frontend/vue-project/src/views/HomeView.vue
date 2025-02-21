<template>
  <div class="min-h-screen bg-gradient-to-r from-yellow-100 to-yellow-50 p-8">
    <!-- Header en haut -->
    <header class="bg-white shadow-md py-4 mb-8">
      <h1 class="text-4xl font-bold text-center text-gray-800">📚 Blog Collaboratif</h1>
    </header>

    <!-- Liste des articles -->
    <div class="max-w-2xl mx-auto">
      <h2 class="text-2xl font-semibold text-gray-800 mb-4">Liste des Articles</h2>
      <ul>
        <li
          v-for="post in posts"
          :key="post.id_p"
          class="bg-white p-6 rounded-lg shadow-md mb-6 transform transition-transform duration-300 hover:scale-105"
        >
          <h3 class="text-xl font-bold text-gray-800 mb-2">{{ post.titre }}</h3>
          <p class="text-gray-600">{{ post.contenu }}</p>
          <button
            @click="deletePost(post.id_p)"
            class="mt-4 bg-red-500 text-white py-1 px-3 rounded-lg hover:bg-red-600 transition duration-300"
          >
            Supprimer
          </button>
        </li>
      </ul>
    </div>

    <!-- Formulaire pour ajouter un article -->
    <div class="max-w-2xl mx-auto mt-8">
      <h2 class="text-2xl font-semibold text-gray-800 mb-4">Ajouter un Article</h2>
      <form @submit.prevent="addPost" class="bg-white p-6 rounded-lg shadow-md">
        <div class="mb-4">
          <label for="titre" class="block text-gray-700 font-medium mb-2">Titre</label>
          <input
            v-model="newPost.titre"
            id="titre"
            placeholder="Titre"
            required
            class="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
        </div>
        <div class="mb-4">
          <label for="contenu" class="block text-gray-700 font-medium mb-2">Contenu</label>
          <textarea
            v-model="newPost.contenu"
            id="contenu"
            placeholder="Contenu"
            required
            class="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            rows="4"
          ></textarea>
        </div>
        <button
          type="submit"
          class="w-full bg-yellow-500 text-white py-2 px-4 rounded-lg hover:bg-yellow-600 transition duration-300"
        >
          Publier
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      posts: [],
      newPost: { titre: '', contenu: '' },
    };
  },
  methods: {
    async fetchPosts() {
      const res = await axios.get('http://localhost:5000/posts');
      this.posts = res.data;
    },
    async addPost() {
      await axios.post('http://localhost:5000/posts', this.newPost);
      this.newPost = { titre: '', contenu: '' };
      this.fetchPosts();
    },
    async deletePost(id) {
      await axios.delete(`http://localhost:5000/posts/${id}`);
      this.fetchPosts();
    },
  },
  mounted() {
    this.fetchPosts();
  },
};
</script>

<style scoped>
/* Arrière-plan avec un effet de papier ancien */
body {
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25'%3E%3Cdefs%3E%3Cpattern id='paper' width='100' height='100' patternUnits='userSpaceOnUse'%3E%3Crect width='100' height='100' fill='%23fef3c7'/%3E%3Cpath d='M0 0h100v100H0z' fill='none' stroke='%23fcd34d' stroke-width='2'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23paper)'/%3E%3C/svg%3E");
}

/* Effet de survol pour les articles */
li:hover {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
</style>