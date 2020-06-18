<template>

  <!-- LISTES PAYS -->

  <div class="part container">
      <h1>Notre périple</h1>
      <div class="trait margin-10"></div>

    <!-- PAYS ACTUEL -->

      <PaysActuel />

        <!-- CONTINENT -->

        <div v-for="continent in filteredList"  v-bind:key="continent.id" >
          <h1>{{continent.nom}}</h1>

          <!-- LISTES PAYS -->

          <div class="align-items-baseline" data-aos="zoom-up" data-aos-duration="1000">
              <div class="row align-items-center margin-b-10" v-for="pays in continent.pays" v-bind:key="continent.pays.id">
                <div class="col-lg-3">
                  <img class="drapeau" :src="pays.drapeau.url" alt="">
                </div>
                <h2 class="col-lg-6 nom-pays">{{pays.Nom}}</h2>
                <div class="container-button link-button col-lg-2">
                  <router-link class="button" :to="{ name: 'pays-id', params: { id: pays.id }}" tag="a">En savoir plus</router-link>
                </div>
              </div>
          </div>
        </div>
  </div>
</template>

<script>
  // Import the pays query
  import listePays from '~/apollo/queries/pays/listePays';
  import PaysActuel from '~/components/PaysActuel'

  export default {
    data() {
      return {
        // Initialize an empty restaurants variable
        continents: [],
        query: ''
      }
    },
    apollo: {
      continents: {
        prefetch: true,
        query: listePays
      }
    },
    computed: {
      // Search system
      filteredList() {
        return this.continents.filter(continents => {
          return continents.nom.toLowerCase().includes(this.query.toLowerCase())
        })
      },
    },
    components: {
      PaysActuel,
    }
  }
</script>
