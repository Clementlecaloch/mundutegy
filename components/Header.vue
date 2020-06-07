<template>
    <header>
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
      <div class="carte">
        <div class="container">
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
      }
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
  nav label {
    width: 100%;
  }
  nav label ul {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }

  nav label ul li {
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

  #check {
    display: none;
  }

  /* MENU */

  @media screen and (max-width: 640px) {

    label .menu {
      position: fixed;
      right: -75px;
      top: -75px;
      z-index: 100;
      width: 150px;
      height: 150px;
      background-color: white;
      border-radius: 50%;
      box-shadow: 0 0 0 0 white, 0 0 0 0 white;
      cursor: pointer;
      transition: 0.5s ease-in-out;
    }

    label .hamburger {
      position: absolute;
      left: 35px;
      top: 100px;
      width: 30px;
      height: 2px;
      background-color: black;
      display: block;
      transform-origin: center;
      transition: 0.5s;
    }

    label .hamburger:after, label .hamburger:before {
      content: "";
      position: absolute;
      display: block;
      width: 100%;
      height: 100%;
      background-color: black;
    }

    label .hamburger:before {
      top: -10px;
    }

    label .hamburger:after {
      bottom: -10px;
    }

    label input {
      display: none;
    }

    label input:checked + .menu {
      box-shadow: 0 0 0 120vw white, 0 0 0 100vh white;
      border-radius: 30px;
    }

    label input:checked + .menu .hamburger {
      transform: rotate(45deg);
    }

    label input:checked + .menu .hamburger:after {
      transform: rotate(90deg);
      bottom: 0;
    }

    label input:checked + .menu .hamburger:before {
      transform: rotate(90deg);
      top: 0;
    }

    label input:checked + .menu + ul {
      visibility: visible;
      opacity: 1;
    }

    label ul {
      text-align: center;
      visibility: hidden;
      opacity: 0;
      z-index: 100;
      position: absolute;
      right: 50%;
      transform: translate(50%, 20%);
      transition: 0.4s 0s ease-in-out;
    }

    label li {
      width: 400px;
      margin-bottom: 10px;
      font-size: 18px;
      display: block;
      color: #000;
      text-decoration: none;
      text-transform: uppercase;
      text-align: center;
      padding: 24px 48px;
      transition: 0.1s ease-in;
      letter-spacing: 2px;
    }

    label li:hover {
      font-size: 24px;
    }
    nav label ul {
      display: flex;
      flex-direction: column;
    }
    .logo {
      order: -1;
    }
  }


</style>
