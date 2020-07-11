import styled from 'styled-components';
import React from 'react';
import Icon from '../components/Icon';
import useTags from '../useTags';

const Wrapper = styled.section`
padding: 15px 10px; 
flex-grow: 1;
background: #FFFFFF; 
>ol{
display: flex;
flex-direction: row;
flex-wrap: wrap;
 >li { 
 margin-bottom: 20px;
 margin-right:8.5px;
  width: 80px;
  display:flex; 
 flex-direction:column;
 justify-content: center;
 align-items: center;
 >button{
 border:none;
 background: none;
 font:inherit ;
 }
   > div{
    background:#f2f2f2 ;
    width:40px;
    height:40px;
    border-radius: 50%;
    margin-bottom: 5px;
    &.selected{
   background: blue;
    opacity: 0.5;
   
  
 }
    >svg{
      margin: 5px;
      width:30px;
      height:30px;
      }
    }
  }
}
 
  
  
`;
type Props={
 value: number[]
  onChange:(tags:number[])=>void
}
const TagsSection: React.FC<Props> = (props) => {
  const{tags,setTags}=useTags()
  // const [selectedTags,setSelectedTags]=useState<string[]>([])
  const selectedTagIds=props.value
  const onAddTag=()=>{
   const tagName= window.prompt('请输入新增标签名')
    if(tagName!==null){
    setTags([...tags, {id:Math.random(),name:tagName}])
    }
  }
  const onToggleTags=(tagId:number)=>{
    if(selectedTagIds.indexOf(tagId)>=0){
     props.onChange(selectedTagIds.filter(t=>t!==tagId))
    }else(
      props.onChange([...selectedTagIds,tagId])
    )
  }
  const getClass = (tag: {id:number,name:string}) => selectedTagIds.indexOf(tag.id) >= 0 ? 'selected' : '';
  return (
    <Wrapper>
      <ol>
        {tags.map(tag=>
          <li  key={tag.id}
            onClick={()=>{onToggleTags(tag.id)}} >
            <div  className={getClass(tag)}  >
              <Icon name={tag.name} />
            </div>
            <span>{tag.name}</span>
          </li>
        )}
        <li className="addButton"  onClick={onAddTag}>
            <div className='icon-wrapper'>
              <Icon name={'新增'}/>
            </div>
            <button>新增</button>
        </li>
      </ol>

    </Wrapper>
  );
};

export {TagsSection};