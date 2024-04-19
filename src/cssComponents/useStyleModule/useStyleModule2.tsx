// 2.  useCssModule 加载并使用css

import {defineComponent,useCssModule} from "vue";
import { zx } from './useStyleMudule1.vue'
export default defineComponent({
    setup() {
          const z =  useCssModule(zx)
        return () =>(
            <>
               <h1 > {$z.back} </h1>
            </>

        )
    }
})