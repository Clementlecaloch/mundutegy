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
        <p class="text-center"><a href="mailto:natgil.mundutegy@gmail.com">Nous contacter sur : natgil.mundutegy@gmail.com</a></p>
        <form name="contact" method="POST" data-netlify="true">
          <p>
            <label>Your Name: <input type="text" name="name" /></label>
          </p>
          <p>
            <label>Your Email: <input type="email" name="email" /></label>
          </p>
          <p>
            <label>Your Role: <select name="role[]" multiple>
              <option value="leader">Leader</option>
              <option value="follower">Follower</option>
            </select></label>
          </p>
          <p>
            <label>Message: <textarea name="message"></textarea></label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
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
</style>
