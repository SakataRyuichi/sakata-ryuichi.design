<template>
  <div>
    <GlobalHeader />
    <section class="container is-fluid">
      <div class="columns ">
        <div class="column is-one-third">
          <SideMenu />
        </div>
        <div class="column">
          <nuxt />
        </div>
      </div>
    </section>
    <GlobalFooter />
  </div>
</template>


<script>
import GlobalHeader from '~/components/GlobalHeader.vue'
import GlobalFooter from '~/components/GlobalFooter.vue'
import SideMenu from '~/components/SideMenu.vue'

export default {
  components: {
    GlobalHeader,
    GlobalFooter,
    SideMenu
  }
}
</script>
