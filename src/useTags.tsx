import {useState} from 'react';
const useTags=()=>{
  const [tags,setTags]=useState(['外卖','水电','零食','房租','水果'])
  return {tags,setTags}
}
export default useTags