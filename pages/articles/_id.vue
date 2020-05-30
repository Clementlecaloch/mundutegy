<template>
  <div class="container part oneArticle">
    <img :src="'https://afternoon-river-68648.herokuapp.com' + article.imagePresentation.url" alt="" class="float-right image-oneArticle image">
    <div class="flex-column">
      <div class="margin-10">
        <h2>{{article.titre}}</h2>
        <div class="trait"></div>
        <h3>{{article.pays.Nom}}</h3>
        <h4>{{moment(article.dateDePublication).format("L")}}</h4>
      </div>
      <section class="text-justify" v-html="$md.render(article.contenu)"></section>
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

