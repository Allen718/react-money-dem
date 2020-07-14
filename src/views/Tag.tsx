import Layout from '../components/Layout';
import React from 'react';
import useTags from '../useTags';
import styled from 'styled-components';
import Icon from '../components/Icon';
import {Link} from 'react-router-dom';
import Button from '../components/Button';
import Center from '../components/Center';

const Content=styled.div`
>nav{
padding: 16px;
background: blue;
}
>ol{
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
}
>div{
margin-top: 30px;
}
`

function Tags() {
const {tags,addTag}=useTags()
  return (
    <Layout>
      <Content>
      <nav><span>标签管理</span></nav>
      <ol>
        {tags.map(tag=>
          <li key={tag.id}>
            <Link to={"/tags/"+tag.id} >
            <span className="oneLine">{tag.name+tag.id}</span>
            <Icon name="right"/>
            </Link>
          </li>)}
      </ol>
      <Center>
      <Button onClick={()=>{addTag()}}>新增</Button>
      </Center>
      </Content>
    </Layout>)}
    export default Tags