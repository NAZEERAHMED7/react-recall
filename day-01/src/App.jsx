import React from 'react'
import User from './user'

const App = () => {
  const userdata = [
    {
    name: 'Nazeer',
    age: 21,
    contact: 9090909090,
    role: 'Ui/UX and Frontend Developer'
    },
    {
      name: "Kaja Moideen",
      age: 25,
      contact: 8080808080,
      role: 'Full Stack'
    }
];

  return (
    // this is display all the object inside the array
    <div>
      <h1>App</h1>
      {userdata.map((user, index)=>(
        <User
        key={index}
        {...user}
        />
      ))}

      {/* this display only one object  */}
      {/* <User
      // name= {userdata.name}
      // age= {userdata.age}
      // contact= {userdata.contact}
      // role= {userdata.role}
      {...userdata}
      /> */}

    </div>
  )
}

export default App