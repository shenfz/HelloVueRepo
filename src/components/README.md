# Components
> 练习vue特性用的组件
## 目录
* [useBindAndModel](./useBindAndModel)
> 绑定事件及监听 `v-bind` `v-model`
* [useComputed](./useComputed)
> 计算属性 `computed`
* [defineProps](./defineProps)
> 父组件给子组件传参 `defineProps`
* [defineEmits](./defineEmits)
> 子组件给父组件传值 绑定事件触发 `defineEmits`，类似于订阅发布
* [defineExpose](./defineExpose)
> 父组件读取子组件的属性值和方法   `defineExpose` ,常用场景 ，子组件表单，暴露各种验证和清空方法给父组件使用
* [onMounted](./onMounted)
> dom元素各种 加载/卸载/更新 的钩子函数
* [useRefs](./useRefFamily)
> `ref`和`reactive`家族，一系列使用
* [useSlots](./useSlots)
>  使用插槽 匿名，具名，作用域，和动态插槽
* [useWatchFamily](./useWatchFamily)
> 侦听函数使用 `watch` and  `watchEffect`
* [useClass](./useClass)
> vue中使用类 `构造函数`
* [globalComponent](./globalComponent)
> 注册及使用全局组件，很多ui库都使用了批量注册
* [recursionComponent](../recursionComponent)
> 使用递归组件
* [dynamicComponents](../dynamicComponents)
> 动态组件的两种书写方式 `组件注册`||`字符串`，
> 使用场景：同页面下的多tab（也能使用路由和v-if的形式）
* [useAsyncComponents](../useAsyncComponents)
> 使用异步组件可以在构建时期`进行分包`,即异步部分可以从主包js中拆解出来
> 好处是： **减少首屏加载时间，常用作性能优化**
* [useTeleport](./useTeleport)
> 传送组件 , 使得 子组件 与 父级组件 同级
> 使用场景: 为了使 子级组件的位置定位不受父级组件影响，可以使用`teleport`
* [useKeepLive](./useKeepLive)
> 使用`keep-live`包裹组件，可选包裹组件项或者最多包裹数，同时卸载触发的生命周期钩子也不同
* [useTransition](./useTransition)
> 内置的过渡动画组件，通过多个加载态，css展示
* [useProviderAndInject](./useProviderAndInject)
> 依赖注入 `provider` `inject`
> 使用场景: 孙子组件获取到爷爷组件绑定到的属性，可修改，也可设定成`readonly`
* [useMitt](./useMitt)
> 发布订阅模式设计， 使用mitt包，管理事件注册和触发  `npm install mitt -S`
```ts
// main.ts 初始化
// 必须拓展ComponentCustomProperties 才能获得类型提示
const Mit = mitt()
declare module 'vue' {
    export interface  ComponentCustomProperties {
        $Bus: typeof Mit
    }
}
// 挂载全局API
app.config.globalProperties.$Bus = Mit
```
* [useTsx](./useTsx)
> react 的模板是基于tsx，安装插件后，在vue3中使用tsx编写组件 
> `yarn add @vitejs/plugin-vue-jsx -D` 
>  `App.jsx`

* [useCustomOrder](./useCustomOrder)
> 使用自定义指令 ,实现vue的生命钩子和 `Directive`
> 常用场景: 鉴权按钮

* [useCustomPlugin](./useCustomPlugin)
> 使用自定义插件 涉及 `defineExpose` 暴露方法，实现 `install`
> 例如封装一个 `loading`加载提示框 ，可供全局调用
> 做成全局可用的方式，以插件的形式 `app.Use(Loading)`

## 模板语法
* 支持表达式，三元等等
```ts
 {{ number + 1}}
 {{ enable?'yes':'no'}}
  {{ null || "xxx"}}
```
## 全局访问
* 全局访问受限，可以显式添加在  `app.config.globalProperties`
* 从声明global上，属性附加完成的APP 给 window.app
```ts
// types/global.d.ts
   declare global{
     interface window {
         app: APP  // APP 附加属性
     }
}
// main.ts
createApp(App).config.globalProperties.app = window.app
```
## 可选链操作符和双问号表达式
```ts
  let a:object = {
    name:"xx",
    detail:{
        birth: "xxx-xx-xx",
        age: 13
    }
 }
console.log(a.name)
// 不清除具备的属性，使用可选链
console.log(a.detail?.age)
// 当前项是 null 或 undefined 则返回双问号后面的表达式
console.log(a.detail?id ?? [] )
```