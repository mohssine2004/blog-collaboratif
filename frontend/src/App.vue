<template>
  <div class="app-container">
    <header class="header">
      <h1>Mon Blog Collaboratif</h1>
      <p>Partagez vos idées et découvrez celles des autres</p>
    </header>

    <main class="main-content">
      <PostList />
    </main>

    <footer class="footer">
      <p>© 2025 Blog Collaboratif. Tous droits réservés.</p>
    </footer>
  </div>
</template>

<script>
import PostList from './components/PostList.vue';

export default {
  name: 'App',
  components: {
    PostList,
  },
};
</script>

<style>
/* Styles globaux */
body, html {
  margin: 0;
  padding: 0;
  height: 100%;
  font-family: 'Arial', sans-serif;
}

.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-image: url('/images/background.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  color: #fff;
}

.header {
  text-align: center;
  padding: 60px 20px;
  background: rgba(0, 0, 0, 0.6); /* Fond semi-transparent */
}

.header h1 {
  font-size: 3rem;
  margin: 0;
  font-family: 'Georgia', serif;
}

.header p {
  font-size: 1.2rem;
  margin: 10px 0 0;
}

.main-content {
  flex: 1;
  padding: 20px;
  background: rgba(227, 123, 123, 0.8); /* Fond semi-transparent */
  color: #333;
}

.footer {
  text-align: center;
  padding: 20px;
  background: rgba(0, 0, 0, 0.8); /* Fond semi-transparent */
  color: #fff;
}
</style>