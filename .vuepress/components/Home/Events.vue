<template>
  <div class="events-home">
    <div class="events-home_content">
      <div class="events-home_title-row">
        <div class="events-home_title">
          Events
        </div>
        <Button buttonText="All" to="/events/" className="btn-all"/>
      </div>

      <EventsListHome />

    </div>
  </div>
</template>

<script>
import Button from "../Button.vue";
import EventsListHome from "../EventsListHome.vue";

export default {
  components: { Button },
};
</script>

<style lang="stylus">
@import '../../theme/styles/config.styl'

.events-home
  padding 0 $sidesPadding
  color #fff
  display flex
  flex-direction column
  align-items center
  // height 100vh
  background linear-gradient(0deg, rgba(4, 166, 148, 0.9) 23.22%, rgba(4, 145, 130, 0) 87.28%)

  &_content 
    max-width $pageContentMaxWidth
    width: 100%;
  
  &_title-row
    display flex
    justify-content space-between
    margin 3rem 0 6rem
    width 100%

  &_title
    font-size: 30px;
    font-weight: 600;
    line-height: 38px;

  &_headline
    font-size 120px
    line-height 120px
    text-align center
    width 55rem
    margin-bottom 2rem

.btn-all 
  background rgba($primaryAccentColor, 0.35)
  padding 5px 10px
  cursor pointer
  line-height 18px
  border-radius 2px
  border 1px solid rgba($accentColor, 0.35);
  color $accentColor
  font-family 'Oxygen Mono', monospace

  &:hover 
    background: rgba($primaryAccentColor, 0.6)

@media(min-width: $MQMobile)
  .events-home
    padding 0 $sidesPaddingDesktop

</style>
