<template>
  <div class="mainheader py-3">
    <div class="container">
      <div class="row">
        <div class="col-6 align-items-center d-flex">
          <a href=""
            ><img
              :src="require('@/assets/images/logobrown.png')"
              class="img-fluid"
              alt="logo"
          /></a>
        </div>
        <div class="col-6 text-end">
          <b-button variant="outline-warning" size="sm">Logout</b-button>
          <!-- <BaseButtonBlack /> -->
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.mainheader {
  background-color: #2c2c2c;
}

.btn-outline-warning {
  color: #eb8d2b !important;
  border-color: #eb8d2b !important;
}

.mainheader svg.bi-list.b-icon.bi {
  fill: white;
  font-size: 32px;
}
.img-fluid {
  max-width: 100%;
  height: auto;
  width: 60px;
}
</style>
