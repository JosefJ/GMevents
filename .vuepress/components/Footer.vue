<template>
  <div class="footer">
    <div class="footer_left">
      <div class="footer_left_socials">
<!--        <a href="#" class="footer_left_socials_link">-->
<!--          <img src='./../public/fb.svg' alt="facebook" />-->
<!--        </a>-->
<!--        <a href="#" class="footer_left_socials_link">-->
<!--          <img src='./../public/instagram.svg' alt="instagram" />-->
<!--        </a>-->
        <a href="https://twitter.com/ethprague" class="footer_left_socials_link">
          <img src='./../public/twitter.svg' alt="twitter" />
        </a>
      </div>
      <div>
        <span v-for="link in footer">
          <a :href="link.url" class="footer_left_link">
            {{ link.text }}
          </a>
        </span>
      </div>
      <div>
        2022 PWN AG
      </div>
    </div>

    <div class="footer_right">
      <div class="footer_right_hash">
        #GMevents
      </div>
      <div class="footer_right_powered-by">
        Powered by
      </div>
      <div>
        <img src='./../public/pwn_logo.svg' alt="pwn logo" height="35" width="110" />
      </div>

    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      footer: [{
        url: '/legal/privacy-policy/', 
        text: 'Privacy policy'
        }]
      }
  },
}
</script>

<style lang="stylus">
@import '../theme/styles/config.styl'

.footer
  border-top 1px solid #212533
  color #fff
  display flex
  flex-wrap wrap
  row-gap 1.5rem
  justify-content space-between
  padding 5rem $sidesPadding
  background #100e14

  &_left
    color #D0D5DD
    font-size 18px
    line-height 26px
    display flex
    flex-direction column
    gap: 1.5rem;
    width: 290px;

  &_left_socials
    display flex
    gap 1rem

  &_left_socials_link
    cursor pointer

  &_left_link
    color #fff
    border-bottom #05CFB959 1px solid
    font-size 20px
    padding-bottom 2px

  &_right
    display flex
    flex-direction column

  &_right_hash
    font-size 32px
    font-weight 600
    line-height 38px
    text-align right
    margin-bottom 25px

  &_right_powered-by
    font-family: 'Oxygen Mono', monospace;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    text-align: left;
    margin: 0.3rem 0.3rem;

@media(min-width: 555px)
  .footer
    &_right
      align-items flex-end

    &_right_powered-by
      margin: 0.3rem 1.3rem;

</style>





