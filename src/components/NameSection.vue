<template>
  <div
    class="namesection justify-content-center d-flex flex-column align-items-center my-2 px-5 text-center"
  >
    <div class="profile-img">
      <b-img
        :src="userProfile.avatar"
        class="img-fluid"
        rounded="circle"
        alt="Circle image"
      ></b-img>
    </div>

    <div class="name-field">
      <h2>{{ userProfile.displayName }}</h2>
    </div>
    <span class="horizontal-line"></span>
    <div class="short-description">
      <p>
        {{ userProfile.desc }}
      </p>
    </div>
    <span class="horizontal-line"></span>

    <div class="contact-btns">
      <div class="contact-icons">
        <b-icon icon="telephone" aria-hidden="true" scale="1.2"></b-icon>
      </div>
      <div class="contact-icons">
        <b-icon icon="envelope" aria-hidden="true" scale="1.2"></b-icon>
      </div>
      <div class="contact-icons">
        <b-icon icon="globe2" aria-hidden="true" scale="1.2"></b-icon>
      </div>
      <div class="contact-icons">
        <b-icon icon="geo-alt" aria-hidden="true" scale="1.2"></b-icon>
      </div>
    </div>
    <div class="edit-btn">
      <edit-button
        class="mt-4"
        btnbrownText="Edit button"
        v-b-modal.modalPopover
      ></edit-button>

      <edit-button-box></edit-button-box>
    </div>
  </div>
</template>

<script>
import EditButtonBox from '@/components/EditButtonBox.vue'
import EditButton from './EditButton.vue'
import { mapState } from 'vuex'
export default {
  components: { EditButton, EditButtonBox },
  computed: {
    ...mapState(['userProfile']),
  },
}
</script>

<style lang="scss" scoped>
.contact-btns .contact-icons {
  padding: 0px 00px;
  border: 2px solid;
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #2c2c2c;
  border-radius: 50%;
}
.contact-btns .contact-icons svg {
  color: #eb8d2b;
}
.contact-btns .contact-icons:hover svg {
  color: black !important;
}

.contact-btns .contact-icons:hover {
  background: #eb8d2b;
}

.contact-btns {
  display: flex;
  column-gap: 15px;
  margin-top: 20px;
}

.profile-img {
  width: 110px;
  //   box-shadow: 0px 0px 30px -1px rgba(235, 141, 43, 0.75) !important;
  box-shadow: 0px 5px 13px 5px rgb(0 0 0 / 20%) !important;
  border-radius: 50%;
  margin-bottom: 40px;
}

.namesection {
  box-shadow: 0px 5px 15px 0px rgb(62 65 159 / 20%);
  margin: 0px 20px !important;
  padding: 40px 20px !important;
  border-radius: 10px;
  z-index: 10;
  background-color: #f7f7f7;
  border: 1px solid #8080802b;
  h2 {
    color: black;
  }
}
.horizontal-line {
  width: 80%;
  height: 1px;
  background-color: #000000;
}

.editbutton-disable {
  display: none !important;
}
</style>
