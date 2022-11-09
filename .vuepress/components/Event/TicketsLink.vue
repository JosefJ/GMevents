<!--
  Created by: Carlos E. Salazar <ce.salazar@gmail.com>
  Edited by: Jan Miksik <https://github.com/jan-miksik>
  Repository: https://github.com/cesalazar/berlinblockchainweek
  License: MIT
-->

<template>
  <div :class="['ticket--container', {'ticket--container--vertical': isVertical}]">
    <!-- Ticket price -->
    <span class="ticket--price">
      Cost:&nbsp;{{ price }}
    </span>

    <!-- Link to ticket sale -->
    <span v-if="tickets" class="ticket--website">
      <ExternalLink
        :url="tickets"
        caption="Website"
        indicator="true"
      />
    </span>
  </div>
</template>

<script>
import ExternalLink from '../Utils/ExternalLink'

export default {
  components: { ExternalLink },
  props: {
    event: {
      type: Object,
      default: null,
    },
  },
  computed: {
    price () {
      let price = (this.event && this.event.frontmatter.price) || this.$page.frontmatter.price
      if (!price || price === 0) {
        return 'Free'
      }
      price += ' €'
      return price
    },
    tickets () {
      return this.event && this.event.frontmatter.tickets || this.$page.frontmatter.tickets
    },
    isVertical () {
      return !this.event
    }
  }
}
</script>

<style lang="stylus">
@import './../../theme/styles/config.styl'

.ticket--container
  gap: 0.7rem
  display: flex

  &--vertical
    flex-direction: column
    gap: 0.3rem

.ticket--price
  // margin-right 1em

.ticket--website
  a
    color $primaryAccentColor
</style>
