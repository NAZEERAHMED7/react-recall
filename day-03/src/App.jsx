import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

const App = () => {

  const [num, setNum]= useState(100)
  console.log(num);
  
  useEffect(()=>{
    // setNum(200)
  },[num])

  console.log('useeffect num:', num)

  return (
    <div>
      {num}
      <button onClick={()=>setNum((curr) => curr+1) }>add</button>
    </div>
  )
}

export default App