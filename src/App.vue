<template>
  <div id="app">
    <div>
      <mg-checkbox-group v-model="checkList" @change="onCheckListChange" />
    </div>
  </div>
</template>

<script>
import MgCheckboxGroup from './components/MgCheckboxGroup.vue'

export default {
  name: 'app',
  components: {
    MgCheckboxGroup
  },
  data() {
    return {
      checkList: ['复选框 C', '选中且禁用']
    }
  },
  methods: {
    onCheckListChange(value) {
      console.log(value)
      console.log(this.checkList)
    }
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
