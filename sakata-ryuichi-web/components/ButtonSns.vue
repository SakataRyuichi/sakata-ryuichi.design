<template>
  <div>
    <a 
    class="button has-transparent" 
    :disabled="isDisabled" 
    :href="hrefUrl" 
    :target="isBlank? '_blank':false"
    v-on:mouseenter="mouseenter"
    v-on:mouseleave="mouseleave
    ">
      <span v-if="iconStats" class="icon is-medium">
        <ion-icon :name="iconName"></ion-icon>
      </span>
      <transition name="fadeLabel">
        <span v-show="active">{{ labelName }}</span>
      </transition>
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

//transition animation
.fadeLabel-enter-active, .fadeLabel-leave-active {
  transition: opacity .2s;
}
.fadeLabel-enter, .fadeLabel-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>

<script>
export default {
  data: function(){
    return {
    selectedItem: '',
    active: false
    }
  },
  methods: {
    mouseenter: function(){
      this.useHoverAction
      return this.active = !this.active
    },
    mouseleave: function(){
      this.useHoverAction
      return this.active = !this.active
    },
    useHoverAction: function() {
      if(noHover === true) {
        return
      }
    }

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
    },
    noHover: {
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

