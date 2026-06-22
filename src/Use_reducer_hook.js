import { useReducer } from "react";
function Use_reducer_hook()
{
    const [num,dis] = useReducer(reduce,0);
    return(
        <div>
            <h1>useReducer_hook: </h1>
            <h1>Value : {num}</h1>
            <button type="button" onClick={()=>dis("increment")}>+</button>
            <button type="button" onClick={()=>dis("decrement")}>-</button>
        </div>
    );
}
function reduce(state,action)
{
    if(action ===  "increment") return state = state  + 1;
    else if(action ===  "decrement")  return state = state - 1;
}
export default Use_reducer_hook;