import React from 'react';
import useTags from '../useTags';
import {useParams} from 'react-router-dom';
import Icon from '../components/Icon';
import styled from 'styled-components';
import Input from '../components/Input';
import Button from '../components/Button';
import Center from '../components/Center';
const Layout=styled.div`
>header{
display: flex;
justify-content: space-between;
justify-items: center;
align-items: center;
line-height: 20px;
padding:10px 16px;
background: blue;
>svg{
width: 30px;
height:30px;
}
}
>label{
display: flex;
align-items: center;
background: white;
margin-top: 8px;
span{
padding: 0 16px;
}
input{

}
}
>div{
>button{
margin:20px 0;
}

}
`

const TagEdit:React.FC=()=>{
  const {findTag,updateTag}=useTags()
  let {id}=useParams();
  const tag=findTag(parseFloat(id))
  return(
  <Layout>
    <header>
      <Icon name="left"/>
      <span>编辑标签</span>
      <Icon/>
    </header>
     <Input label='标签名'
            type="text"
            value={tag.name}
     onChange={(e)=>{
       console.log(e.target.value)
       updateTag(tag.id,{name:e.target.value})

     }}/>
            <Center>
              <Button>删除标签</Button>
            </Center>

  </Layout>
  )
}
export default TagEdit