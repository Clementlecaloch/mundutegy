<template>
  <div class="container part oneArticle">
    <div class="justify-content-between">
      <h2>{{recette.titre}}</h2>
      <div class="trait"></div>
      <legend>{{recette.pays.Nom}}</legend>
    </div>
    <iframe v-if="recette.videoLien" type="text/html" width="100%" height="auto" :src="recette.videoLien" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen/>
    <section class="text-justify" v-html="$md.render(recette.recette)"></section>
  </div>
</template>

<script>
  import oneRecette from '~/apollo/queries/recettes/oneRecette'

  export default {
    data() {
      return {
        recette: Object
      }
    },
    apollo: {
      recette: {
        prefetch: true,
        query: oneRecette,
        variables () {
          return { id: this.$route.params.id }
        }
      }
    }
  }
</script>

<style>
  iframe {
    margin:20px 0;
  }
</style>
