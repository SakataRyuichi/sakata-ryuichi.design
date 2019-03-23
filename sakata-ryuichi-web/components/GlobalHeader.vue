<template>
  <div class="header">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="https://bulma.io">
          <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
        </a>

        <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <nuxt-link to="/" class="navbar-item">Top</nuxt-link>
          <nuxt-link to="/about" class="navbar-item">About</nuxt-link>
          <nuxt-link to="/gallery" class="navbar-item">Gallery</nuxt-link>
          <nuxt-link to="/contact" class="navbar-item">Contact</nuxt-link>

          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">
              More
            </a>

            <div class="navbar-dropdown">
              <nuxt-link to="/" class="navbar-item">Top</nuxt-link>
              <nuxt-link to="/about" class="navbar-item">about</nuxt-link>
              <nuxt-link to="/gallery" class="navbar-item">Gallery</nuxt-link>
              <nuxt-link to="/contact" class="navbar-item">Contact</nuxt-link>
            </div>
          </div>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <a class="button is-primary">
                <strong>Sign up</strong>
              </a>
              <a class="button is-light">
                Log in
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <div class="columns">
      <div class="column is-full">
        <HeroComponent />
      </div>
    </div>
  </div>
</template>

<script>
import HeroComponent from '~/components/HeroComponent.vue'

export default {
  components: {
    HeroComponent
  }
}
</script>
