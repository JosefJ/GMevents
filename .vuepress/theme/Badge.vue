<script>
export default {
  functional: true,
  props: {
    type: {
      type: String,
      default: 'tip'
    },
    text: String,
    vertical: {
      type: String,
      default: 'top'
    }
  },
  render (h, { props, slots }) {
    return h('span', {
      class: ['badge', 'badge--' + props.text.toLowerCase(), props.type, props.vertical]
    }, props.text || slots().default)
  }
}
</script>

<style lang="stylus">
@import './styles/config.styl'

.badge
  display inline-block
  height 18px
  // font-size 14px
  font-size 0.9em !important
  color $primaryAccentColor !important
  line-height 18px
  padding 0.3em 0.6em !important
  border-radius 3px
  border 1px solid $primaryAccentColor
  background transparent !important
  &.middle
    vertical-align middle
  &.top
    vertical-align top
  &.tip, &.green
    border-color $primaryAccentColor
  &.error
    border-color #DA5961 //#f66
  &.warning, &.warn, &.yellow
    border-color darken(#ffe564, 35%)

</style>
