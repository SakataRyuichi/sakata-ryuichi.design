<template>
  <section class="container has-text-centered">
    <div class="columns">
      <div class="column">
        <WelcomeMessage />
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <p class="is-center">Webを中心に、デザインとフロントエンドからグラフィックや写真など幅広く活動中🎉<br>各種SNSからContactをお願いします</p>
      </div>
    </div>
  </section>
</template>

<script>
import WelcomeMessage from '~/components/WelcomeMessage.vue'

export default {
  components: {
    WelcomeMessage
  },
  layout: 'default',
}
</script>
