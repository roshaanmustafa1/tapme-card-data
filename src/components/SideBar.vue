<template>
  <div class="sidebar-main">
    <b-button v-b-toggle.sidebar-no-header
      ><b-icon icon="list"></b-icon
    ></b-button>
    <b-sidebar
      id="sidebar-no-header"
      aria-labelledby="sidebar-no-header-title"
      no-header
      shadow
      backdrop
    >
      <template #default="{ hide }">
        <div class="p-3">
          <img
            :src="require('@/assets/images/logobrown.png')"
            class="img-fluid ms-3"
            alt="logo"
            width="100px"
          />
          <div class="row my-3">
            <div class="col-4 d-flex justify-content-center">
              <b-icon icon="facebook" aria-hidden="true"></b-icon>
            </div>
            <div class="col-8">Go to TAPME Shop</div>
          </div>
          <nav class="mb-3">
            <b-nav vertical>
              <b-nav-item active @click="hide">Active</b-nav-item>
              <b-nav-item href="#link-1" @click="hide">Link</b-nav-item>
              <b-nav-item href="#link-2" @click="hide">Another Link</b-nav-item>
            </b-nav>
          </nav>
          <b-button class="ms-3" variant="primary" block @click="hide"
            >Close Sidebar</b-button
          >
        </div>
      </template>
    </b-sidebar>
  </div>
</template>

<style lang="scss" scoped>
.btn-secondary {
  color: #eb8d2b !important;
  background-color: transparent !important;
  border-color: #eb8d2b !important;
}

#sidebar-no-header {
  background-color: #00000059 !important;
}
.btn-secondary:focus {
  box-shadow: none !important;
}
.btn:focus {
  outline: 0;
  box-shadow: none !important;
}

.btn-primary {
  color: #fff;
  background-color: #eb8d2b !important;
  border-color: none !important;
}
</style>
