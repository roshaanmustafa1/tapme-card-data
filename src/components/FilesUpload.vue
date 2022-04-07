<template>
  <div
    class="social-links-main justify-content-center d-flex flex-column align-items-center my-2 px-5 text-center"
  >
    <div class="name-field">
      <h2>Contact With Us</h2>
    </div>
    <div class="upload-btns">
      <div class="user-links col-12">
        <brown-btn
          href="https://bootstrap-vue.org/docs/components/navbar"
          btnbrownText="My Resume"
        />
      </div>
      <div class="user-links col-12">
        <black-btn
          href="https://bootstrap-vue.org/docs/components/navbar"
          btnText="Bank Details"
        />
      </div>
    </div>
  </div>
</template>

<script>
import BlackBtn from "./BlackBtn.vue";
import BrownBtn from "./BrownBtn.vue";
export default {
  components: { BlackBtn, BrownBtn },
};
</script>

<style lang="scss" scoped>
.social-links-main {
  box-shadow: 0px 5px 15px 0px rgb(62 65 159 / 20%);
  margin: 20px 20px !important;
  padding: 40px 20px !important;
  border-radius: 10px;
  background: #f7f7f7;
}

.upload-btns .user-links {
  padding: 5px 0px;
}
</style>
