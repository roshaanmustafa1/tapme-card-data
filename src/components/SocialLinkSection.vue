<template>
  <div
    class="social-links-main justify-content-center d-flex flex-column align-items-center my-2 px-5 text-center"
  >
    <div class="name-field">
      <h2>Contact Me</h2>
      <span class="horizontal-line"></span>
    </div>
    <div class="edit-btn" v-if="authStatus">
      <edit-button
        class="mt-4"
        styles="customStyle px-3"
        :btnbrownText="
          userProfile.userLinks.length === 0
            ? 'Let\'s Add Some Links'
            : 'Add More Links'
        "
        v-b-modal.modalPopover
      ></edit-button>

      <edit-button-box></edit-button-box>
    </div>

    <div class="container mt-4">
      <div
        class="row social-l-box"
        v-for="(link, index) in userProfile.userLinks"
        :key="index"
      >
        <div class="col-12" v-if="link.type === 'facebook'">
          <div class="social-li-cont-content">
            <a :href="link.link" target="_blank"
              ><b-icon
                icon="facebook"
                aria-hidden="true"
                class="social-li-cont-icon fb"
              ></b-icon>
              Facebook</a
            >
          </div>
        </div>
        <div class="col-12" v-if="link.type === 'instagram'">
          <div class="social-li-cont-content">
            <a :href="link.link" target="_blank">
              <div class="social-li-cont-icon insta">
                <b-icon icon="instagram" aria-hidden="true"></b-icon>
              </div>
              Instagram</a
            >
          </div>
        </div>
        <div class="col-12" v-if="link.type === 'twiiter'">
          <div class="social-li-cont-content">
            <a :href="link.link" target="_blank">
              <div class="social-li-cont-icon twit">
                <b-icon
                  icon="twitter"
                  aria-hidden="true"
                  variant="white"
                ></b-icon>
              </div>
              Twitter</a
            >
          </div>
        </div>
        <div class="col-12" v-if="link.type === 'discord'">
          <div class="social-li-cont-content">
            <a :href="link.link" target="_blank">
              <div class="social-li-cont-icon twit">
                <b-icon
                  icon="discord"
                  aria-hidden="true"
                  variant="white"
                ></b-icon>
              </div>
              Discord</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import EditButtonBox from '@/components/EditButtonBox.vue'
import EditButton from './EditButton.vue'
import { mapState } from 'vuex'
export default {
  components: {
    EditButton,
    EditButtonBox,
  },
  computed: {
    ...mapState(['userProfile', 'authStatus']),
  },
}
</script>
<style lang="scss">
.social-links-main {
  box-shadow: 0px 5px 15px 0px rgb(62 65 159 / 30%);
  margin: 20px 20px !important;
  padding: 40px 20px !important;
  border-radius: 10px;
  background-color: #2c2c2c;
  h2 {
    color: white;
  }

  .name-field {
    display: flex;
    flex-direction: column;
    align-items: center;
    .horizontal-line {
      width: 80%;
      height: 1px;
      background-color: #f7f7f7;
    }
  }

  .social-li-cont-icon {
    height: 36px;
    width: 36px;
    background-color: #0d6efd;
    display: flex;
    align-items: center !important;
    justify-content: center;
    border-radius: 50%;
    position: absolute;
    left: 6px;
    top: 5px;
    svg {
      font-size: 18px;
      fill: white;
    }
    a {
      margin-top: 0px;
    }
  }
  .social-li-cont-content {
    height: 46px;
    background-color: #f7f7f7;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 25px;

    width: 100%;
    transition: 0.2s all ease-in;
    cursor: pointer;
    position: relative !important;
    a {
      text-decoration: none;
      color: #2c2c2c;
      font-size: 18px;
      letter-spacing: 0.5px;
      font-weight: 500;
    }
  }
  .fb {
    background-color: transparent;
    color: #0d6efd;
  }
  .insta {
    background: radial-gradient(
      circle at 30% 107%,
      #fdf497 0%,
      #fdf497 5%,
      #fd5949 45%,
      #d6249f 60%,
      #285aeb 90%
    ) !important;
  }
  .linkedin {
    background-color: #0077b5;
  }
  .twit {
    background-color: #1d9bf0;
  }
}

.row.social-l-box {
  row-gap: 5px;
  margin-top: 10px;
}

.social-li-cont-content:hover {
  transition: 0.2s all ease-in;
  border: 3px solid #eb8d2b;
}
.social-desc {
  p {
    color: #f7f7f7;
  }
}

.customStyle {
  border-radius: 25px !important;
  overflow: hidden;
}
</style>
