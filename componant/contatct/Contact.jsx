import React, { useState } from 'react'
export default function Contact() {
  let [name, setName] = useState("Ahmed");

  return (
    <>
      <h1>{name}</h1>
      <button onClick={()=>{
        setName("Mohamed")
      }}>Change</button>


    </>
  )
}