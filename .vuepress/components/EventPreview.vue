<template>
  <div class="event-preview">
    <!-- Date and time -->
    <div class="event-preview_left-column">
      <div class="event-preview_date">
        <DateTime :date="event.frontmatter.date" :endDate="event.frontmatter.endDate" :time="event.frontmatter.time"
          :endTime="event.frontmatter.endTime"/>
        <Badge slot="after" :text="event.frontmatter.category" />

        <Badge v-if="event.frontmatter.featured" slot="after" :text="'TOP'" />
      </div>

      <div class="event-preview_toggle-description-visibility--mobile">
        <img v-if="isMaximazed === false" height="35" width="35" src="./../public/plus.svg" alt="open" @click="isMaximazed = true"/>
        <img v-else  src="./../public/minus.svg" height="35"  width="35" alt="close" @click="isMaximazed = false"/>
      </div>

    </div>

    <div class="event-preview_right-column">
      <div class="event-preview_content">
        <!-- Event's name -->
        <h2 class="event-preview_name">
          <a class="event-preview_name-link":href="$withBase(event.path)">{{ event.frontmatter.name }}</a>
        </h2>
    
        <!-- Event's description -->
        <p class="event-preview_description" v-if="isMaximazed" >{{ event.frontmatter.description }}</p>
        
        <div class="ticket--container">
        <!-- Ticket price -->
        <span class="ticket--price">
          Cost:&nbsp;{{ price(event) }}
        </span>

        <!-- Link to ticket sale -->
        <span v-if="event.frontmatter.tickets" class="ticket--website">
          <ExternalLink
            :url="event.frontmatter.tickets"
            caption="Website"
            indicator="true"
          />
        </span>
        </div>
      </div>

      <div class="event-preview_toggle-description-visibility--desktop">
        <img v-if="isMaximazed === false" height="35" width="35" src="./../public/plus.svg" alt="open" @click="isMaximazed = true"/>
        <img v-else  src="./../public/minus.svg" height="35"  width="35" alt="close" @click="isMaximazed = false"/>
      </div>
    </div>

    
  </div>
</template>

<script lang="ts">
import DateTime from './Event/DateTime.vue'
import ExternalLink from './Utils/ExternalLink.vue'

export default {
  components: { DateTime, ExternalLink },
  name: "Button",
  props: {
    event: {
      type: Object,
      default: null,
    },
  },
  data () {
    return {
      isMaximazed: false,
      price: (event) =>{
        let price = event.frontmatter.price
        if (!price || price === 0) {
          return 'Free'
        }
        price += ' €'
        return price
      }
    }
  }
};
</script>

<style scoped lang="stylus">
@require './../theme/styles/config.styl'

.event-preview
  display flex
  flex-direction: column
  justify-content space-between
  border-bottom: 1px solid rgba(249, 250, 251, 0.2);
  padding-bottom 2rem

  &_date
    width 100%

  &_content
    width clamp(270px, 480px, 500px)

  &_toggle-description-visibility--desktop,
  &_toggle-description-visibility--mobile
    cursor pointer
    margin 0.7rem 0 0 1rem
  
  &_toggle-description-visibility--desktop
    display none

  &_name
    text-transform uppercase
    font-size clamp(32px, calc(-0.875rem + 6.333vw), 38px)
    font-weight 600
    font-family $primaryFontFamily
    line-height 50px
    margin: 2.5rem 0 1rem
    padding 0
    border: none
  
  &_name-link
    border: none

  &_right-column
    display flex

  &_description
    margin-top 0

  &_left-column
    display flex
    justify-content space-between

@media(min-width: 1100px)
  .event-preview
    flex-direction: row

    &_toggle-description-visibility--desktop
      display block

    &_toggle-description-visibility--mobile
      display none

    &_name
      margin: 0.7rem 0 1.5rem 0

    .ticket--container
      gap: 0.3rem
      display: flex
      flex-direction: column

    .ticket--price
      // margin-right 1em

    .ticket--website
      a
        color $primaryAccentColor
</style>

