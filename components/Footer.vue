<template>

  <!-- FOOTER -->

    <footer>

      <!-- ROW OF IMAGES -->

      <div class="row align-items-center">
        <div class="col-sm">
          <img class="w-100" src="../assets/image/plage.jpg" alt="">
        </div>
        <div class="col-sm">
          <img class="w-100" src="../assets/image/eux3.jpg" alt="">
        </div>
        <div class="col-sm">
          <img class="w-100" src="../assets/image/avion.jpg" alt="">
        </div>
        <div class="col-sm">
          <img class="w-100" src="../assets/image/gilles.jpg" alt="">
        </div>
        <div class="col-sm">
          <img class="w-100" src="../assets/image/cascade.jpg" alt="">
        </div>
        <div class="col-sm">
          <img class="w-100" src="../assets/image/eux5.jpg" alt="">
        </div>
      </div>

      <!-- FORMULAIRE MAIL -->

      <h3 class="text-center padding-20">Une question ? Contactez nous</h3>
        <form name="ask-question" method="post" data-netlify="true" data-netlify-honeypot="bot-field" action="/success">
          <div class="form">
            <input class="w-100" type="hidden" name="form-name" value="ask-question" />
            <label class="w-100" for="nom">Nom :</label>
            <input class="w-100" type="text" name="name" id="nom" required/>
            <label class="w-100" for="mail">Mail :</label>
            <input class="w-100" type="email" name="mail" id="mail" required>
            <label class="w-100" for="subject">Sujet :</label>
            <input class="w-100" type="text" name="subject" id="subject" required>
            <label class="w-100" for="message">Message: </label>
            <textarea class="w-100" name="message" id="message" required></textarea>
          </div>
          <div class="container-button text-center">
            <button type="submit" class="button button-form">Envoyer</button>
          </div>
        </form>

      <!-- MON PORTOFOLIO -->

        <p class="text-center padding-20"><a href="https://clementlecaloch.now.sh">Par Clément Le Caloch</a></p>
    </footer>
</template>
