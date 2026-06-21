import { useState } from "react";
function State_ex()
{
    const [count,setCount] = useState(0);
    return(
        <h1>State check : {count} 
        <button onClick={()=> setCount(count+1)}>Click</button>
        </h1>
    );
}
export default State_ex;