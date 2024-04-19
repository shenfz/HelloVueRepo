import { createApp } from 'vue'
//import './style.css'
import App from './App.vue'
import Loading  from "@components/useCustomPlugin/loading";
import mitt from "mitt";
import {LoadT} from "@components/useCustomPlugin/loading/loading";

const app = createApp(App)
// ===============================》 1.注册全局组件
// app.component('globalHead',GlobalHeadComponent)

// ================================》 2. ts注册 mitt
// 必须拓展ComponentCustomProperties 才能获得类型提示
// 发布订阅模式设计， 使用mitt包，管理事件注册和触发
const Mit = mitt()
declare module 'vue' {
    export interface ComponentCustomProperties {
        $Bus: typeof Mit
    }
}
// 挂载全局API
app.config.globalProperties.$Bus = Mit


// ====================================》 3. 使用全局函数及变量
// 3.1 任何一个vue组件都可直接使用  eg: <div> {{ $env }}</div>
app.config.globalProperties.$env = 'dev'
// 3.2 template中使用: <div> {{ $filters.format('xxx') }}</div>

/* 3.3 script中使用：
*   import {getCurrentInstance} from 'vue'
*   const app = getCurrentInstance()
*   console.log(app?.proxy?.$filter.format('ts'))
* */
app.config.globalProperties.$filter = {
    format<T> (str:T) {
        return `xm-${str}`
    }
}
// 3.4 ts 中使用需扩充
type Filter = {
    format<T>(str:T):string
}
declare module 'vue' {
    export interface ComponentCustomProperties {
        $env:     string
        $$filter:  Filter
    }
}

//=========================================> 4. 自定义封装插件
declare module 'vue' {
    export interface ComponentCustomProperties {
        // 为了方便有类型提示
        $useLoading:     LoadT

    }
}
// app.use(Loading)



app.mount('#app');