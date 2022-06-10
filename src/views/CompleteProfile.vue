<template>
  <div class="complete-profile px-4">
    <h1 class="my-5 text-center">Complete Your Profile</h1>
    <b-form>
      <b-form-group label="Upload Profile Pic" label-for="profile">
        <b-form-file
          id="profile"
          accept="image/*"
          :state="Boolean(profilePic)"
          v-model="profilePic"
        />
      </b-form-group>
      <b-form-group label="Phone Number*" label-for="phoneNumber" class="mt-3">
        <b-form-input id="phoneNumber" v-model="phoneNumber" />
      </b-form-group>
      <b-form-group
        label="Short Description"
        label-for="desctiption"
        class="mt-3"
      >
        <b-form-input id="desctiption" v-model="description" />
      </b-form-group>
      <div class="mt-3">
        <b-button variant="dark" class="w-100" @click="uploadProfile"
          >Update</b-button
        >
      </div>
    </b-form>
  </div>
</template>
<script>
import { getAuth } from 'firebase/auth'
import { setDoc, doc } from 'firebase/firestore'
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage'
export default {
  data() {
    return {
      profilePic: null,
      phoneNumber: null,
      description: null,
    }
  },
  methods: {
    uploadProfile() {
      const auth = getAuth()
      const user = auth.currentUser
      const storage = getStorage()
      let imgUrl = ''
      const storageRef = ref(storage, `profile/${user.uid}`)
      uploadBytes(storageRef, this.profilePic).then(() => {
        getDownloadURL(ref(storage, `profile/${user.uid}`)).then((url) => {
          const xhr = new XMLHttpRequest()
          xhr.responseType = 'blob'
          // xhr.onload = () => {
          //   const blob = xhr.response
          //   console.log(blob, 'blob')
          // }
          xhr.open('GET', url)
          xhr.send()
          imgUrl = url

          const docRef = setDoc(doc(this.$db, 'users', user.uid), {
            avatar: imgUrl,
            desc: this.description,
            phone: this.phoneNumber,
            displayName: user.displayName,
            uid: user.uid,
            email: user.email,
          }).then(() => {
            this.$router.push(`/profile/${user.uid}`)
          })

          console.log(docRef, 'it is working@888')
        })
      })
    },
  },
}
</script>
