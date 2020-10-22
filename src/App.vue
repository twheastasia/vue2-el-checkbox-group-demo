<template>
  <div id="app">
    <div>
      <mg-radio-group />
      <br>
      <mg-checkbox-group />
    </div>
  </div>
</template>

<script>
import MgRadioGroup from './components/MgRadioGroup.vue'
import MgCheckboxGroup from './components/MgCheckboxGroup.vue'

export default {
  name: 'app',
  components: {
    MgRadioGroup,
    MgCheckboxGroup
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
