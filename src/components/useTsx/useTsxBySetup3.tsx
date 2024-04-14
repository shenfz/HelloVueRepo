// 3. setup

//  支持 v-show  eg: v-show={flag}
//   支持v-model
//  支持 ref，但是需要手 .value 解包，在vue的template是自动d
//  不支持 v-if，但可以利用三元表达式的方式去代替 eg: <div>{flag.value?<h1>true</h1> : <h1>false</h1>}</div>
//  不支持v-for ，可以用data.map 替代
// 不支持v-bind ，使用{} 替代
import {defineComponent,ref} from "vue";
export default defineComponent({
    setup() {
        const flag = ref(false)
        const data = [
            {name:'xxx'},
            {name:'yyy'},
            {name:'zzz'},
            {name:'aaa'},
        ]

        const inputModel = ref<string>('')
        return () =>(
            <>
                <hr />
                <input v-model={inputModel} type="text"/>
                <p>{inputModel}</p>
                <hr />
                <div v-show={flag.value}>
                    <h1>
                        hello from useTsx3
                    </h1>
                </div>
                <div>{flag.value?<h1>true</h1> : <h1>false</h1>}</div>
                <div>
                    {data.map(v => {
                        return <div>{v.name}</div>
                    })}
                </div>
            </>

            )
    }
})