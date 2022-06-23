<template>
  <div class="new-link-modal">
    <b-modal id="file-upload-modal" centered>
      <template #modal-header="{ close }">
        <div class="d-flex align-items-center justify-content-between w-100">
          <h5 class="mb-0">Upload Files</h5>
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
          <b-form-file id="profile" :state="Boolean(file)" v-model="file" />
        </b-form-group>
        <b-form-group
          id="input-group-1"
          label="File Title"
          class="mt-3"
          label-for="input-1"
        >
          <b-form-input
            id="input-1"
            type="text"
            v-model="title"
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
            @click="uploadFile(), close()"
          >
            Upload
          </b-button>
        </b-form-group>
      </template>
    </b-modal>
  </div>
</template>
<script>
import { getAuth } from 'firebase/auth'
import { doc, updateDoc, getDoc } from 'firebase/firestore'
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage'
export default {
  data() {
    return {
      title: null,
      file: null,
    }
  },
  methods: {
    uploadFile() {
      if (!this.title) return
      if (!this.file) return
      this.$store.dispatch('showLoader', true)
      const auth = getAuth()
      const user = auth.currentUser
      const storage = getStorage()
      let fileUrl = ''
      const metadata = {
        contentType: this.file.type,
      }
      let regex = new RegExp('[^.]+$')
      let extension = this.file.name.match(regex)
      const storageRef = ref(storage, `userFiles/${this.title}.${extension[0]}`)
      uploadBytes(storageRef, this.file, metadata).then(() => {
        getDownloadURL(
          ref(storage, `userFiles/${this.title}.${extension[0]}`)
        ).then((url) => {
          const xhr = new XMLHttpRequest()
          xhr.responseType = 'blob'
          xhr.open('GET', url)
          xhr.send()
          fileUrl = url

          const docRef = doc(this.$db, 'users', user.uid)

          getDoc(docRef).then((response) => {
            updateDoc(doc(this.$db, 'users', user.uid), {
              userFiles: [
                ...response.data().userFiles,
                { link: fileUrl, title: this.title, extension: extension[0] },
              ],
            }).then(() => {
              this.title = null
              this.file = null
              this.$store.dispatch('showLoader', false)
            })
          })

          console.log(docRef, 'it is working@888')
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
