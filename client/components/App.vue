<template>
  <div id="app">
    <bi-header></bi-header>
    <bi-side></bi-side>
    <transition name="fade" mode="out-in">
      <router-view id="content"></router-view>
    </transition>
  </div>
</template>

<script>
import '../assets/css/common.css'
import BiHeader from '../components/BiHeader'
import BiSide from '../components/BiSide'

export default {
  components: {
    BiHeader,
    BiSide
  }
}
</script>

<style>

</style>
