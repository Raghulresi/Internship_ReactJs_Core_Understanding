import { useState } from "react";

function Form()
{
    const [name,setName] = useState("");
    function handleEventAlert(noReloadParameter)
    {
        noReloadParameter.preventDefault();
        alert(name);
    }
    return(
        <div>
            <h1>Form Validation:</h1>
            <div>
                <form onSubmit={handleEventAlert}>
                    <label>name : </label>
                        <input type="name"
                        value={name}
                        onChange={(e)=>setName(e.target.value)}/> <br/><br/>
                    <label>password : </label>
                        <input type="password"/> <br/><br/>
                    <button type="submit">Submit</button>
                    <button type="reset">Reset</button>
                </form>
            </div>
        </div>
    );
}
export default Form;