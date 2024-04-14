// 2.  defineComponent
//     {this.xxx} 访问成员

import {defineComponent} from "vue";
export default defineComponent({
    data() {
        return {
            age: 100
        }
    },
    render() {
     return (<div>
         <h1> hello from useTsx2</h1>
         <p>{this.age}</p>
     </div>)
    }
})