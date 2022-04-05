<template>
  <div>
    <a class="btn btn1" block :href="href">{{ btnbrownText }}</a>
  </div>
</template>
<script>
export default {
  props: ["btnbrownText", "href"],
};
</script>
<style scoped>
.btn {
  border: 1px solid #eb8d2b;
  background: none;
  padding: 8px 110px;
  font-size: 14px;
  font-family: var(--font-primary);
  position: relative;
  overflow: hidden;
  transition: 0.8s;
  text-transform: capitalize;
}

.btn1 {
  color: #eb8d2b;
}

.btn1:hover {
  color: #fff;
  z-index: 99 !important;
}

.btn::before {
  content: "";
  position: absolute;
  left: 0%;
  width: 100%;
  height: 0%;
  background: #eb8d2b !important;
  z-index: -1 !important;
  transition: 0.8s;
}

.btn1::before {
  top: 0;
  border-radius: 0 0 50% 50%;
}

.btn1:hover::before {
  height: 180%;
}
</style>
