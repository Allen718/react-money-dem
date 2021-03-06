import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import React from 'react';
import Icon from './Icon';



const NavWrapper = styled.nav`
background-color: white ;
line-height:24px;
box-shadow:0 0 3px  rgba(0,0,0,0.25);
>ul{
display: flex;
>li{
width:33.3333%;
text-align: center;
padding:3px 0;
>a{
display: flex;
flex-direction: column;
align-items: center;
>svg{
width: 26px;
height:26px;
}
&.selected{
color:blue;
>.icon{
fill:blue;
}
}
}



}
}`;
const Nav = () => {
  return (
    < NavWrapper>
      <ul>
        <li>
          <NavLink to="/tags" activeClassName="selected"> <Icon name={'label'}/>标签</NavLink>
        </li>
        <li>
          <NavLink to="/money" activeClassName="selected"><Icon name={'money'}/>记账</NavLink>
        </li>
        <li>
          <NavLink to="/details" activeClassName="selected"><Icon name={'details'}/>明细</NavLink>
          </li>
      </ul>
    </NavWrapper>

  );
};
export default Nav;
