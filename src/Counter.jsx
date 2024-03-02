import React from 'react'
import {useState} from 'react';

function Counter  () {
  const [count, setCount]= useState(0)
    
    const handleIncrement =() => {
      setCount (count + 1);
      console.log(count) 
    }
    const handleDecrement =() =>{
      setCount (count - 1);
      console.log(count) 
    }

  return (
   <div>
    <h1>{count}</h1>
     <div> {count} </div>
    <button onClick={handleIncrement}>Increment</button>
    <button onClick={handleDecrement}>Decrement</button>
   </div>
  )
}

export default Counter