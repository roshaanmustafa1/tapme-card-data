<template>
  <div
    class="social-links-main justify-content-center d-flex flex-column align-items-center my-2 px-5 text-center"
  >
    <div class="name-field">
      <h2 class="text-black">My Documents</h2>
    </div>
    <div class="upload-btns">
      <div class="user-links col-12">
        <brown-btn
          v-if="authStatus"
          btnbrownText="Upload New File"
          customStyle="mb-2 px-4"
          v-b-modal.file-upload-modal
        ></brown-btn>
        <div v-for="(file, i) in userProfile.userFiles" :key="i">
          <a
            :href="file.link"
            target="_blank"
            class="text-dark uploaded_file"
            download="something"
          >
            {{ file.title }}
          </a>
        </div>
        <bank-details-popup />
      </div>
    </div>
  </div>
</template>

<script>
import BankDetailsPopup from './BankDetailsPopup.vue'
import BrownBtn from './BrownBtn.vue'
import { mapState } from 'vuex'
export default {
  components: { BrownBtn, BankDetailsPopup },
  computed: {
    ...mapState(['userProfile', 'authStatus']),
  },
}
</script>

<style lang="scss" scoped>
.social-links-main {
  box-shadow: 0px 5px 15px 0px rgb(62 65 159 / 20%);
  margin: 20px 20px !important;
  padding: 40px 20px !important;
  border-radius: 10px;
  background: #f7f7f7;
}

.upload-btns {
  width: 80%;
}
.upload-btns .user-links {
  padding: 5px 0px;
}

.bank-detail-disable {
  display: none !important;
}
.uploaded_file {
  text-decoration: none;
  border: 1px solid;
  padding: 5px;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px 0;
}
</style>
