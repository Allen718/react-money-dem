import Layout from '../components/Layout';
import React from 'react';
import useTags from '../useTags';
import styled from 'styled-components';
import Icon from '../components/Icon';
import {Link} from 'react-router-dom';

const TagList = styled.ol`
  font-size: 16px; 
  background:white;
  > li{
    //#e5e5e7
    border-bottom: 1px solid #d5d5d9;
    line-height: 20px;
  
    margin-left: 16px;
   
    >a{
      padding: 12px 16px 12px 0;
       display:flex;
    justify-content: space-between;
    align-items: center;
    
    }
  }
`;
const Nav=styled.nav`
padding: 16px;
background: blue;
`
function Tags() {
const {tags}=useTags()
  return (
    <Layout>
      <Nav><span>标签管理</span></Nav>
      <TagList>
        {tags.map(tag=>
          <li key={tag.id}>
            <Link to={"/tags/"+tag.name} >
            <span className="oneLine">{tag.name}</span>
            <Icon name="right"/>
            </Link>
          </li>)}

      </TagList>
    </Layout>)}
    export default Tags