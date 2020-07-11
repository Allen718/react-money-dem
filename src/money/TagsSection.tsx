import styled from 'styled-components';
import React from 'react';
import Icon from '../components/Icon';
import useTags from '../useTags';

const Wrapper = styled.section`

padding: 15px 10px; 
flex-direction:row;
justify-content: flex-start;
flex-grow: 1;
flex-wrap: wrap;
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
    > div{
    background:#f2f2f2 ;
    width:40px;
    height:40px;
    border-radius: 50%;
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
  const{tags,setTags}=useTags()
  // const [selectedTags,setSelectedTags]=useState<string[]>([])
  const selectedTags=props.value
  const onAddTag=()=>{
   const tagName= window.prompt('请输入新增标签名')
    if(tagName!==null){
    setTags([...tags,tagName])
    }
  }
  const onToggleTags=(tag:string)=>{
    if(selectedTags.indexOf(tag)>=0){
     props.onChange(selectedTags.filter(t=>t!==tag))
    }else(
      props.onChange([...selectedTags,tag])
    )
  }
  const getClass = (tag: string) => selectedTags.indexOf(tag) >= 0 ? 'selected' : '';
  return (
    <Wrapper>
      <ol>
        {tags.map(tag=>
          <li  key={tag}
            onClick={()=>{onToggleTags(tag)}} >
            <div  className={getClass(tag)}  >
              <Icon name={tag} />
            </div>
            <span>{tag}</span>
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