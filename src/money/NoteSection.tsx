import styled from 'styled-components';
import React, {useState} from 'react';
const Wrapper=styled.section` 
background: #f5f5f5;
  padding: 0 16px;
  font-size: 14px;
  > label {
    display:flex;
    align-items: center;
    > span { margin-right: 16px; white-space: nowrap; }
    > input {
      display:block;
      width: 100%;
      height: 50px;
      background: none;
      border: none;
    }
  }`
const NoteSection:React.FC=()=>{
  const [notes,setNotes]=useState('')
  return(
    <Wrapper>
      <label>
        <span>备注</span>
        <input type="text"
               value={notes}
               placeholder="写点备注吧"
               onChange={(e)=>setNotes(e.target.value)}/>
      </label>
    </Wrapper>
    )

}
export {NoteSection}