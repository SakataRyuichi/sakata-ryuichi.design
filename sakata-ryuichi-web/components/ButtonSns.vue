<template>
  <div>
    <a class="button has-transparent" :disabled="isDisabled" :href="hrefUrl" :target="isBlank? '_blank':false" >
      <span v-if="iconStats" class="icon is-medium">
        <ion-icon :name="iconName"></ion-icon>
      </span>
      <span v-if="labelStats">{{ labelName }}</span>
    </a>
  </div>
</template>

<style lang="scss">
.button.has-transparent {
  background: transparent;
  border: none;
}
.icon.is-medium {
  font-size: 1.2rem;
}
</style>

<script>
export default {
  data: {
    selectedItem: ''
  },
  props: {
    iconName: {
      type: String,
      default: ''
    },
    hrefUrl: {
      type: String,
      default: ''
    },
    labelName: {
      type: String,
      default: ''
    },
    iconStats: {
      type: Boolean,
      default: true,
    },
    isDisabled: {
      type: Boolean,
      default: false
    },
    labelStats: {
      type: Boolean,
      default: true
    },
    isBlank: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    hoverAction: function(item) {
      this.selectedItem = item;
    }
  }

}
</script>

