// 4. 使用 props 和 emits
// eg:      <useJsx name="hello my son"></useJsx>

// 5. 点击事件 ，需要使用函数颗粒化 ，不然直接使用fn(),会在挂载中执行
 // <div onClick={() => fn()}>

interface Props {
    name?:string
}
import {defineComponent} from "vue";

export default defineComponent({
    props:{
        name:String
    },
    emits:['on-click'],
    setup(props:Props) {
        const fn = () =>{
            console.log("clicked")
        }
        return () => (
              <>
               <div onClick={() => fn()}>
                  content from parents: {props?.name}
               </div>
              </>
            )

    }
})