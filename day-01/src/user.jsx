import React from 'react'

const User = ({name, age, contact, role}) => {
  return (
    <div>
      <p>{name}</p>
      <p>{age}</p>
      <p>{contact}</p>
      <p>{role}</p>
    </div>
  )
}

export default User