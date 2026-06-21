import { useState } from "react";
function Conditionals()
{
    const [num , setNum] = useState("");
    const [status, setStatus] = useState("");
    function check()
    {
        if(num>100){ 
            setStatus("pass");
        }
        else{
            setStatus("fail");
        }
    }
    return(
        <div>
            <h1>
            Check number is  greater that 100 or not 
            </h1>
            <label>Enter the number : </label>
            <input type="number"
            onChange={(e) => setNum(e.target.value)}></input>
            <button type="button" onClick={check}>Check</button>
            <h1>{status}</h1>
        </div>
    );
}
export default Conditionals;