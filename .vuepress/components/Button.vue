<template>
  <div>
    <NavLink :item="item" :className="className" :extensionalClass="extensionalClass"/>
  </div>
</template>

<script lang="ts">
import NavLink from "../theme/NavLink.vue";

export default {
  components: { NavLink },
  name: "Button",
  props: {
    className: {
      type: String,
      default: "primary-btn",
    },
    extensionalClass: {
      type: String,
      default: "",
    },
    buttonText: {
      type: String,
      default: null,
    },
    to: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      item: {
        items: [],
        link: this.to,
        text: this.buttonText,
        type: "link",
      },
    };
  },
};
</script>

<style scoped>
.custom-link {
  display: flex;
}

.primary-btn {
  background: rgba(primaryAccentColor, 0.35);
  padding: 15px 24px;
  cursor: pointer;
  line-height: 18px;
  border-radius: 2px;
  color: accentColor;
  font-family: "Oxygen Mono", monospace;
  text-decoration: none !important;
  white-space: nowrap;
}

.primary-btn:hover {
  background: rgba(primaryAccentColor, 0.6);
}
</style>
