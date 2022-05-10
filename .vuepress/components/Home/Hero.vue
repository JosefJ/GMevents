<template>
  <div class="hero-main">
    <div class="hero-main_headline-date">
      3. June - 12. June 2022
    </div>
      <div class="hero-main_headline">
        GM PRAGUE 2022
    </div>
    <Button buttonText="See Events" to="/events/" />
  </div>
</template>

<script>
import Button from '../Button.vue'

export default {
  components: { Button },
}
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

</style>







