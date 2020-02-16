<template>
  <div>
    <InstantGeneratorButton />
  </div>
</template>

<script>
// @ is an alias to /src
import InstantGeneratorButton from '@/components/InstantGeneratorButton.vue';

import { mapState } from 'vuex';

export default {
  name: 'home',
  components: {
    InstantGeneratorButton
  }
}
</script>
