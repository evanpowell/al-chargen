<template>
  <div>

    <navbar/>

    <router-view/>
  
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import axios from 'axios';

export default {
  components: {
    Navbar
  },
  mounted() {
    axios.get('/api/rulebook')
      .then(({ data }) => {
        console.log(data);
        
        console.log(this.convertLibArrayToObject(data.ancestriesLib));
        console.log(this.convertLibArrayToObject(data.attributesLib));
      });
  },
  methods: {
    convertLibArrayToObject(libArray) {
      const libObject = {};
      libArray.forEach((libItem) => {
        const { libId, value } = libItem;
        libObject[libId] = value;
      });

      return libObject;
    }
  }
}
</script>

<style lang="scss">

</style>
