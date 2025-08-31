import React , { useState } from 'react'

export default function About() {
    let[random,setRandom]=useState(0);  

  return (
    <div>
            <h2>{random}</h2>

            <button onClick={()=>{setRandom(Math.round(Math.random()*100))}}>random</button>
    </div>
  )
}
