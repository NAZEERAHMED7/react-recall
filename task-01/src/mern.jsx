import React from 'react'

const mern = ({projectName,discription,tech}) => {
  return (
    <div>
        <ul>
            <li>{projectName}</li>
            <li>{discription}</li>
            <li>{tech}</li>
        </ul>
    </div>
  )
}

export default mern