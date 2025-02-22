<template>
  <div class="container">
    <h1>Blog Créatif</h1>
    <router-link to="/create" class="btn">Nouvel Article</router-link>
    <div class="articles">
      <div v-for="post in posts" :key="post.id_p" class="article">
        <h2>{{ post.titre }}</h2>
        <p>{{ post.contenu }}</p>
        <button @click="deletePost(post.id_p)">Supprimer</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return { posts: [] };
  },
  methods: {
    async fetchPosts() {
      const res = await axios.get('http://localhost:5000/posts');
      this.posts = res.data;
    },
    async deletePost(id) {
      await axios.delete(`http://localhost:5000/posts/${id}`);
      this.fetchPosts();
    }
  },
  mounted() {
    this.fetchPosts();
  }
};
</script>

<style>
.container { text-align: center; padding: 20px; }
.articles { display: flex; flex-wrap: wrap; justify-content: center; }
.article { background: #f8f9fa; padding: 10px; margin: 10px; width: 300px; border-radius: 10px; }
.btn { display: block; margin: 20px auto; background: #007bff; color: white; padding: 10px; text-decoration: none; border-radius: 5px; }
</style>
