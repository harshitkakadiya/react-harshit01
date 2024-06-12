import React from 'react'

const Example01 = () => {
  return (
      <div>
          <ul>
              <ListOfProduct name="iphone" isStoked={true} />
              <ListOfProduct name="samsung" isStoked={true} />
              <ListOfProduct name="oppo" isStoked={false} />
              <ListOfProduct name="vivo" isStoked={false} />
          </ul>
      </div>
  )
}

export const ListOfProduct = ({ name, isStoked }) => {
  return <li>{name} {isStoked && 'isStocked'}</li>
}



export default Example01
