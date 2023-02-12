<template>
  <div v-if="config.layout === 1" class="hero-main">
    <div class="hero-main_headline-date">
      {{ subheading }}
    </div>
      <div class="hero-main_headline">
      {{ heading }}
    </div>
    <Button buttonText="See Events" to="/events/" />
  </div>

  <div v-else-if="config.layout === 0" class="hero-main">
    <div class="hero-main_headline">
      {{ heading }}
    </div>
    <div class="hero-main_headline-date">
      {{ subheading }}
    </div>
    <Button class="hero-main_button" buttonText="Submit Event" :to="this.config.sumbitEventLink" />
  </div>
</template>

<script>
import config from "../../config";
import Button from "../Button.vue";

export default {
  components: { Button },
  data: () => ({
    heading: config.heading,
    subheading: config.subHeading,
    config: config,
  }),
};
</script>

<style lang="stylus">
@import '../../theme/styles/config.styl'

.hero-main
  color #fff
  display flex
  flex-direction column
  align-items center
  justify-content center
  padding 255px 0 0 0
  width 100%

  &_headline-date
    font-size 22px
    line-height 28px
    margin-bottom 1rem

  &_headline
    font-size clamp(3rem, calc(-0.875rem + 8.333vw), 10.5rem)
    text-align center
    max-width 55rem
    margin-bottom 2rem

  &_button
    padding-top 3rem
</style>
