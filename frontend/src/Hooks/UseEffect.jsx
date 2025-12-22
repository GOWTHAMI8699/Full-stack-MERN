import React, {useEffect, useState} from 'react'

const UseEffect =() => {
   const [count,setCount]=useState(0);
   const[value,setValue]=useState("");
    useEffect(()=> {
        console.log( "UseEffect Mounted")
    },[count])
  return (
    <>
    <div>UseEffect</div>
    <h1>{count}</h1>
    <button onClick={()=>setCount(count+1)}>Inc</button>
    <input type="text" onChange={(e)=>setValue(e.target)}></input>
    </>
  );
};

export default UseEffect