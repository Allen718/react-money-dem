import React from 'react';
import useTags from '../useTags';
import {useParams,useHistory} from 'react-router-dom';
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
>div{
label{
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
margin-top: 30px;
}

}
}

`

const TagEdit:React.FC=()=>{
  const {findTag,updateTag,deleteTag}=useTags()
  let {id}=useParams();
  const tag=findTag(parseFloat(id))
  const history=useHistory()
 const onClickBack=()=>{
    history.goBack()
  }
  const content=()=>{
    return(<div>
      <Input label='标签名'
             type="text"
             value={tag.name}
             onChange={(e)=>{
               updateTag(tag.id,{name:e.target.value})
             }}/>
      <Center>
        <Button onClick={()=>{
          deleteTag(tag.id)
        }}>删除标签</Button>
      </Center></div>)}
  return(
  <Layout>
    <header>
      <Icon name="left" onClick={onClickBack}/>
      <span>编辑标签</span>
      <Icon/>
    </header>
    {tag?content():<Center><div> 标签名不存在</div></Center>}
  </Layout>
  )
}
export default TagEdit