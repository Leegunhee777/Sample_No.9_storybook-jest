import React from 'react'
import Styled from 'styled-components'
const Container = Styled.div`
button{
  color:red;
  width:500px;
}
`
interface Props {
  children?: React.ReactElement | string
}

function Example2({children}: Props) {
  return (
    <Container>
      <button style={{border: '2px solid blue'}}>{children}</button>
    </Container>
  )
}

export default Example2
