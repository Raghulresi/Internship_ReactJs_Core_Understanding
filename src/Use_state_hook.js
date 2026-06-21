import { useState } from "react";

function Use_state_hook()
{
    const [color,setColor] = useState("red")
    return(
        <div>
            <h1>useState_Effect color = {color}</h1>
            <button type="button" value={color} onClick={(e)=>setColor("green")}>green</button>
            <button type="button" value={color} onClick={(e)=>setColor("blue")}>blue</button>
            <button type="button" value={color} onClick={(e)=>setColor("violet")}>violet</button>
            <button type="button" value={color} onClick={(e)=>setColor("pink")}>pink</button>
        </div>
    );
}
export default Use_state_hook;