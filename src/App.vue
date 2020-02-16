<template>
  <div>
    
    <navbar/>

    <router-view/>
  
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
// import axios from 'axios';

export default {
  components: {
    Navbar
  }
}
</script>

<style lang="scss">

</style>
