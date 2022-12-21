<template>
  <div class="venues">
    <div class="venues_info">
      <div class="venues_info_tag">
        Venue
      </div>
      <h2 class="venues_info_title">
        Paralelni Polis
      </h2>
      <div class="venues_info_description">
        The unique crypto-only hacker base which is facilitating a discussion platform for topics related to tech, art and science.
      </div>

      <!-- <div class="venues_info_buttons">
        <button class="primary-btn">
          <img src='./../../public/arrow.svg' alt="instagram" class="venues_info_button_arrow_prev"/>
          prev
        </button>

        <button class="primary-btn">
          next
          <img src='./../../public/arrow.svg' alt="instagram" class="venues_info_button_arrow_next"/>
        </button>
      </div> -->
    </div>

    <div class="venues_image-container">
      <img class="venues_image" src="./../../public/paralelni_polis.png" alt="prague congress center" />
    </div>
  </div>
</template>

<script>
import Button from "../Button.vue";

export default {
  components: { Button },
};
</script>

<style lang="stylus">
@import '../../theme/styles/config.styl'

.venues
  color #fff
  display flex
  align-items center
  justify-content center
  margin 6rem 0
  flex-flow: column-reverse

  &_info, 
  &_image-container
    height: 365px;
    width: 100%;
    box-sizing: border-box

  &_info
    padding 50px $sidesPadding 0
    background-color #1A191D

  &_info_tag
    padding 5px 20px
    background #FF990059
    color #FF9900
    width fit-content
    border-radius 2px

  &_info_title
    font-size 30px
    font-weight bold
    margin-bottom 5px
    border-bottom none
    margin-top 12px

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

  &_image-container
    background-color red

  &_image
    height: 365px;
    width: 100%;
    object-fit: cover
    object-position: center

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

@media(min-width: 1200px)
  .venues
    flex-flow: row

@media(min-width: $MQMobile )
  .venues
    padding 0 $sidesPaddingDesktop

</style>
