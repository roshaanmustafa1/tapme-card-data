<template>
  <div class="login-page px-3">
    <div class="login-content">
      <div class="login-logo">
        <h1 class="text-center my-5">Welcome</h1>
      </div>
      <div class="login-form">
        <form action="#" @submit.prevent="login">
          <div class="form-group">
            <label>Nmae</label>
            <input type="text" class="form-control" v-model="name" />
          </div>
          <div class="form-group">
            <label>Email</label>
            <input type="email" class="form-control" v-model="email" />
          </div>
          <div class="form-group mt-2">
            <label>Password</label>
            <input type="password" class="form-control" v-model="password" />
          </div>
          <button type="submit" class="btn btn-dark btn-round w-100 mt-2">
            Login
          </button>
          <!-- <div class="form-group mt-2">
            <div class="text-end">
              <a href="#" class="forgot-pass small text-end"
                >Forgot password?</a
              >
            </div>
          </div> -->
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  setPersistence,
  browserSessionPersistence,
  updateProfile,
} from 'firebase/auth'
import { doc, getDoc } from 'firebase/firestore'
export default {
  name: 'LoginView',
  data() {
    return {
      name: 'usama',
      email: 'usama@test.com',
      password: 'something',
    }
  },
  methods: {
    login() {
      const auth = getAuth()
      createUserWithEmailAndPassword(auth, this.email, this.password).then(
        () => {
          setPersistence(auth, browserSessionPersistence).then(() => {
            signInWithEmailAndPassword(auth, this.email, this.password)
              .then((userCredential) => {
                const user = userCredential.user

                const docRef = doc(this.$db, 'users', user.uid)
                updateProfile(auth.currentUser, {
                  displayName: this.name,
                }).then(() => {
                  this.updateUser(user)
                  getDoc(docRef).then((response) => {
                    if (response.exists()) {
                      this.$router.push(`/profile/${user.uid}`)
                    } else {
                      this.$router.push('/complete-profile')
                    }
                  })
                })

                this.$toast.success('Success', 'Welcome ')
              })
              .catch((error) => {
                const errorMessage = error.message
                this.$toast.error(errorMessage)
              })
          })
        }
      )
    },
    updateUser(user) {
      const User = {
        displayName: user.displayName,
        email: user.email,
        uid: user.uid,
      }
      this.$store.commit('updateUser', User)
    },
  },
}
</script>
