import { useRef } from "react";
function Use_ref_hook()
{
    const input = useRef();
    function focusinput()
    {
        input.current.focus();
    }
    return(
        <div>
            <h1>useRef_hook: </h1>
            <input ref={input} type="text" placeholder="Enter name:"/>
            <button onClick={focusinput} type="button">Focus input</button>
        </div>
    );
}
export default Use_ref_hook;