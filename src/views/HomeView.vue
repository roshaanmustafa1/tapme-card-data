<template>
  <b-overlay
    :show="showLoader"
    variant="dark"
    spinner-variant="warning"
    opacity="1"
  >
    <div class="home position-relative">
      <name-section></name-section>
      <social-link-section
        v-if="userProfile.userLinks.length > 0 || authStatus"
      ></social-link-section>
      <files-upload
        v-if="userProfile.userFiles.length > 0 || authStatus"
      ></files-upload>
      <b-button
        class="addToContactBtn"
        variant="dark"
        squared
        block
        @click="getVCard"
        >Add To Contact</b-button
      >
    </div>
  </b-overlay>
</template>

<script>
// @ is an alias to /src
import NameSection from '@/components/NameSection'
import SocialLinkSection from '@/components/SocialLinkSection'
import FilesUpload from '@/components/FilesUpload'
import { doc, getDoc } from 'firebase/firestore'
import { mapState } from 'vuex'
export default {
  name: 'HomeView',
  components: { NameSection, SocialLinkSection, FilesUpload },
  data() {
    return {
      showLoader: false,
    }
  },
  computed: {
    ...mapState(['loader', 'userProfile', 'authStatus']),
  },
  methods: {
    getUserData() {
      const docRef = doc(this.$db, 'users', this.$route.params.id)
      getDoc(docRef).then((response) => {
        this.$store.dispatch('updateUserProfile', response.data())
        this.showLoader = false
      })
    },
    getVCard() {
      let vCard = `BEGIN:VCARD\nVERSION:4.0\nFN:${this.userProfile.displayName}\nEMAIL:${this.userProfile.email}\nTEL:${this.userProfile.phone}\nURL;type=pref:http://localhost:8080/profile/${this.userProfile.uid}\nEND:VCARD`
      console.log(vCard)
      const element = document.createElement('a')
      const file = new Blob([vCard], {
        type: 'text/plain',
      })
      element.href = URL.createObjectURL(file)
      element.download = 'myFile.vcf'
      document.body.appendChild(element)
      element.click()
    },
  },
  watch: {
    loader(oldVal, newVal) {
      console.log(oldVal, newVal)
      this.getUserData()
    },
  },
  mounted() {
    this.showLoader = true
    this.getUserData()
  },
}
</script>

<style lang="scss" scoped>
.home {
  background: url('@/assets/images/Lines.png');
  background-size: cover;
  min-height: 100vh;
  padding-top: 20px;
  background-position: center center;
}

.addToContactBtn {
  position: sticky;
  width: 100%;
  padding: 15px 0;
  bottom: 0;
  border: 0 !important;
  background: #eb8d2b !important;
}
</style>
