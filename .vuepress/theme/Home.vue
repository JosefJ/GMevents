<template>
  <div class="home">
    <Hero />
    <PragueCongressCenter />
    <Footer />
  </div>
</template>

<script>
import NavLink from './NavLink.vue'
import Button from '../components/Button.vue'
import Hero from '../components/Home/Hero.vue'
import Footer from '../components/Footer.vue'
import PragueCongressCenter from '../components/Home/PragueCongressCenter.vue'

export default {
  components: { NavLink, Button, Hero, Footer, PragueCongressCenter }
}
</script>

<style lang="stylus">

.home
  background url('~/matrix_cube_big.svg')
  background-size cover
  background-position center top
  background-repeat no-repeat
  background-size 100%
  background-position-y 92px

</style>







