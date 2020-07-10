import styled from 'styled-components';
import React, {useRef} from 'react';
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
type Props={
  value:string,
  onChange:(value:string)=>void
}
const NoteSection:React.FC<Props> =(props)=>{
  // const [notes,setNotes]=useState('')
  const notes=props.value
  const refInput=useRef<HTMLInputElement>(null)
  const onBlur = () => {
    if (refInput.current !== null) {
      props.onChange(refInput.current.value);
    }}
  return(
    <Wrapper>
      <label>
        <span>备注</span>
        <input type="text"
               defaultValue={notes}
               placeholder="写点备注吧"
               ref={refInput}
               onBlur={onBlur} />
      </label>
    </Wrapper>
    )

}
export {NoteSection}