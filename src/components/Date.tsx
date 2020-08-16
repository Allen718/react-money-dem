import styled from 'styled-components';
import React, {ChangeEventHandler} from 'react';
import Input from './Input';

const Wrapper=styled.div`
width: 100%;
padding:0 16px;
box-shadow: 
            inset 0 5px 5px -5px rgba(0,0,0,0.25);
`
type Props={
  value:string,
  onChange:(value:string)=>void}

const Date:React.FC<Props>=(props)=>{

  const onChange:ChangeEventHandler<HTMLInputElement> =(e)=>{
    props.onChange(e.target.value)
  }
  return(
    <Wrapper>
      <Input label={'日期'}
              type={'date'}
             value={props.value}
             onChange={onChange}
      />
    </Wrapper>
    )

  }


export {Date}