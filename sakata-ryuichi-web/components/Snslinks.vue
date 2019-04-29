<template>
  <ul class="snslink-list">
    <li class="snslink-item">
      <ButtonSns icon-name="logo-facebook" href-url="https://www.facebook.com/ryuichi.sakata" label-name="/ryuichi.sakata" :labelStats="false" :isBlank="true" />
    </li>
    <li class="snslink-item">
      <ButtonSns icon-name="logo-instagram" href-url="https://www.instagram.com/ryuichi_design/" label-name="@ryuichi_design" :labelStats="false" :isBlank="true" />
    </li>
    <li class="snslink-item">
      <ButtonSns icon-name="logo-twitter" href-url="https://twitter.com/ryuichi_design" label-name="@ryuichi_design" :labelStats="false" :isBlank="true" />
    </li>
  </ul>
</template>

<script>
import ButtonSns from '~/components/ButtonSns.vue'

export default {
  components: {
    ButtonSns
  }
}
</script>

<style lang="scss" scoped>

.snslink-list {
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  padding-left: 40px
}

.snslink-item {
  margin-bottom: 32px;

  &:last-child {
    margin-bottom: 0;
  }
}

@media ( max-width : 769px ) {
  .snslink-list {
    position: relative;
    flex-direction: row;
    padding-left: 0;

    .snslink-item {
      margin-bottom: 0;
      margin-right: 30px;

      &:last-child {
        margin-right: 0;
      }
    }
  }
}
</style>
