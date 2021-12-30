<template>
  <div class="result">
    <OutputItem
      v-for="(item, i) in getItems"
      :key="i"
      :item="item"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import OutputItem from '@/components/Output/OutputItem.vue';

export default {
  name: 'Output',
  components: {
    OutputItem
  },
  computed: {
    ...mapGetters(['getItems'])
  }
}
</script>

<style lang="scss">
  .result {
    flex: 1;
    padding: 20px;
    margin: 0 15px;
    border: 2px solid #333333;
  }
</style>
