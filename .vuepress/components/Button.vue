<template>
  <div>
    <NavLink :item="item" :className="className"/>
  </div>
</template>

<script lang="ts">
import NavLink from '../theme/NavLink.vue'

export default {
  components: { NavLink },
  name: "Button",
  props: {
    className: {
      type: String,
      default: "primary-btn"
    },
    buttonText: {
      type: String,
      default: null,
    },
    to: {
      type: String,
      default: '',
    },
  },
  data () {
    return {
      item: {
        items: [],
        link: this.to,
        text: this.buttonText,
        type: "link",
      },
    }
  },
};
</script>

<style scoped>
.custom-link {
  display: flex;
}

.primary-btn {
  background: rgba(0, 255, 224, 0.35);
  padding: 15px 24px;
  cursor: pointer;
  line-height: 18px;
  border-radius: 2px;
  color: #69E2D5;
  font-family: 'Oxygen Mono', monospace;
}

.primary-btn:hover {
  background: rgba(0, 255, 224, 0.6);
}

</style>