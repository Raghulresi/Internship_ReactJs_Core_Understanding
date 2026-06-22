import { useState,createContext, useContext } from "react";
const userContext = createContext();
function Use_Context_hook()
{
    const [name , setName] = useState("Mac!!");
    return(
        <div>
            <userContext.Provider value={name}>
                <h1>Component0 {name}</h1>
                <Component1/>
            </userContext.Provider>
        </div>
    );
}

function Component1()
{
    return(
        <div>
            <h1>Component1</h1>
            <Component2/>
        </div>
    );
}

function Component2()
{
    const name = useContext(userContext);
    return(
        <div>
            <h1>Component2 {name}</h1>
        </div>
    );
}
export default Use_Context_hook;