<template>

    <!-- HEADER -->

    <header>

      <!-- NAV -->

      <nav>
        <label>
          <input type="checkbox" id="check">
          <span class="menu">
              <span class="hamburger"></span>
          </span>
          <ul>
            <li v-on:click="uncheck"><router-link  to="/">Bienvenue</router-link></li>
            <li v-on:click="uncheck"><router-link  to="/pays">Périples</router-link></li>
            <li v-on:click="uncheck"><router-link  to="/rencontres">Rencontres</router-link></li>
            <li v-on:click="uncheck" class="logo"><router-link  to="/"><img src="../assets/image/logo.png" alt="Logo"></router-link></li>
            <li v-on:click="uncheck"><router-link  to="/recettes">Cuisine du monde</router-link></li>
            <li v-on:click="uncheck"><router-link  to="/livres">Livres et écritures</router-link></li>
            <li v-on:click="uncheck"><router-link  to="/inspiration">Inspirations</router-link></li>
          </ul>
        </label>
      </nav>

      <!-- HEADER TITLE BACKGROUND -->

      <div class="carte">
        <div class="container" data-aos="zoom-up" data-aos-duration="2000">
          <h1>NAT & GIL - GLOBE CROQUEURS<br> MUNDUTEGY</h1>
          <legend>700 jours</legend>
        </div>
      </div>
    </header>
</template>

<script>
    export default {
      name: "Header",
      methods: {
        uncheck: function() {
          var item = document.getElementById('check');
          item.checked = false;
        },
      },

    }
</script>

<style scoped>



</style>
