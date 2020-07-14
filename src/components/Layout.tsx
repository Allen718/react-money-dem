import Nav from './Nav';
import React, {useEffect, useRef} from 'react';
import styled from 'styled-components';
const Wrapper=styled.div`

height: 100vh;
display: flex;
flex-direction: column;
`
const Main=styled.main`
flex-grow: 1;
overflow: auto;
`
type Props={
  className?:string
}
const Layout:React.FC<Props>=(props)=>{
  const mainRef=useRef<HTMLDivElement>(null)
  return(
    <Wrapper>
      <Main className={props.className}
              ref={mainRef}>
        {props.children}
      </Main>
      <Nav/>
    </Wrapper>
  )
}

export default Layout