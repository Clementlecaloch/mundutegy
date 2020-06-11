<template>
  <div class="container-fluid">
    <div class="part">
      <div class="row align-items-center">
        <video controls autoplay class="col-sm">
          <source src="~/assets/video/accueil.mp4" type="video/mp4">
        </video>
        <div class="col-sm presentation-accueil">
          <div class="row align-items-center">
            <div class="col-sm">
              <img class="img-accueil" src="~/assets/image/eux1.jpg" alt="">
            </div>
            <p class="col-sm text-justify">Je suis Nathalie. Un peu rêveuse, utopique, sorcière...
              J'aime vivre, avec ou sans les autres.
              Communiquer, dans la même langue, ou d'autres, ou simplement par le regard.
              J'aime la nature, sauvage ou jardinée
              J'aime regarder le lever de la lune, le coucher de soleil, l'oiseau qui se baigne, l’écureuil qui vient manger des noix...
              J'aime LE voyage, le mouvement, la découverte, les échanges.
              Avec ce MUNDUTEGY, j'ouvre les bras , et mon coeur à ce vieux rêve :
              Aller. Partir, et revenir
              ​</p>
          </div>
          <div class="row align-items-center">
            <div class="col-sm">
              <img class="img-accueil" src="~/assets/image/eux2.jpg" alt="">
            </div>
            <p class ="col-sm text-justify">Je suis Gilles. Nomade dans l'âme, je parcours la planète et glane des vies, des portraits, des images. Je les mets en mots pour les offrir aux gourmands de lecture.
              Gourmand, c'est aussi ma définition : je dévore la vie, les endroits paradisiaques et les bons desserts!!
              Le voyage est ma première nature, aller à la rencontre des lieux et des personnes, carte en main et boussole dans la tête. Ce voyage, plus qu'un rêve, est un but de vie.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="part">
      <h1 class="text-center">Explorer</h1>
      <div class="row">
        <div class="col-sm icon-nav " data-aos="flip-up" data-aos-duration="1000" data-aos-delay="0">
          <router-link to="/pays" class="link">
            <img class="icon" src="~/assets/image/icon-boussole.png" alt="">
            <h3>PÉRIPLES</h3>
            <p class="text-center">
              « Voyage avec deux sacs : l’un pour donner, l’autre pour recevoir. » Goethe
            </p>
          </router-link>
        </div>
        <div class="col-sm icon-nav" data-aos="flip-up" data-aos-duration="1000" data-aos-delay="100">
          <router-link to="/rencontres" class="link">
            <img class="icon" src="~/assets/image/icon-hand.png" alt="">
            <h3>RENCONTRES</h3>
            <p class="text-center">« Et puis il y a ceux que l’on croise, que l’on connaît à peine, qui vous disent un mot, une phrase, vous accordent une minute, une demi-heure, et changent le cours de votre vie. » Victor Hugo</p>
          </router-link>
        </div>
        <div class="col-sm icon-nav" data-aos="flip-up" data-aos-duration="1000" data-aos-delay="200">
          <router-link to="/recettes" class="link">
            <img class="icon" src="~/assets/image/icon-bowl.png" alt="">
            <h3>CUISINE DU MONDE</h3>
            <p class="text-center">
              « La cuisine était un monde en soi. Exactement comme le disait Shakespeare. Le monde était une cuisine. » Haruki Murakami
            </p>
          </router-link>
        </div>
        <div class="col-sm icon-nav" data-aos="flip-up" data-aos-duration="1000" data-aos-delay="300">
          <router-link to="/livres" class="link">
            <img class="icon" src="~/assets/image/icon-book.png" alt="">
            <h3>LIVRES ET ÉCRITURE</h3>
            <p class="text-center">
              « Si tous les livres lus sont autant d’échappées belles sur les routes du monde, écrire, c’est s’inventer des chemins vierges. » Jean-Pierre Otte
            </p>
          </router-link>
        </div>
        <div class="col-sm icon-nav" data-aos="flip-up" data-aos-duration="1000" data-aos-delay="400">
          <router-link to="/" class="link">
            <img class="icon" src="~/assets/image/icon-eye.png" alt="">
            <h3>INSPIRATIONS</h3>
            <p class="text-center">
              « Ne renoncez pas à ce que vous voulez vraiment faire. Là où il y a des rêves, de l’amour et de l’inspiration, vous ne pouvez pas vous tromper. » Ella Fitzgerald
            </p>
          </router-link>
        </div>
      </div>
    </div>
    <div class="beau-gosse"></div>
    <div class="part">
      <h1 class="text-center">Découvrir</h1>
      <div class="flex-column">
        <div v-for="article in filteredList" v-bind:key="article.id" class="article">
          <div class="row justify-content-lg-start align-items-center" data-aos="zoom-up" data-aos-duration="1000">
            <div class="col-lg-3 overflow-hidden">
              <img class="img-article" :src="article.imagePresentation.url">
            </div>
            <div class="col-lg-6">
              <div class="margin-10">
                <h3>{{article.titre}}</h3>
                <div class="trait-10"></div>
                <legend>{{moment(article.dateDePublication).format("LL")}}</legend>
              </div>
              <p class="text-justify" v-html="$md.render(article.contenu)"></p>
            </div>
            <div class="col-lg-3 container-button text-center">
              <router-link class="button" :to="{ name: 'articles-id', params: { id: article.id }}" tag="a">Lire la suite</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  // Import the five articles query
  var moment = require("moment");
  import fiveArticles from '~/apollo/queries/articles/fiveArticles'

  export default {
    data() {
      return {
        // Initialize an empty articles variable
        articles: [],
        moment: moment,
        query: '',
      }
    },
    apollo: {
      articles: {
        prefetch: true,
        query: fiveArticles
      }
    },
    computed: {
      // Search system
      filteredList() {
        return this.articles.filter(articles => {
          return articles.id.toLowerCase().includes(this.query.toLowerCase())
        })
      },
    }
  }
</script>

<style>

</style>
