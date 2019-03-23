<template>
  <div class="container">
    エラーが発生した際などに使用するレイアウト
    <h1 v-if="error.statusCode === 404">ページが見つかりません</h1>
    <h1 v-else>エラーが発生しました</h1>
    <nuxt-link to="/">ホーム</nuxt-link>
  </div>
</template>
<script>
export default {
  props: ['error'],
  layout: 'blog' // エラーページ用のカスタムレイアウトを指定できます
}
</script>
