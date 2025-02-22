<template>
  <div class="post-list">
    <h2>Articles Récents</h2>
    <ul>
      <li v-for="post in posts" :key="post.id" class="post-item">
        <h3>{{ post.titre }}</h3>
        <p>{{ post.contenu }}</p>
        <small>Publié le : {{ new Date(post.created_at).toLocaleDateString() }}</small>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: [],
    };
  },
  async created() {
    const response = await fetch('http://localhost:5001/posts');
    this.posts = await response.json();
  },
};
</script>

<style scoped>
.post-list {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.post-item {
  background: rgba(246, 246, 246, 0.9);
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.post-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.post-item h3 {
  margin: 0 0 10px;
  font-size: 1.5rem;
  color: #333;
}

.post-item p {
  margin: 0 0 10px;
  color: #555;
}

.post-item small {
  color: #777;
  font-size: 0.9rem;
}
.post-item {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.5s ease forwards;
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.post-item:nth-child(1) { animation-delay: 0.1s; }
.post-item:nth-child(2) { animation-delay: 0.2s; }
.post-item:nth-child(3) { animation-delay: 0.3s; }
</style>
