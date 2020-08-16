import styled from 'styled-components';
import React, {useState} from 'react';
const Wrapper=styled.section` 

font-size: 24px;
  > ul{
    display:flex;
    background-color: blue;
    > li {
      width: 50%; 
      text-align:center;
      padding:10px 0;
      position:relative;
      &.selected::after{
        content: '';
        display:block; 
        height: 3px;
        background:#333;
        position:absolute;
        bottom:0;
        width: 100%;
        left: 0;
      }
    }
  }`
type Props={
  value:'-'|'+',
  onChange:(value:"+"|'-')=>void}
 const CategorySection: React.FC<Props> = (props) => {
   const CategoryMap = {
     '-': '支出',
     '+': '收入'
   }
   type X = typeof CategoryMap
   type Y = keyof X
   // const [Category,setCategory]=useState('-')
   const Category = props.value
   const [CategoryList] = useState<Y[]>(['-', '+'])
   return (
     <Wrapper>
       <ul>
         {CategoryList.map(t =>
           <li key={t}
               className={
                 Category === t ? 'selected' : ''
               } onClick={() => {
             props.onChange(t)
           }}>{CategoryMap[t]}</li>
         )}
       </ul>
     </Wrapper>)
 }




export {CategorySection}