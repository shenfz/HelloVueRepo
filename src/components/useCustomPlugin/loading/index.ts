// 1. 插件支持 对象形式，要有 install 实现
// 2. 插件支持 函数形式

import type {App,  VNode} from "vue";
import Loading from "./index.vue";
import {createVNode, render} from "vue";
//   vue规定 插件的形式
//  在 main.ts `app.Use(Loading)`

// 1. 转换成 VNode 才能读到一些属性、方法
export default {
    install(app: App) {
       const vnode:VNode = createVNode(Loading)
        render(vnode,document.body)
        app.config.globalProperties.$useLoading = {
           show:vnode.component?.exposed.show,
           hidden:vnode.component?.exposed.hidden,
        }
    }
}
