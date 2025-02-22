<template>
    <div class="create-post">
      <h1>Créer un Nouvel Article</h1>
      <form @submit.prevent="submitPost">
        <div class="form-group">
          <label for="title">Titre</label>
          <input type="text" id="title" v-model="post.title" required />
        </div>
        <div class="form-group">
          <label for="content">Contenu</label>
          <textarea id="content" v-model="post.content" required></textarea>
        </div>
        <button type="submit">Publier</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        post: {
          title: '',
          content: '',
        },
      };
    },
    methods: {
      async submitPost() {
        try {
          const response = await fetch('http://localhost:5000/posts', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.post),
          });
          const newPost = await response.json();
          console.log('Article publié :', newPost);
          this.$router.push('/'); // Rediriger vers la page d'accueil
        } catch (error) {
          console.error('Erreur lors de la publication :', error);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .create-post {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
  }
  
  .form-group {
    margin-bottom: 20px;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
  }
  
  input,
  textarea {
    width: 100%;
    padding: 10px;
    font-size: 1rem;
  }
  
  button {
    padding: 10px 20px;
    font-size: 1rem;
    background-color: #42b983;
    color: white;
    border: none;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #369f6e;
  }
  </style>