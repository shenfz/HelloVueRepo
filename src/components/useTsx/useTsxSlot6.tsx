
import {defineComponent} from "vue";
const slotA = (_,{slots}) => {

    return (
        <>
            <div>{ slots.default ? slots.default() : '默认值' }</div>
            <div>{ slots.fool?.() }</div>
        </>
    )

}

export default defineComponent({
    setup(){

        const slot = {
            default:() =>(<div> xiaoman </div>),
            fool:() =>(<div> fool </div>)
        }

        return () => (
            <>
                <hr/>
                  <slotA v-slots={slot}></slotA>
                <hr/>
            </>
        )
    }
})