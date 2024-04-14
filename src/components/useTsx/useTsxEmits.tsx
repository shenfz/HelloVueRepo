import {defineComponent} from "vue";

interface Props{
    name:string
}
export default defineComponent({
    emits:['on-click'],
    setup(props:Props,{emit}) {
         const data = [
             {
                 name:"xxx",
             },
             {
                 name:"yyy",
             },             {
                 name:"eee",
             },             {
                 name:"ccc",
             },
         ]
        const fn = (item:any) =>{
            console.log('出发了',item)
            emit('on-click',item)
        }
        return () => (
            <>
                <div>
                    <h1>{props.name}</h1>
                    <br/>
                    {data.map(v => {
                        return <h1 onClick={() => fn(v)}>{v.name}</h1>
                    })}

                </div>


            </>
        )

    }
})