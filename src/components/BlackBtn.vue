<template>
  <div>
    <a :href="href" class="btn btn1"
      ><span class="btnText">{{ btnText }}</span></a
    >
  </div>
</template>
<script>
export default {
  props: ["btnText", "href"],
};
</script>

<style scoped>
.btn {
  border: 1px solid #000;
  background: none;
  padding: 8px 20px;
  font-size: 14px;
  font-family: var(--font-primary);
  position: relative;
  overflow: hidden;
  transition: 0.8s;
  text-transform: capitalize;
}

.btn1 {
  color: #000;
}

.btn1:hover {
  color: var(--brown-primary) !important;
}

.btn::before {
  content: "";
  position: absolute;
  left: 0%;
  width: 100%;
  height: 0%;
  background: #000;
  z-index: 0;
  transition: 0.8s;
}

.btnText {
  z-index: 2;
  position: inherit;
}

.btn1::before {
  top: 0;
  border-radius: 0 0 50% 50%;
}

.btn1:hover::before {
  height: 180%;
}
</style>
