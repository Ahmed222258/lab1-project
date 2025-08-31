import React , { useState } from 'react'

export default function Home() {
      let [num, setNum] = useState(0);
    
  return (
    <div>
                  <h1>{num}</h1>

          
           <button onClick={()=>{
        setNum(num-1)
      }}>-</button>
  <button onClick={()=>{
        setNum(num+1)
      }}>+</button>
    </div>
    
  )
}
