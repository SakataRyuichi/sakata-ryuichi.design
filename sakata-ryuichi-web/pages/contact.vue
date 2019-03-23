<template>
  <section class="container">
    This is contact
    {{ host }}
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'
import axios from 'axios'

export default {
  components: {
    Logo
  },
  data() {
    return {
      host: ''
    }
  },
  asyncData ({}) {
    let data = axios.get(`http://zipcloud.ibsnet.co.jp/api/search?zipcode=1040032`)
      .then((res) => {
        console.log(res.data.status, res.data.results[0].address1, res.data.results[0].address2, res.data.results[0].address3)
      })
  }
}
</script>
