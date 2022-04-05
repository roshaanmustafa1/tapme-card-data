<template>
  <div class="home">
    <name-section></name-section>
    <social-link-section></social-link-section>
    <files-upload></files-upload>
  </div>
</template>

<script>
// @ is an alias to /src
import NameSection from "@/components/NameSection";
import SocialLinkSection from "@/components/SocialLinkSection";
import FilesUpload from "@/components/FilesUpload";
export default {
  name: "HomeView",
  components: { NameSection, SocialLinkSection, FilesUpload },
};
</script>
