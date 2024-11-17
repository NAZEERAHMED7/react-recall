import React,{useState} from 'react'

const App = () => {

  const [num, setNum]= useState(1)

  // normal method
  let x= 1
  const handleAddNormal = () =>{
    x= x + 1
    console.log('normal method: ', x)
  }
  const handleSubNormal = () =>{
    x= x - 1
    console.log('normal method: ', x)
  }

  // useState hook
  const handeleAdd = () =>{
    setNum((currnum) =>{
      console.log('usestate: ',num);
      return currnum + 1
    })
    
  }
  const handeleSub = () =>{
    setNum((currnum) =>{
      console.log('usestate: ',num);
      return currnum - 1
    })
    
  }

  return (
    <div>
    <h1>Normal Method</h1>
    <h1>{x}</h1>
    <button onClick={handleAddNormal}>add</button>
    <button onClick={handleSubNormal}>sub</button>

    <h1>useState hook</h1>
    <h1>{num}</h1>
    <button onClick={handeleAdd}>add</button>
    <button onClick={handeleSub}>sub</button>
    </div>
  )
}

export default App