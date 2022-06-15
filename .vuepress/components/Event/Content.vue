<!--
  Created by: Carlos E. Salazar <ce.salazar@gmail.com>
  Edited by: Jan Miksik <https://github.com/jan-miksik>
  Repository: https://github.com/cesalazar/berlinblockchainweek
  License: MIT
-->

<template>
  <div class="content__container">
    <div class="content__button-back-to-events-container">
      <Button buttonText="Back to events" to="/events/" extensionalClass="content__button-back-to-events"/>
    </div>

    <h1 class="content__title">{{ data.name }}</h1>
    <DateTime :isOneLine="true"/>

    <div class="category">
      <Badge :text="capitalizeWord(data.category)"/>
    </div>

    <Synopsis/>

    <div v-if="data.speakers && data.speakers.length > 0">
      <h2>Speakers</h2>
      <Speakers/>
    </div>

    <div class="content__venue"v-if="data.venue || data.address">
      <h2 v-if="Array.isArray(data.address)">Venues</h2>
      <h2 v-else>Venue</h2>
      <MapLink/>
    </div>

    <div class="content__more-info"v-if="data.tickets">
      <h2>More information</h2>
      <TicketsLink/>
    </div>
  </div>
</template>

<script>
import DateTime from './DateTime'
import MapLink from './MapLink'
import Speakers from './Speakers'
import Synopsis from './Synopsis'
import TicketsLink from './TicketsLink'
import { capitalizeWord } from './../../theme/util.js'
import Button from '../Button.vue'
import Badge from '../../theme/Badge.vue'
const debounce = require('debounce')

export default {
  components: { DateTime, MapLink, Speakers, Synopsis, TicketsLink },
  computed: {
    data () {
      return this.$page.frontmatter
    },

    debounce () {
      return debounce(setContentOffset, 100)
    }
  },
  methods: {
    capitalizeWord (word) {
      return capitalizeWord(word)
    }
  },
  mounted () {
    window.addEventListener('load', this.debounce)
    window.addEventListener('resize', this.debounce)
  },
  destroyed () {
    window.removeEventListener('load', this.debounce)
    window.removeEventListener('resize', this.debounce)
  }
}

const setContentOffset = function () {
  let header = document.querySelector('header')
  let hero = document.querySelector('.hero')
  let category = document.querySelector('.category')

  if (!header || !hero || !category) return

  let offset = header.offsetHeight + hero.offsetHeight

  category.style.marginTop = `${offset}px`
}
</script>

<style lang="stylus">
@import './../../theme/styles/config.styl'

.hero
  position absolute
  top $navbarHeight
  left 0

.badge
  margin-left 0 !important
  margin-right 0 !important

.category
  text-align center
  margin 1.5rem 0 3.5rem

h2
  font-family: $primaryFontFamily
  font-size: 20px;
  font-weight: 700;
  line-height: 26px;
  letter-spacing: 0em;
  text-align: left;
  margin 0
  border-bottom none

.content__container
  max-width 620px
  margin auto

.content__button-back-to-events-container
  display flex
  justify-content center
  margin 10rem 0 3.5rem

.content__button-back-to-events
  padding 8px 14px !important

.content__title
  font-family $primaryFontFamily
  font-size clamp(2rem, calc(-0.875rem + 8.333vw), 3.5rem)
  font-weight 500
  text-align center
  text-transform uppercase
  margin-bottom 1.5rem


.content__venue
  display: flex;
  padding 0.7rem 0;
  justify-content: space-between;
  border-bottom: 1px solid;
  border-top: 1px solid;
  margin: 5rem 0 1.75rem;
  align-items: center;
  flex-wrap: wrap;
  gap 1rem
  
  p
    margin 0

.content__more-info
  display: flex;
  justify-content: space-between;
  align-items: center
  flex-wrap wrap
  gap 1rem


</style>
