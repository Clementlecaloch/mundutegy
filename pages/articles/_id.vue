<template>

  <!-- ARTICLE -->

  <div class="container part oneArticle">

    <!-- IMAGE -->

    <img :src="article.imagePresentation.url" alt="" class="float-right image-oneArticle image">

    <!-- CONTENT -->

    <div class="flex-column">
      <div class="margin-10">
        <h2>{{article.titre}}</h2>
        <div class="trait"></div>
        <h3>{{article.pays.Nom}}</h3>
        <h4>{{moment(article.dateDePublication).format("L")}}</h4>
      </div>
      <section class="text-justify text-format" v-html="$md.render(article.contenu)"></section>

      <!-- PHOTOS -->

      <div v-if="article.galerie" class="gallery" id="gallery">
        <div class="mb-3 pics animation all 2" v-for="image in article.galerie.photos">
          <a data-aos="zoom-up" data-aos-duration="1000" class="img-fluid" :href="image.url" data-lightbox="galerie"><img class="image-galerie" :src="image.url" alt=""></a>
        </div>
      </div>
    </div>
  <div class="clearfix"></div>
  </div>
</template>

  <script>
    var moment = require("moment");
  import oneArticle from '~/apollo/queries/articles/oneArticle'

  export default {
    data() {
      return {
        article: Object,
        moment: moment,
      }
    },
    apollo: {
      article: {
        prefetch: true,
        query: oneArticle,
        variables () {
          return { id: this.$route.params.id }
        }
      }
    }
  }
</script>

<style>

</style>
