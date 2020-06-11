<template>
    <footer>
      <div class="row align-items-center">
        <div class="col-sm">
          <img class="footer-img" src="../assets/image/plage.jpg" alt="">
        </div>
        <div class="col-sm">
          <img class="footer-img" src="../assets/image/eux3.jpg" alt="">
        </div>
        <div class="col-sm">
          <img class="footer-img" src="../assets/image/avion.jpg" alt="">
        </div>
        <div class="col-sm">
          <img class="footer-img" src="../assets/image/gilles.jpg" alt="">
        </div>
        <div class="col-sm">
          <img class="footer-img" src="../assets/image/cascade.jpg" alt="">
        </div>
        <div class="col-sm">
          <img class="footer-img" src="../assets/image/eux5.jpg" alt="">
        </div>
      </div>
      <h3 class="text-center padding-20">Une question ? Contactez nous</h3>
        <form name="ask-question" method="post" data-netlify="true" data-netlify-honeypot="bot-field" action="pages/">
          <div class="form">
            <input type="hidden" name="form-name" value="ask-question" />
            <label for="nom">Nom :</label>
            <input type="text" name="name" id="nom" />
            <label for="mail">Mail :</label>
            <input type="email" name="mail" id="mail">
            <label for="subject">Sujet :</label>
            <input type="text" name="subject" id="subject">
            <label for="message">Message: </label>
            <textarea name="message" id="message"></textarea>
          </div>
          <div class="container-button text-center">
            <button type="submit" class="button button-form">Envoyer</button>
          </div>
        </form>
        <p class="text-center"><a href="https://clementlecaloch.now.sh">Par Clément Le Caloch</a></p>
    </footer>
</template>

<script>
    export default {
        name: "Footer.vue"
    }
</script>

<style scoped>
  footer {
    background-color: black;
  }

  footer h3 {
    color: white;
  }

.footer-img {
  width: 100%;
  height: 100%;
  padding: 0;
}
  .col-sm {
    padding: 0;
  }
  p {
    padding: 20px;
    color:white
  }

  .button-form {
    filter: invert();
    background-color: white;
  }
</style>
