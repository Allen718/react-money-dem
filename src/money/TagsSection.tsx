import styled from 'styled-components';
import React from 'react';
import Icon from '../components/Icon';
import useTags from '../useTags';


const Wrapper = styled.section`
padding: 15px 10px; 
flex-grow: 1;
flex-shrink: 1;
overflow: auto;
background: #FFFFFF; 
>ol{
display: flex;
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
 value: string[]
  onChange:(tags:string[])=>void
}
const TagsSection: React.FC<Props> = (props) => {
  const{tags,addTag}=useTags()
  const selectedTagIds=props.value
  const onAddTag=()=>{
  addTag()
  }
  const onToggleTags=(tagName:string)=>{
    if(selectedTagIds.indexOf(tagName)>=0){
     props.onChange(selectedTagIds.filter(t=>t!==tagName))
    }else(
      props.onChange([...selectedTagIds,tagName])
    )
  }
  const getClass = (tag: {id:number,name:string}) => selectedTagIds.indexOf(tag.name) >= 0 ? 'selected' : '';
  return (
    <Wrapper>
      <ol>
        {tags.map(tag=>
          <li  key={tag.id}
            onClick={()=>{onToggleTags(tag.name)}} >
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