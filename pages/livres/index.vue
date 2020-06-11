<template>
  <div class="container part">
    <h1>Nos livres</h1>
    <div class="livre d-lg-flex flex-row align-items-center justify-content-around" v-for="livres in filteredList" v-bind="livres.id" data-aos="zoom-up" data-aos-duration="1000">
      <div class="col-xl-3">
        <img :src="livres.couverture.url" alt="">
      </div>
      <div class="col-xl-6 flex-column">
        <h3 class="text-uppercase">{{livres.titre}}</h3>
        <div class="trait"></div>
        <section class="text-justify" v-html="$md.render(livres.resume)"></section>
      </div>
      <div class="col-xl-3 row justify-content-around align-items-center">
        <p>{{livres.prix}} €</p>
        <a class="button" v-bind:href="livres.lien" target="_blank">Acheter le livre</a>
      </div>
    </div>
  </div>
</template>

<script>
  import allBook from '~/apollo/queries/livres/allBook'

  export default {
    data() {
      return {
        // Initialize an empty articles variable
        livres: [],
        query: '',
      }
    },
    apollo: {
      livres: {
        prefetch: true,
        query: allBook
      }
    },
    computed: {
      // Search system
      filteredList() {
        return this.livres.filter(livres => {
          return livres.id.toLowerCase().includes(this.query.toLowerCase())
        })
      },
    }
  }
</script>

