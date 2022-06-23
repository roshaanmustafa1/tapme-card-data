<template>
  <div id="app">
    <b-overlay
      :show="loader"
      variant="dark"
      opacity="0.9"
      spinner-variant="warning"
      rounded="sm"
    >
      <MainHeader />
      <router-view />
    </b-overlay>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import MainHeader from '@/components/MainHeader'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

export default {
  components: { MainHeader },
  computed: {
    ...mapState(['loader']),
  },
  methods: {
    checkUserStatus() {
      const auth = getAuth()
      onAuthStateChanged(auth, (user) => {
        if (user) {
          this.$store.dispatch('updateAuthStatus', true)
        } else {
          this.$store.dispatch('updateAuthStatus', false)
        }
      })
    },
  },
  mounted() {
    this.checkUserStatus()
  },
}
</script>

<style></style>
