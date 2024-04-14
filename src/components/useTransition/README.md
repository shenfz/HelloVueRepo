#  过渡组件

## 动画库
* [animate.css](https://animate.style/)
* [gasp](https://gsap.com/)
## 给定name，在style加后缀的形式(六个中间态)
```css
  <transition name="fade">

 .fade-enter-from{
   width: 200px;
   height: 200px;
 }
 .fade-enter-active{
  transition: all 1.5s ease;
 }
 .fade-enter-to{
   width: 200px;
   height: 200px;
   transform: scale(2);
   background: #213547;
 }

 .fade-leave-from{
   width: 200px;
   height: 200px;
 }
 .fade-leave-active{
   transition: all 2s ease-in-out;
 }
 .fade-leave-to{
   width: 200px;
   height: 200px;
   transform: scale(2);
   background: #213547;
 }
```
##  使用三方动画库
```vue
//  yarn add animate.css
import "animate.css"
<template>
<transition leave-active-class="animate__animated animate__tada" enter-active-class="animate__animated animate__shakeX">`
  </template>
```
 
## 八个生命钩子  
```text
     @before-enter="EnterForm"
     @enter="enterActive"
     @after-enter="EnterTo"
     @enter-cancelled="EnterCanceled"

     @before-leave="LeaveForm"
     @leave = "Leave"
     @after-leave="AfterLeave"
     @leaveCancelled="LeaveCanceled"
```
## 过渡组 `transition-group`
> 常用 列表的渲染动画
### 过渡组-属性`tag,duration`
```js
`<transition :duration="{enter:500,leave:1000}"> ` 
// 出现过渡动画持续500ms，消失过渡1s
```
###  [useTransitionGroup5.vue](./useTransitionGroup5.vue)
> Demo   : 二位列表打乱，加上平面过渡动画
> keyword : `move-class` 
###  [useTransitionGroup6.vue](./useTransitionGroup6.vue)
> Demo   : 数值增长的过渡动画