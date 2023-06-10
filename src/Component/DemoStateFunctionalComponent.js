import React,{useState} from'react';

function DemoStateFunctional(){
    const[count,setCount] = useState(0);
    const incrementCount=() =>{
        setCount(count+1);
    }
    return(
        <div>
            <p> Hello! count:{count}</p>
        <button onClick={incrementCount}>incrementCount(Functional)</button>
        </div>
    );
}
export default DemoStateFunctional;