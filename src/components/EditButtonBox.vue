<template>
  <div class="new-link-modal">
    <b-modal id="modalPopover" centered>
      <template #modal-header="{ close }">
        <div class="d-flex align-items-center justify-content-between w-100">
          <h5 class="mb-0">Add Links</h5>
          <b-button size="sm" variant="outline-danger" @click="close()">
            <b-icon icon="x"></b-icon>
          </b-button>
        </div>
      </template>
      <div>
        <b-form-group
          id="input-group-3"
          label="Select Social Account"
          label-for="input-3"
        >
          <b-form-select
            id="input-3"
            class="form-select"
            :options="links"
            v-model="type"
            value="null"
            required
          ></b-form-select>
        </b-form-group>
        <b-form-group
          id="input-group-1"
          label="Profile URL"
          class="mt-3"
          label-for="input-1"
          description="Example: https://facebook.com/Tapme"
        >
          <b-form-input
            id="input-1"
            type="text"
            v-model="link"
            placeholder="Paste here"
            required
          ></b-form-input>
        </b-form-group>
      </div>
      <template #modal-footer="{ close }">
        <b-form-group class="mt-3">
          <b-button
            id="btn-1"
            type="submit"
            variant="primary"
            class="w-100"
            data-dismiss="modal"
            @click="addNewAccount(), close()"
          >
            Add
          </b-button>
        </b-form-group>
      </template>
    </b-modal>
  </div>
</template>
<script>
import { getAuth } from 'firebase/auth'
import { doc, updateDoc, getDoc } from 'firebase/firestore'

export default {
  data() {
    return {
      link: null,
      type: null,
      links: [
        { text: 'Links', value: null },
        { text: 'Facebook', value: 'facebook' },
        { text: 'Twitter', value: 'twiiter' },
        { text: 'Discord', value: 'discord' },
        { text: 'Instagram', value: 'instagram' },
        // { text: 'Snapchat', value: 'snapchat' },
        // { text: 'tiktok', value: 'tiktok' },
      ],
    }
  },
  methods: {
    addNewAccount() {
      if (!this.link) return
      else if (!this.type) return
      const auth = getAuth()
      const user = auth.currentUser
      const docRef = doc(this.$db, 'users', user.uid)
      this.$store.dispatch('showLoader', true)
      getDoc(docRef).then((response) => {
        updateDoc(doc(this.$db, 'users', user.uid), {
          userLinks: [
            ...response.data().userLinks,
            { link: this.link, type: this.type },
          ],
        }).then(() => {
          this.type = null
          this.link = null
          this.$store.dispatch('showLoader', false)
          // this.$router.push(`/profile/${user.uid}`)
        })
      })
    },
  },
}
</script>
<style>
.modal-dialog {
  margin: 0 !important;
}
.modal-content {
  height: 100vh;
  border-radius: 0 !important;
}
</style>
