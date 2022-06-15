<template>
  <router-link
    v-if="!isExternal(link)"
    :class="[className, extensionalClass]"
    :to="link"
    :exact="exact"
  >{{ item.text }}</router-link>
  <a
    v-else
    :href="link"
    :class="[className, 'external', extensionalClass]"
    :target="isMailto(link) || isTel(link) ? null : '_blank'"
    :rel="isMailto(link) || isTel(link) ? null : 'noopener noreferrer'"
  >
    {{ item.text }}
    <!-- <OutboundLink/> -->
  </a>
</template>

<script>
import { isExternal, isMailto, isTel, ensureExt } from './util'

export default {
  name: "NavLink",
  props: {
    item: {
      required: true
    },
    className: {
      type: String,
      default: "nav-link"
    },
    extensionalClass: {
      type: String,
      default: ""
    }
  },
  computed: {
    link () {
      return ensureExt(this.item.link)
    },
    exact () {
      if (this.$site.locales) {
        return Object.keys(this.$site.locales).some(rootLink => rootLink === this.link)
      }
      return this.link === '/'
    }
  },
  methods: {
    isExternal,
    isMailto,
    isTel
  }
}
</script>
