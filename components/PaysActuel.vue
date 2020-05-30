<template>
    <div>
      <div class="row actual align-items-center" v-for="pays in filteredList" v-bind:key="pays.id">
        <div class="col-lg-2">
          <img class="drapeau margin-10" :src="'http://localhost:1337' + pays.drapeau.url" alt="">
        </div>
        <h2 class="col-lg-5">En ce moment <br> {{pays.Nom}}</h2>
        <router-link class="button" :to="{ name: 'pays-id', params: { id: pays.id }}" tag="a">En savoir plus</router-link>
        <div class="container-plane">
          <img class="plane" src="../assets/image/plane.png" alt="">
        </div>
      </div>
    </div>
</template>

<script>
  import paysActuel from '~/apollo/queries/pays/paysActuel';

    export default {
      data() {
        return {
          // Initialize an empty restaurants variable
          pays: [],
          query: ''
        }
      },
      apollo: {
        pays: {
          prefetch: true,
          query: paysActuel
        }
      },
      computed: {
        // Search system
        filteredList() {
          return this.pays.filter(pays => {
            return pays.id.toLowerCase().includes(this.query.toLowerCase())
          })
        },
      },
    }
</script>

