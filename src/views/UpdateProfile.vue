<template>
  <div class="complete-profile px-4">
    <h1 class="my-5 text-center">Update Profile</h1>
    <b-form>
      <b-form-group label="Upload Profile Pic" label-for="profile">
        <b-form-file
          id="profile"
          accept="image/*"
          :state="Boolean(profilePic)"
          v-model="profilePic"
        />
      </b-form-group>
      <b-form-group label="Full Name*" label-for="name" class="mt-3">
        <b-form-input id="name" v-model="name" />
      </b-form-group>
      <b-form-group label="Phone Number*" label-for="phoneNumber" class="mt-3">
        <b-form-input id="phoneNumber" v-model="phoneNumber" />
      </b-form-group>
      <b-form-group label="Email" label-for="email" class="mt-3">
        <b-form-input id="email" v-model="email" />
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
import { getAuth } from "firebase/auth";
import { doc, updateDoc, getDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { mapState } from "vuex";
export default {
  data() {
    return {
      profilePic: null,
      phoneNumber: null,
      description: null,
      email: null,
      name: null,
    };
  },
  computed: { ...mapState(["userProfile", "user"]) },
  mounted() {
    this.getUserData();
  },
  methods: {
    getUserData() {
      const docRef = doc(this.$db, "users", this.user.uid);
      getDoc(docRef).then((response) => {
        this.$store.dispatch("updateUserProfile", response.data());
        this.showLoader = false;
      });
    },
    uploadProfile() {
      const auth = getAuth();
      const user = auth.currentUser;
      const storage = getStorage();
      let imgUrl = "";
      const storageRef = ref(storage, `profile/${user.uid}`);
      uploadBytes(storageRef, this.profilePic).then(() => {
        getDownloadURL(ref(storage, `profile/${user.uid}`)).then((url) => {
          const xhr = new XMLHttpRequest();
          xhr.responseType = "blob";
          xhr.open("GET", url);
          xhr.send();
          imgUrl = url;

          const docRef = doc(this.$db, "users", user.uid);
          this.$store.dispatch("showLoader", true);
          getDoc(docRef).then((response) => {
            let updatedImage =
              this.profilePic !== null ? imgUrl : this.userProfile.avatar;
            let updatedDesc =
              this.description !== null
                ? this.description
                : this.userProfile.desc;
            let updatedPhone =
              this.phoneNumber !== null
                ? this.phoneNumber
                : this.userProfile.phone;
            let updatedEmail =
              this.email !== null ? this.email : this.userProfile.email;
            let updatedName =
              this.name !== null ? this.name : this.userProfile.displayName;
            updateDoc(doc(this.$db, "users", user.uid), {
              avatar: updatedImage,
              desc: updatedDesc,
              phone: updatedPhone,
              email: updatedEmail,
              displayName: updatedName,
            })
              .then(() => {
                this.profilePic = null;
                this.description = null;
                this.phoneNumber = null;
                this.$store.dispatch("showLoader", false);
                this.$router.push(`/profile/${user.uid}`);
                console.log(response, imgUrl, "kdlsjf");
              })
              .catch(() => {
                this.$store.dispatch("showLoader", false);
                this.$router.push(`/profile/${user.uid}`);
              });
          });
        });
      });
    },
  },
};
</script>
