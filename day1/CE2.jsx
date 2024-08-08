import React from "react";
function Myo()
{
    let myobject={name:"Madras"};
    let newObject=myobject;
    myobject.name="Chennai";
    let myarray=["a","e","i","o"];
    let vowelArray=myarray;
    myarray.push("u");
    
    console.log(myarray,myobject);
    alert("Check the console output");
}
function App2()
{
    return(
        <div className="App">
            
            <button onClick={Myo}>CE2</button>
            

        </div>
    )
}
export default App2;
