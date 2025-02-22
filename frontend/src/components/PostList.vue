<template>
  <div class="post-list">
    <h2 class="title">Articles Récents</h2>
    <ul>
      <li v-for="(post, index) in posts" :key="post.id" class="post-item" :style="{ '--delay': index * 0.1 + 's' }">
        <div class="post-content">
          <h3>{{ post.titre }}</h3>
          <p>{{ post.contenu }}</p>
          <small>Publié le : {{ new Date(post.created_at).toLocaleDateString() }}</small>
        </div>
        <div class="post-image" :style="{ backgroundImage: `url(${post.image || 'https://via.placeholder.com/150'})` }"></div>
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
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
}

.title {
  text-align: center;
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 40px;
  position: relative;
  display: inline-block;
}

.title::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 3px;
  background: linear-gradient(90deg, #ff7e5f, #feb47b);
  bottom: -10px;
  left: 0;
  transform: scaleX(0);
  transform-origin: bottom right;
  transition: transform 0.5s ease;
}

.title:hover::after {
  transform: scaleX(1);
  transform-origin: bottom left;
}

ul {
  list-style: none;
  padding: 0;
}

.post-item {
  display: flex;
  align-items: center;
  background: #fff;
  border-radius: 15px;
  padding: 20px;
  margin-bottom: 30px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.5s ease forwards;
  animation-delay: var(--delay);
}

.post-item:hover {
  transform: translateY(-10px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
}

.post-content {
  flex: 1;
  padding-right: 20px;
}

.post-content h3 {
  margin: 0 0 10px;
  font-size: 1.8rem;
  color: #333;
}

.post-content p {
  margin: 0 0 10px;
  color: #555;
  line-height: 1.6;
}

.post-content small {
  color: #777;
  font-size: 0.9rem;
}

.post-image {
  width: 150px;
  height: 150px;
  border-radius: 10px;
  background-size: cover;
  background-position: center;
  transition: transform 0.3s ease;
}

.post-item:hover .post-image {
  transform: scale(1.1);
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