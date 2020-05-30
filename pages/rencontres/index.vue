<template>
  <div class="container part">
    <h1>Nos rencontres</h1>
    <div class="rencontre d-lg-flex flex-row align-items-center justify-content-around" v-for="rencontre in filteredList">
      <div class="col-xl-3">
        <img :src="'http://localhost:1337' + rencontre.photo.url" alt="">
      </div>
      <div class="col-xl-6 flex-column">
        <h3 class="text-uppercase">{{rencontre.nom}}</h3>
        <div class="trait-10"></div>
        <legend>{{rencontre.pays.Nom}}</legend>
        <section class="text-justify" v-html="$md.render(rencontre.texte)"></section>
      </div>
      <div class="col-xl-3 row justify-content-around align-items-center">
        <router-link class="button" :to="{ name: 'rencontres-id', params: { id: rencontre.id }}" tag="a">Lire la suite</router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import allRencontres from '~/apollo/queries/rencontres/allRencontres'

  export default {
    data() {
      return {
        // Initialize an empty articles variable
        rencontres: [],
        query: '',
      }
    },
    apollo: {
      rencontres: {
        prefetch: true,
        query: allRencontres
      }
    },
    computed: {
      // Search system
      filteredList() {
        return this.rencontres.filter(rencontres => {
          return rencontres.id.toLowerCase().includes(this.query.toLowerCase())
        })
      },
    }
  }
</script>

