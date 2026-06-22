import { useEffect, useState } from "react";

function Use_effect_hook()
{
    const [count, setCount] = useState(0);
    useEffect(()=>
    {
        setTimeout(()=>{setCount((count)=>count+1);},1000)
    });
    return(
        <div>
            <h1>useEffect_hook: counting = {count} </h1>
        </div>
    );
}
export default Use_effect_hook;