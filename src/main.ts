import { createApp } from 'vue'
//import './style.css'
import App from './App.vue'
import mitt from "mitt";

const app = createApp(App)
// 1.注册全局组件
// app.component('globalHead',GlobalHeadComponent)

// 2. ts注册 mitt
// 必须拓展ComponentCustomProperties 才能获得类型提示
const Mit = mitt()
declare module 'vue' {
    export interface ComponentCustomProperties {
        $Bus: typeof Mit
    }
}
// 挂载全局API
app.config.globalProperties.$Bus = Mit

app.mount('#app');