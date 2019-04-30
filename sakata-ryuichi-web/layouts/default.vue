<template>
  <div class="hero is-fullheight is-padding-40 is-ownd-photo">
    <div class="hero-hade">
      <Header />
    </div>
    <div class="hero-body">
      <nuxt />
    </div>
    <Snslinks />
    asdfsdfsafdsa<br>
    asdfsdfsafdsa<br>asdfsdfsafdsa<br>asdfsdfsafdsa<br>asdfsdfsafdsa<br>asdfsdfsafdsa<br>asdfsdfsafdsa<br>asdfsdfsafdsa<br>asdfsdfsafdsa<br>asdfsdfsafdsa<br>asdfsdfsafdsa<br>asdfsdfsafdsa<br>asdfsdfsafdsa<br>asdfsdfsafdsa<br>asdfsdfsafdsa<br>asdfsdfsafdsa<br>asdfsdfsafdsa<br>asdfsdfsafdsa<br>asdfsdfsafdsa<br>asdfsdfsafdsa<br>asdfsdfsafdsa<br>
  </div>
</template>


<script>
import Header from '~/components/Header.vue'
import Snslinks from '~/components/Snslinks.vue'

export default {
  components: {
    Header,
    Snslinks
  }
}
</script>

<style>
.hero.is-padding-40 {
  padding: 40px;
}
.hero.is-ownd-photo {
  background-image: url('/bg.png');
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: auto 60%;
}

@media ( max-width : 769px ) {
  .hero.is-padding-40 {
    padding: 40px 20px;
  }
  .hero.is-ownd-photo {
    background-image: url('/bg.png');
    background-repeat: no-repeat;
    background-position: bottom;
    background-size: auto 60%;
  }
}
</style>
