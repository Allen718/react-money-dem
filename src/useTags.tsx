import {useState} from 'react';
const useTags=()=>{
  const [tags,setTags]=useState([{id:1,name:'外卖'}, {id:2,name:'蔬菜'},{id:3,name:'零食'},{id:4,name:'房租'},{id:5,name:'水果'}])
  return {tags,setTags}
}
export default useTags