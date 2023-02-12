<template>
  <div v-if="config.layout === 0" class="banner-main">
    <img class="banner-main_img" :src="config.bannerPath" alt="">
  </div>
</template>

<script>
import Button from "../Button.vue";
import config from "../../config";

export default {
  components: { Button },
  data() {
    return {
      config: config,
    };
  },
};
</script>

<style lang="stylus">
@import '../../theme/styles/config.styl'

.banner-main
  display flex
  align-items center
  justify-content center
  padding-top 7rem

  &_img
    width 100%

</style>
