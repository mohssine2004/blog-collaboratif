<template>
    <div class="create-post">
      <h1 class="title">Créer un Nouvel Article</h1>
      <form @submit.prevent="submitPost" class="post-form">
        <div class="form-group">
          <label for="title" class="form-label">Titre</label>
          <input
            type="text"
            id="title"
            v-model="post.title"
            required
            class="form-input"
            placeholder="Entrez un titre"
          />
        </div>
        <div class="form-group">
          <label for="content" class="form-label">Contenu</label>
          <textarea
            id="content"
            v-model="post.content"
            required
            class="form-textarea"
            placeholder="Écrivez votre contenu ici..."
          ></textarea>
        </div>
        <button type="submit" class="submit-button">
          <span>Publier</span>
        </button>
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
          const response = await fetch('http://localhost:5001/posts', {
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
    max-width: 800px;
    margin: 0 auto;
    padding: 40px 20px;
    background: #f9f9f9;
    border-radius: 15px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  }
  
  .title {
    text-align: center;
    font-size: 2.5rem;
    color: #333;
    margin-bottom: 30px;
    position: relative;
  }
  
  .title::after {
    content: '';
    position: absolute;
    width: 60px;
    height: 4px;
    background: linear-gradient(90deg, #ff7e5f, #feb47b);
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 2px;
  }
  
  .post-form {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  
  .form-group {
    margin-bottom: 20px;
  }
  
  .form-label {
    display: block;
    font-size: 1.1rem;
    color: #555;
    margin-bottom: 8px;
  }
  
  .form-input,
  .form-textarea {
    width: 100%;
    padding: 12px;
    font-size: 1rem;
    border: 2px solid #ddd;
    border-radius: 8px;
    transition: border-color 0.3s ease, box-shadow 0.3s ease;
  }
  
  .form-input:focus,
  .form-textarea:focus {
    border-color: #42b983;
    box-shadow: 0 0 8px rgba(66, 185, 131, 0.3);
    outline: none;
  }
  
  .form-textarea {
    resize: vertical;
    min-height: 150px;
  }
  
  .submit-button {
    padding: 12px 24px;
    font-size: 1.1rem;
    background: linear-gradient(90deg, #42b983, #369f6e);
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    overflow: hidden;
    position: relative;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .submit-button span {
    position: relative;
    z-index: 2;
  }
  
  .submit-button::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 300%;
    height: 300%;
    background: rgba(255, 255, 255, 0.2);
    transform: translate(-50%, -50%) rotate(45deg);
    transition: all 0.5s ease;
    z-index: 1;
  }
  
  .submit-button:hover::before {
    transform: translate(-50%, -50%) rotate(90deg);
  }
  
  .submit-button:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 12px rgba(66, 185, 131, 0.3);
  }
  
  .submit-button:active {
    transform: translateY(0);
    box-shadow: 0 4px 8px rgba(66, 185, 131, 0.3);
  }
  </style>