# CssComponents
> 练习css特性的组件

# 目录

## [useScoped](./useStyleScoped)
>  1. 在子组件改变 父组件的样式 使用  `:slotted(.a){}`
>  2. 在父组件，进行样式穿透，影响到子组件 ，使用 `:deep(.f){}`
>  3. v-bind 绑定动态css 属性

## [useStyleModule](./useStyleModule)
> 1.  使用style module模式，通过动态 `:class` 进行绑定
> 2.  使用 `useCssModule` 可以加载css module里面的样式，写 tsx常用