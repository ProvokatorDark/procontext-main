<template>
  <div id="app">
    <Input />
    <Output />
  </div>
</template>

<script>
import Input from '@/components/Input/Input.vue';
import Output from '@/components/Output/Output.vue';

export default {
  name: 'App',
  components: {
    Input,
    Output
  }
}
</script>

<style lang="scss">
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  body {
    background-color: black;
  }

  #app {
    display: flex;
    flex-flow: row nowrap;
    align-items: flex-start;
    justify-content: space-between;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: #d7d1d1;
    padding: 20px;
  }
</style>
