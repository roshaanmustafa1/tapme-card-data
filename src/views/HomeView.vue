<template>
  <div class="home">
    <name-section></name-section>
    <social-link-section></social-link-section>
    <files-upload></files-upload>
  </div>
</template>

<script>
// @ is an alias to /src
import NameSection from '@/components/NameSection'
import SocialLinkSection from '@/components/SocialLinkSection'
import FilesUpload from '@/components/FilesUpload'
import { doc, getDoc } from 'firebase/firestore'

export default {
  name: 'HomeView',
  components: { NameSection, SocialLinkSection, FilesUpload },
  mounted() {
    const docRef = doc(this.$db, 'users', this.$route.params.id)
    getDoc(docRef).then((response) => {
      this.$store.dispatch('updateUserProfile', response.data())
      console.log('Document data:', response.data())
    })
  },
}
</script>

<style lang="scss" scoped>
.home {
  background: url('@/assets/images/Lines.png');
  background-size: cover;
  height: auto;
  padding-top: 20px;

  background-position: center center;
}
</style>
