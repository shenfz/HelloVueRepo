# Components
> 练习vue特性用的组件
## 目录
* [useBindAndModel](./useBindAndModel)
> 绑定事件及监听 `v-bind` `v-model`
> v-bind简写 `:`,与各种属性值绑定
 * 可引用变量/结构体 : `"v-bind = obj"`  `":name="name" `
 * 结构属性:  `:name="obj.name"`
 * 函数调用结构: `:title="`list-${var}`"`
 * 数组: `:list="[1,2,3]"`

* [useComputed](./useComputed)
> 计算属性 `computed`
  1. 选项式的 需要实现set 和 get ，允许修改值
  2. 函数式的 只需要实现 getter，但是不允许修改值 ，只读的
  3. 在vue3版本中，v-if和v-for不能同时使用。 【在vue2中v-for的优先级高于v-if ，在vue3版本中v-if优先级高于v-for】 

* [defineProps](./defineProps)
> 父组件给子组件传参 `defineProps` js 与 ts 有不同处
  1. js 需要定义好接收的props 
```js
const props = defineProps({
      title:{
        msg: String,
        default:"默认值"
      },
      arr:[]
})
```
 2. ts 使用 `withDefaults` 特有
  ```ts
withDefaults(defineProps<{
title:string,
arr:number[]
}>(),{
title: () => "默认值",
arr:() =>{
return [0,0,0]
}
})

```
* [defineEmits](./defineEmits)
> 子组件给父组件传值 绑定事件触发 `defineEmits`，类似于订阅发布
 1. 父组件模板写法 `<child-emits @response = callback ></child-emits>` response 是事件名，callback是回调函数(参数与子组件定义的要对应)

* [defineExpose](./defineExpose)
> 父组件 读取子组件 的属性值和方法   `defineExpose` 
> 常用场景 ,子组件表单，暴露各种验证和清空方法给父组件使用
 
* [onMounted](./onMounted)
> dom元素各种 加载/卸载/更新 的钩子函数 `总计八种`
> v-if 处理的组件会触发 dom的加载和卸载，对应钩子会执行
```ts
// 创建完成
onMounted(() =>{
    console.log(' onMounted ')
})
```

* [useRefs](./useRefFamily)
> `ref`和`reactive`家族，一系列使用
>  `ref`和`reactive` 区别： ref修改只能通过 obj.value.xx = xx ,reactive修改通过 obj.xx = xx
>  `reactive` 会判定传入对象是否为obj，这些类型会直接返回【number,string,bool.symbol,undef】
> `reactive`  可重入  即 reactive对象多次使用reactive(obj)，没意义（直接返回） => eg: reactive(reactive({}))
> `reactive` 对象是 proxy ，没意义（直接返回）
> `reactive` 对象 可叠加 `readonly`属性  => eg: readonly(reactive({})
 
 1. [refs.vue](./useRefFamily/refs.vue)): ref \ isRef \ shallowRef 
 2. [refDom.vue](./useRefFamily/refDom.vue) : 获取dom元素  绑定ref
 3. [customRef.vue](./useRefFamily/customRef.vue): 自定义 实现响应式 `customRef` 实现get/set
 4. [toRef.vue](./useRefFamily/toRef.vue): 针对响应式对象，提取某项值做单独修改，如果是非响应式，则不做任何操作
 5. [shallowReactive.vue](./useRefFamily/shallowReactive.vue):  shallowReactive 只支持浅层修改
 6. [reactive.vue](./useRefFamily/reactive.vue):   响应式，支持深度修改和不加value读取


* [useSlots](./useSlots)
>  使用插槽 `匿名` ，`具名`，`作用域`，和`动态插槽`
  1. 匿名插槽
  2. 具名插槽 ，可以v-slot简写为#
  3. 作用域插槽 ， 父组件可以拿到子组件的数据
  4. 动态插槽

* [useWatchFamily](./useWatchFamily)
> 1. 侦听函数使用 `watch` ,监听多个值，配置选项
```ts
// 多个值监听  
watch([msg,msg1],(newVal,oldVal)=>{
    // 新旧值  也是数组
    console.log(newVal,oldVal)
},{
    deep:true,  // 开启深度层级侦听
    immediate:true, // 先把watch 中的 callback 调用一次
    flush:'pre' // pre: 组件更新之前执行，sync:同步执行，post:组件更新之后执行
})
```
> 2. 高级侦听  `watchEffect`  **会自动计算影响的值，并自动侦听**
```ts
let msg1 = ref<string>('')
let msg2 = ref<string>('')
// 返回一个停止回调
const stop = watchEffect((oninvalidate) =>{
  // 调用之前执行的函数
  // 场景： 防抖，清除接口
  oninvalidate(() =>{
    console.log('before exec')
  })
  // 自动监听受影响的ref
  console.log("====> msg1: ",msg1.value)
  console.log("====> msg2: ",msg2.value)
},{
  flush:'post' // 页面dom 加载完成后再执行监听里面的内容
})
```

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
