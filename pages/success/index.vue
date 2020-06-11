<template>
    <div class="text-center">
      <h3>Votre message a bien été envoyé ! </h3>
      <router-link to="/" tag="a">Revenir sur la page d'accueil</router-link>
    </div>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style scoped>
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 100px;
  }

  a {
    color: coral;
    padding: 20px;
  }

  a:hover {
    text-decoration: underline;
  }

  a:before {
    content: "-->";
    padding-right: 10px ;
  }
</style>
