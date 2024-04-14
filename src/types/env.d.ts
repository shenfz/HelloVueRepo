/// <reference types="vite/client" />
// 为了ts支持.vue
declare module '*.vue' {
    import type { DefineComponent } from 'vue'
    const component: DefineComponent<{}, {}, any>
    export default component
}
