<template>
  <div class="container part">
    <h1>{{pay.Nom}}</h1>
    <iframe class="maps" :src="pay.carte"></iframe>
    <h1 class="margin-10">Les photos</h1>
    <div class="gallery" id="gallery">
      <div class="mb-3 pics animation all 2" v-for="image in pay.galerie.photos">
        <a class="img-fluid" :href="image.url" data-lightbox="galerie"><img class="image-galerie" :src="image.url" alt=""></a>
      </div>
    </div>
    <h1 class="text-center margin-10">Recettes</h1>
    <div class="pays-recettes row justify-content-around">
      <div class="col-lg-4 text-center hover-effect padding-20" v-for="recette in pay.recettes">
        <img class="round-img" :src="recette.photo.url" alt="">
        <h3>{{recette.titre}}</h3>
        <section class="text-justify" v-html="$md.render(recette.recette)"></section>
        <div class="margin-20">
          <router-link class="button" :to="{ name: 'recettes-id', params: { id: recette.id }}" tag="a">Lire la suite</router-link>
        </div>
      </div>
    </div>
    <h1 class="text-center margin-10">Rencontres</h1>
    <div class="pays-rencontre row justify-content-around">
      <div class="col-lg-4 text-center hover-effect padding-20" v-for="rencontre in pay.rencontres">
        <img class="round-img" :src="rencontre.photo.url" alt="">
        <h3>{{rencontre.nom}}</h3>
        <section class="text-justify" v-html="$md.render(rencontre.texte)"></section>
        <div class="margin-20">
          <router-link class="button" :to="{ name: 'rencontres-id', params: { id: rencontre.id }}" tag="a">Lire la suite</router-link>
        </div>
      </div>
    </div>
    <h1 class="text-center margin-10">Articles</h1>
    <div class="rencontre d-lg-flex flex-row align-items-center justify-content-around" v-for="article in pay.articles">
      <div class="col-xl-3">
        <img :src="article.imagePresentation.url" alt="">
      </div>
      <div class="col-xl-6 flex-column">
        <h3 class="text-uppercase">{{article.titre}}</h3>
        <div class="trait-10"></div>
        <legend>{{pay.Nom}}</legend>
        <section class="text-justify" v-html="$md.render(article.contenu)"></section>
      </div>
      <div class="col-xl-3 row justify-content-around align-items-center">
        <router-link class="button" :to="{ name: 'articles-id', params: { id: article.id }}" tag="a">Lire la suite</router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import onePays from '~/apollo/queries/pays/onePays';

  export default {
    data() {
      return {
        title: "Pays",
        pay: Object
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
