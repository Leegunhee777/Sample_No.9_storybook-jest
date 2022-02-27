import React from 'react'

interface Props {
  children?: React.ReactElement | string
}

function Example({children}: Props) {
  return <button style={{border: '2px solid red'}}>{children}</button>
}

export default Example
