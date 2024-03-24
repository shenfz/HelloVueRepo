# 练习
## 模板语法
* 支持表达式，三元等等
```ts
 {{ number+1)}}
 {{ enable?'yes','no'}}
```
* 全局访问受限，但是可以显示添加在  app.config.globalProperties ，例如window上的属性，达到访问效果
* 从声明global上，属性附加完成的APP 给 window.app
```ts
   declare global{
     interface window {
         app: APP  // APP 附加属性
     }
}
   createApp(App).config.globalProperties.app = window.app
```
 