<template>
  <div>
    <GlobalHeader />
    <nuxt />
    <GlobalFooter />
  </div>
</template>


<script>
import GlobalHeader from '~/components/GlobalHeader.vue'
import GlobalFooter from '~/components/GlobalFooter.vue'

export default {
  components: {
    GlobalHeader,
    GlobalFooter
  }
}
</script>

<style>

</style>
