import React, {useState} from 'react';
 
export default function Counter(){
    const [count, setCount] = useState(0);
    const [value,setValue] = useState("type here!")
    return(<>

    
    <input type="text"
    value={value}
    onChange={(e)=>{setValue(e.target.value)}}/>
    <h3>Type เราหน่อยจิ {value.length} ตัว</h3>

        <button onClick={()=>setCount(count+1)}>
             Click me </button>
             <button onClick={()=> setCount(0)}>
            Reset
        </button>
        <p>You clicked {count} time</p>

        
    
    </>);
}