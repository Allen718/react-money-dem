import styled from 'styled-components';

const CategorySection=styled.section` 

font-size: 24px;
  > ol{
    display:flex;
    background-color: blue;
    > li {
      width: 50%; 
      text-align:center;
      padding: 12px 0;
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
export {CategorySection}