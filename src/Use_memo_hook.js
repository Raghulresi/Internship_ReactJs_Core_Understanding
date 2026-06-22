import { useMemo, useState } from "react";
function Use_memo_hook()
{
    const [count, setcount] = useState(0);
    const square = useMemo(()=>{
        return count*count;
    },[count]
    );
    return(
        <div>
            <h1>useMemo_hook: </h1>
            <h1>Count: {count}</h1>
            <h1>Square: {square}</h1>
            <button onClick={()=>setcount(count+1)}>increment</button>
        </div>
    );
}
export default Use_memo_hook;