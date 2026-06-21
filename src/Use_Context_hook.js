import { useState,createContext,useContext } from "react";

const UserContext =  createContext();
function Use_Context_hook()
{
    const [name,setName] = useState("Mac!!");
    return(
        <div>
            <UserContext.Provider value={name}>
                <h1>useContext_hook: </h1>
                <h1>Component0 {name}</h1>
                <Component1/>
            </UserContext.Provider>
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
    const name = useContext(UserContext);
    return(
        <h1>Component2 {name}</h1>
    );
}
export default Use_Context_hook;