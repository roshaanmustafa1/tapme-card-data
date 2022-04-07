<template>
  <div class="mainheader py-3">
    <div class="container">
      <div class="row">
        <div class="col-4 align-items-center d-flex justify-content-start">
          <b-nav-item class="side-bar"><side-bar></side-bar> </b-nav-item>
        </div>
        <div class="col-4 d-flex align-items-center justify-content-center">
          <a href=""
            ><img
              :src="require('@/assets/images/BlackOrange.png')"
              class="img-fluid"
              alt="logo"
          /></a>
        </div>
        <div
          class="col-4 text-end d-flex align-items-center justify-content-end"
        >
          <b-button variant="outline-warning" size="sm">Logout</b-button>
          <!-- <BaseButtonBlack /> -->
        </div>
      </div>
    </div>
    <div class="side-cart-btn"><side-bar></side-bar></div>
  </div>
</template>

<script>
import SideBar from "@/components/SideBar";
export default {
  components: { SideBar },
};
</script>

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
  width: 80px;
}

.side-bar {
  display: flex;
  justify-content: center;
  align-items: center;
}

.mainheader .nav-link {
  padding: 0;
}

.side-cart-btn {
  display: none !important;
}
</style>
