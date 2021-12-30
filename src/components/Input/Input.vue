<template>
  <div class="input">
    <InputItem
      v-for="(item, i) in getItems"
      :key="i"
      :item="item"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import InputItem from '@/components/Input/InputItem.vue';

export default {
  name: 'Input',
  components: {
    InputItem
  },
  computed: {
    ...mapGetters(['getItems'])
  }
}
</script>

<style lang="scss">
  .input {
    flex: 1;
    padding: 20px;
    margin: 0 15px;
    border: 2px solid #333333;
  }
</style>
