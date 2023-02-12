<template>
  <div class="home">
    <Banner />
    <Hero />
    <Venues />
    <Events />
  </div>
</template>

<script>
import NavLink from "./NavLink.vue";
import Button from "../components/Button.vue";
import Hero from "../components/Home/Hero.vue";
import Events from "../components/Home/Events.vue";
import Footer from "../components/Footer.vue";
import Venues from "../components/Home/Venues.vue";
import Banner from "../components/Home/Banner.vue";

export default {
  components: { NavLink, Button, Hero, Footer, Venues, Events, Banner },
};
</script>

<style lang="stylus">

.home
  background url('~/matrix_cube_big.svg')
  background-size cover
  background-position center top
  background-repeat no-repeat
  background-size 100%
  background-position-y 50px

</style>
