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
      <section class="text-justify text-format article-content" v-html="$md.render(article.contenu)"></section>

      <!-- PHOTOS -->

      <div v-if="article.galerie" class="gallery" id="gallery">
        <div class="animation" v-for="image in article.galerie.photos">
          <a class="img-fluid" :href="image.url" data-lightbox="galerie"><img class="image-galerie" :src="image.url" alt=""></a>
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
    },
    mounted() {
        this.method1();
    },
    methods:{
        method1: function() {
          var article = document.getElementsByClassName('article-content')[0];
          
          var childrens = article.children;
          for (let index = 0; index < childrens.length; index++) {
            if(childrens[index].children[0]) {
              if(!childrens[index + 1] || !childrens[index + 1].children[0]) {
                var clearfix = document.createElement('div')
                clearfix.classList.add('clearfix')
                article.insertBefore(clearfix,childrens[index+1])
              } 
            }
          }
        }
     },

  }
</script>

<style>

</style>
