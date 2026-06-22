import { useState, useCallback } from "react";
function Use_callback_hook() 
{
    const [count,setCount] = useState(0);
    const submit = useCallback(()=>
        {alert("hello");},[]
    );
    return(
        <div>
            <h1>useCallback_hook: </h1>
            <h1>{count}</h1>
            <button onClick={()=>setCount((count)=>count+1)} type="button">Increment</button>
            <button onClick={submit} type="button">Greed</button>
        </div>
  );
}
export default Use_callback_hook;