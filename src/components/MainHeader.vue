<template>
  <div class="mainheader py-3">
    <div class="container">
      <div class="row">
        <div class="col-8 d-flex align-items-center">
          <a href=""
            ><img
              :src="require('@/assets/images/BlackOrange.png')"
              class="img-fluid"
              alt="logo"
          /></a>
        </div>
        <div
          class="col-4 text-end d-flex align-items-center justify-content-end"
        >
          <router-link to="/" v-if="!authStatus">
            <b-button variant="outline-warning" size="sm">Login</b-button>
          </router-link>
          <b-button variant="outline-warning" v-else size="sm" @click="logout()"
            >Logout</b-button
          >
          <!-- <BaseButtonBlack /> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { getAuth, signOut } from 'firebase/auth'
export default {
  computed: {
    ...mapState(['user', 'authStatus']),
  },
  methods: {
    logout() {
      const auth = getAuth()
      signOut(auth)
        .then(() => {
          this.$store.dispatch('updateUser', {})
          this.$toast.success('Success', 'Logout Successfully')
        })
        .catch((error) => {
          this.$toast.error(error.message)
        })
    },
  },
}
</script>

<style lang="scss" scoped>
.mainheader {
  background-color: #2c2c2c;
}

.btn-outline-warning {
  color: #eb8d2b !important;
  border-color: #eb8d2b !important;
}

.mainheader svg.bi-list.b-icon.bi {
  fill: white;
  font-size: 32px;
}
.img-fluid {
  max-width: 100%;
  height: auto;
  width: 80px;
}

.side-bar {
  display: flex;
  justify-content: center;
  align-items: center;
}

.mainheader .nav-link {
  padding: 0;
}

.side-cart-btn {
  display: none !important;
}
</style>
