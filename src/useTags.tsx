import {useState} from 'react';
import createId from './lib/createId';

const defaultTags = [{id: createId(), name: '外卖'}, {id: createId(), name: '蔬菜'}, {
  id: createId(),
  name: '零食'
}, {id: createId(), name: '房租'}, {id: 5, name: '水果'}];
const useTags = () => {
  const [tags, setTags] = useState(defaultTags);
  const findTag = (id: number) => {
    return tags.filter(tag => tag.id === id)[0];
  };
  const findTagIndex = (id: number) => {
    let result = -1;
    for (let i = 0; i < tags.length; i++) {
      if (tags[i].id === id) {
        result = i;
        break;
      }
    }
    return result;
  };
  const updateTag = (id: number, obj: { name: string }) => {
   setTags(
     tags.map((tag)=>tag.id===id?{id:id,name:obj.name}:tag)
   )

    // const index = findTagIndex(id);
    // const cloneTags = JSON.parse(JSON.stringify(tags));
    // cloneTags.splice(index, 1, {id: id, name: obj.name});
    // setTags(cloneTags);
  };

  const deleteTag = (id: number) => {
    setTags(tags.filter(tag=>tag.id!==id))
    // const index = findTagIndex(id);
    // const cloneTags = JSON.parse(JSON.stringify(tags));
    // cloneTags.splice(index, 1);
    // setTags(cloneTags);
  };
  return {tags, setTags, findTag, updateTag,deleteTag,findTagIndex};
};
export default useTags;