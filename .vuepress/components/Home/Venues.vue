<template>
  <div v-if="config.layout === 1" class="venues">
    <div class="venues_info">
      <div class="venues_info_tag">
        Venues
      </div>

      <div v-for="venue in config.venues">
        <h2 v-if="venueNum === config.venues.indexOf(venue)" class="venues_info_title">
          {{venue.name}}        
        </h2>
      </div>

      <div v-for="venue in config.venues">
        <div v-if="venueNum === config.venues.indexOf(venue)" class="venues_info_description">
          {{ venue.desc }}
        </div>
      </div>

      <div class="venues_info_buttons">
        <button class="primary-btn" @click="previousVenue()">
          <img src='./../../public/arrow.svg' alt="instagram" class="venues_info_button_arrow_prev"/>
          prev
        </button>

        <button class="primary-btn" @click="nextVenue()" >
          next
          <img src='./../../public/arrow.svg' alt="instagram" class="venues_info_button_arrow_next"/>
        </button>
      </div>

    </div>

    <div class="venues_image-container">
      <div v-for="venue in config.venues">
          <img v-if="venueNum === config.venues.indexOf(venue)" class="venues_image" :src="venue.path" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import Button from "../Button.vue";
import config from "../../config";

export default {
  components: { Button },
  data() {
    return {
      venueNum: 0,
      numOfVenues: config.venues.length,
      config: config,
    };
  },
  methods: {
    nextVenue() {
      if (this.venueNum === this.numOfVenues - 1) {
        this.venueNum = 0;
      } else {
        this.venueNum += 1;
      }
    },
    previousVenue() {
      if (this.venueNum === 0) {
        this.venueNum = this.numOfVenues - 1;
      } else {
        this.venueNum -= 1;
      }
    },
  },
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
    background $accentColor
    color $primaryAccentColor
    width fit-content
    border-radius 2px
    margin-bottom 20px

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
    max-height 100px
    height 80px
  
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
  background rgba($primaryAccentColor, 0.35)
  padding 5px 15px
  cursor pointer
  line-heigh 14px
  color $accentColor
  font-famil 'Oxygen Mono', monospace
  font-size 14px
  border-radius 2px
  &:hover
    background rgba($primaryAccentColor, 0.6)

@media(min-width: 1200px)
  .venues
    flex-flow: row

@media(min-width: $MQMobile )
  .venues
    padding 0 $sidesPaddingDesktop

</style>
