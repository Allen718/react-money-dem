import styled from 'styled-components';
import React, {ChangeEventHandler} from 'react';
import Input from '../components/Input';
const Wrapper=styled.section` 
background: #f5f5f5;
  padding: 0 16px;
  font-size: 14px;
  `
type Props={
  value:string,
  onChange:(value:string)=>void
}
const NoteSection:React.FC<Props> =(props)=>{
  const notes=props.value
  const onChange:ChangeEventHandler<HTMLInputElement> =(e)=>{
    props.onChange(e.target.value)
  }

  return(
    <Wrapper>
        <Input
          type="text"
          label={''}
          defaultValue={notes}
          placeholder='写点备注吧'
          onChange={onChange}
         />
    </Wrapper>
    )


}
export {NoteSection}