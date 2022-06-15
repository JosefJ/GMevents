<!--
  Created by: Carlos E. Salazar <ce.salazar@gmail.com>
  Edited by: Jan Miksik <https://github.com/jan-miksik>
  Repository: https://github.com/cesalazar/berlinblockchainweek
  License: MIT
-->

<template>
  <p class="date-time" v-if="!isOneLine">
    <slot name="before" />
    {{ datetime }} <br />
    {{monthToView}} <br />
    {{timeToView}}
    <slot name="after" />
  </p>
  <div v-else class="date-time__one-line">
    <slot name="before" />
    {{timeToView}} {{ datetime }} {{monthToView}} {{yearToView}}
    <slot name="after" />
  </div>
</template>
text-align: center;
<script>
export default {
  props: ['date', 'endDate', 'time', 'endTime', 'isOneLine'],
  data: () => ({
    dayNames: [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ],
    monthNames: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    timeToView: "",
    monthToView: "",
    yearToView: "",
  }),
  computed: {
    datetime () {
      // First date of the event
      let date = this.date || this.$page.frontmatter.date
      date = new Date(date)

      // Set the names for both the day and the month
      let day = this.dayNames[date.getUTCDay()]
      let month = this.monthNames[date.getUTCMonth()]
      let year = date.getUTCFullYear()

      // The full date
      let datetime = `${day}, ${date.getUTCDate()}`

      // Last date of the event
      let endDate = this.endDate || this.$page.frontmatter.endDate

      // Set the end date only if defined and different from start date
      if (endDate) {
        endDate = new Date(endDate)
        if (endDate.toJSON() !== date.toJSON()) {
          day = this.dayNames[endDate.getUTCDay()]
          datetime += ` - ${day}, ${endDate.getUTCDate()}`
        }
      }

      // datetime += ` ${month}`
      this.monthToView = month
      this.yearToView = year

      // Starting time
      let time = this.time || this.$page.frontmatter.time
      if (time) this.timeToView += `${time}`

      // Ending time
      let endTime = this.endTime || this.$page.frontmatter.endTime
      if ((endTime && time) && (endTime !== time)) this.timeToView += `-${endTime}`

      return datetime
    }
  }
}
</script>
<style scoped lang="stylus">
@import './../../theme/styles/config.styl'

.date-time
  font-family $primaryFontFamily
  white-space: nowrap
  // font-size: 24px;
  font-size clamp(1.2rem, calc(-0.875rem + 3.333vw), 1.5rem)
  font-weight: 600;
  line-height: clamp(25px, calc(-0.875rem + 4.333vw), 32px);

.date-time__one-line
  font-family $primaryFontFamily
  font-size clamp(1.2rem, calc(-0.875rem + 3.333vw), 1.5rem)
  font-weight: 500;
  line-height: 26px;
  letter-spacing: 0em;
  text-align: center;


</style>