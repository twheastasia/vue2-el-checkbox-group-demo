<template>
  <div>
    MG Checkbox Group
    <el-checkbox-group
      v-model="checkList"
      @change="onCheckboxGroupChange"
    >
      <el-checkbox label="复选框 A" >展示值A</el-checkbox>
      <el-checkbox label="复选框 B" >展示值B</el-checkbox>
      <el-checkbox label="复选框 C" >展示值C</el-checkbox>
      <el-checkbox label="禁用" disabled />
      <el-checkbox label="选中且禁用" disabled />
    </el-checkbox-group>
  </div>
</template>

<script>
export default {
  name: 'MgCheckboxGroup',
  model: {
    prop: 'checkListProp',
    event: 'change'
  },
  props: {
    checkListProp: {
      type: Array,
      default: function() {
        return []
      }
    }
  },
  data() {
    return {
      checkList: this.checkListProp
    }
  },
  methods: {
    onCheckboxGroupChange(value) {
      this.$emit('change', value)
    }
  }
}
</script>
