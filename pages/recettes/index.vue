<template>
  <div class="container part">
    <h1>Les recettes du périple</h1>
    <div class="rencontre d-lg-flex flex-row align-items-center justify-content-around" v-for="recettes in filteredList" data-aos="zoom-up" data-aos-duration="1000">
      <div class="col-xl-3">
        <img :src="recettes.photo.url" alt="">
      </div>
      <div class="col-xl-6 flex-column">
        <div class="margin-10">
          <h3 class="text-uppercase">{{recettes.titre}}</h3>
          <div class="trait"></div>
          <legend>{{recettes.pays.Nom}}</legend>
        </div>
        <section class="text-justify preview" v-html="$md.render(recettes.recette)"></section>
      </div>
      <div class="col-xl-3 row justify-content-around align-items-center container-button">
        <router-link class="button" :to="{ name: 'recettes-id', params: { id: recettes.id }}" tag="a">Lire la suite</router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import allRecettes from '~/apollo/queries/recettes/allRecettes'

  export default {
    data() {
      return {
        // Initialize an empty articles variable
        recettes: [],
        query: '',
      }
    },
    apollo: {
      recettes: {
        prefetch: true,
        query: allRecettes
      }
    },
    computed: {
      // Search system
      filteredList() {
        return this.recettes.filter(recettes => {
          return recettes.id.toLowerCase().includes(this.query.toLowerCase())
        })
      },
    }
  }
</script>

