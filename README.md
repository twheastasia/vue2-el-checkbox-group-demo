# 为什么要写这个组件？
> 因为有时候业务需求上展示的内容经常会变，不能直接用展示的内容。所以需要使用一个相对固定、唯一的值应用到代码逻辑里，就像el-select组件那样。
> 原来element ui的CheckboxGroup组件数据，value和label都是同一个值，无法满足需求，所以想要重新封装两个组件。

先挖个坑。。。

# 结语
> 写着写着发现原来是自己不会用。。。
> 只要在元素里填入字符，就会不展示label，此时label就相当于隐藏的唯一字段

```html
<el-checkbox-group v-model="checkList">
  <el-checkbox label="复选框 A">展示值A</el-checkbox>
  <el-checkbox label="复选框 B">展示值B</el-checkbox>
  <el-checkbox label="复选框 C">展示值C</el-checkbox>
  <el-checkbox label="禁用" disabled />
  <el-checkbox label="选中且禁用" disabled />
</el-checkbox-group>
```

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
