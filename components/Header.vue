<template>
    <header>
      <nav>
        <ul>
          <li><router-link to="/">Bienvenue</router-link></li>
          <li><router-link to="/pays">Périples</router-link></li>
          <li><router-link to="/rencontres">Rencontres</router-link></li>
          <li><router-link to="/"><img src="../assets/image/logo.png" alt="Logo"></router-link></li>
          <li><router-link to="/recettes">Cuisine du monde</router-link></li>
          <li><router-link to="/livres">Livres et écritures</router-link></li>
          <li><router-link to="/inspiration">Inspirations</router-link></li>
        </ul>
      </nav>
      <div class="carte">
        <div class="container">
          <h1>NAT & GIL : GLOBE CROQUEURS<br> MUNDUTEGY</h1>
          <legend>700 jours</legend>
        </div>
      </div>
    </header>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>
  header {
    height:500px;
    background-image: url("../assets/image/background.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    color: white;
  }
  nav {
    height:100px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  nav ul {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }

  nav ul li {
    transition: 0.2s ease;
    position: relative;
    padding-bottom: 5px;
  }

  nav ul li:hover {
    transform: translateY(-5px);
  }

  .carte {
    height: 400px;
  }

  .carte .container {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }
</style>
