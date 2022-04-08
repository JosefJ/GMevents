<template>
  <div class="pcc">
    <div class="pcc_info">
      <div class="pcc_info_venues">
        Venues
      </div>
      <h2 class="pcc_info_title">
        Prague Congress Center
      </h2>
      <div class="pcc_info_description">
        Large neofunctionalist building built in 1981 which is currently the largest congress center venue in Czech Republic.
      </div>

      <div class="pcc_info_buttons">
        <button class="primary-btn">
          <img src='./../../public/arrow.svg' alt="instagram" class="pcc_info_button_arrow_prev"/>
          prev
        </button>

        <button class="primary-btn">
          next
          <img src='./../../public/arrow.svg' alt="instagram" class="pcc_info_button_arrow_next"/>
        </button>
      </div>
    </div>

    <div class="pcc_image">
      <img src="./../../public/prague_congress_center.png" height="445" width="369" alt="prague congress center" />
    </div>

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

.pcc
  color #fff
  display flex
  align-items center
  justify-content center
  margin 6rem 0
  padding 0 $sidesPadding

  &_info
    max-width: 840px
    width: 100%
    padding 60px
    background-color #1A191D

  &_info_venues
    padding 5px 20px
    background #21253359
    color #566477
    margin-bottom 30px
    width fit-content

  &_info_title
    font-size 30px
    font-weight bold
    margin-bottom 5px
    border-bottom none

  &_info_description
    font-size 16px
    line-height 20px
    margin-bottom 33px
    max-width 415px
  
  &_info_button_arrow_prev
    margin-bottom: -1px
    padding-right: 3px

  &_info_button_arrow_next
    transform rotate(180deg)
    margin-bottom: -1px
    padding-left: 3px

  &_image
    margin -15px 0 -50px -50px

  &_info_buttons
    display flex
    gap 7px

.primary-btn
  all unset
  background rgba(0, 255, 224, 0.35)
  padding 5px 15px
  cursor pointer
  line-heigh 14px
  color #69E2D5
  font-famil 'Oxygen Mono', monospace
  font-size 14px
  border-radius 2px
  &:hover
    background rgba(0, 255, 224, 0.6)

</style>