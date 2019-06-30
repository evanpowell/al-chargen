<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import { mapState } from 'vuex';
import * as axios from 'axios';

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  computed: {
    ...mapState('rulebook', [
      'test'
    ])
  },
  mounted() {
    axios.get('/api/test').then(({ data }) => {
      console.log('response', data);
    })
  }
}
</script>
