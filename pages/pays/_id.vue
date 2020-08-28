<template>

  <!-- PAYS -->

  <div class="container part">
    <h1>{{pay.Nom}}</h1>

    <!-- CARTE PAYS -->

    <iframe v-if="pay.carte" class="maps" :src="pay.carte"></iframe>

    <!-- PHOTOS PAYS -->

    <h1 v-if="pay.galerie" class="margin-10">Les photos</h1>
    <div v-if="pay.galerie" class="gallery" id="gallery">
      <div class="mb-3 pics" v-for="image in pay.galerie.photos">
        <a class="img-fluid" :href="image.url" data-lightbox="galerie"><img class="w-100" :src="image.url" alt=""></a>
      </div>
    </div>

    <!-- RECETTES PAYS -->


    <h1 v-if="pay.recettes" class="text-center margin-10">Recettes</h1>
    <div v-if="pay.recettes" class="text-format row justify-content-around">
      <div class="col-lg-4 text-center hover-effect padding-20" v-for="recette in pay.recettes" >
        <div>
          <img class="round-img" :src="recette.photo.url" alt="">
          <h3>{{recette.titre}}</h3>
          <section class="text-justify preview text-format" v-html="$md.render(recette.recette)"></section>
          <div class="margin-20 container-button">
            <router-link class="button" :to="{ name: 'recettes-id', params: { id: recette.id }}" tag="a">Lire la suite</router-link>
          </div>
        </div>
      </div>
    </div>

    <!-- RENCONTRES PAYS -->

    <h1 v-if="pay.rencontres" class="text-center margin-10">Rencontres</h1>
    <div v-if="pay.rencontres" class="text-format row justify-content-around">
      <div class="col-lg-4 hover-effect padding-20" v-for="rencontre in pay.rencontres" >
        <div class="text-center">
          <img class="round-img" :src="rencontre.photo.url" alt="">
          <h3>{{rencontre.nom}}</h3>
          <section class="text-justify preview text-format" v-html="$md.render(rencontre.texte)"></section>
          <div class="margin-20 container-button">
            <router-link class="button" :to="{ name: 'rencontres-id', params: { id: rencontre.id }}" tag="a">Lire la suite</router-link>
          </div>
        </div>
      </div>
    </div>

    <!-- ARTICLES PAYS -->

    <h1 class="text-center margin-10">Articles</h1>
    <div class="rencontre" v-for="article in pay.articles" >
      <div class="d-lg-flex flex-row align-items-center justify-content-around">
        <div class="col-xl-3">
          <img :src="article.imagePresentation.url" alt="" class="size-auto">
        </div>
        <div class="col-xl-6 flex-column">
          <div class="margin-10">
            <h3 class="text-uppercase">{{article.titre}}</h3>
            <div class="trait-10"></div>
            <legend>{{pay.Nom}} - {{moment(article.dateDePublication).format("LL")}}</legend>
          </div>
          <section class="text-justify preview text-format" v-html="$md.render(article.contenu)"></section>
        </div>
        <div class="col-xl-3 row justify-content-around align-items-center">
          <router-link class="button" :to="{ name: 'articles-id', params: { id: article.id }}" tag="a">Lire la suite</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  var moment = require("moment");
  import onePays from '~/apollo/queries/pays/onePays';

  export default {
    data() {
      return {
        title: "Pays",
        pay: Object,
        moment: moment
      }
    },
    apollo: {
      pay: {
        prefetch: true,
        query: onePays,
        variables () {
          return { id: this.$route.params.id }
        }
      }
    }
  }
</script>

<style>

</style>
