<template>
  <div class="app-container">
    <header class="header">
      <h1>Mon Blog Collaboratif</h1>
      <p>Partagez vos idées et découvrez celles des autres</p>
      <div class="header-decoration"></div>
    </header>

    <main class="main-content">
      <router-view></router-view> <!-- This will render the current route component -->
    </main>

    <footer class="footer">
      <p>© 2025 Blog Collaboratif. Tous droits réservés.</p>
      <div class="footer-decoration"></div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>