<template>
  <div class="container part oneArticle">
    <img class="float-right image" :src="'http://localhost:1337' + rencontre.photo.url" alt="">
    <div class="flex-column ">
      <div class="margin-10">
        <h2>{{rencontre.nom}}</h2>
        <div class="trait"></div>
        <h3>{{rencontre.pays.Nom}}</h3>
      </div>
      <section class="text-justify " v-html="$md.render(rencontre.texte)"></section>
    </div>
  </div>
</template>

<script>
  import oneRencontre from '~/apollo/queries/rencontres/oneRencontre'

  export default {
    data() {
      return {
        rencontre: Object
      }
    },
    apollo: {
      rencontre: {
        prefetch: true,
        query: oneRencontre,
        variables () {
          return { id: this.$route.params.id }
        }
      }
    }
  }
</script>

<style scoped>

</style>
