<template>
  <section class="container is-fluid">
    <div>
      <GridComponent />
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'
import GridComponent from '~/components/TestGridComponent.vue'

export default {
  components: {
    Logo,
    GridComponent
  }
}
</script>

<style>
</style>
