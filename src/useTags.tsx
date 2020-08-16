import {useEffect,  useState} from 'react';
import createId from './lib/createId';
import useUpdate from './hooks/useUpdate';

const useTags = () => {
  const [tags, setTags] = useState<{ id: number, name: string }[]>([]);
  const findTag = (id: number) => {
    return tags.filter(tag => tag.id === id)[0];
  };
  const addTag = () => {
    const tagName = window.prompt('请输入新增标签名');
    if (tagName !== null) {
      setTags([...tags, {id: createId(), name: tagName}]);
    }
  };
  useEffect(() => {
    let localTags = JSON.parse(window.localStorage.getItem('tags') || '[]');
    if (localTags.length === 0) {
    localTags= [{id: createId(), name: '外卖'}, {id: createId(), name: '蔬菜'}, {
        id: createId(),
        name: '零食'
      }, {id: createId(), name: '房租'}, {id:createId() , name: '水果'}];

    }
      setTags(localTags)

    },[] )

  useUpdate(() => {window.localStorage.setItem('tags', JSON.stringify(tags));}, [tags]);
  const getTagName=(id:number)=>{
  const tag=tags.filter(t=>t.id===id)[0]
    return tag?tag.name:''
  }
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
      tags.map((tag) => tag.id === id ? {id: id, name: obj.name} : tag)
    );

    // const index = findTagIndex(id);
    // const cloneTags = JSON.parse(JSON.stringify(tags));
    // cloneTags.splice(index, 1, {id: id, name: obj.name});
    // setTags(cloneTags);
  };

  const deleteTag = (id: number) => {
    setTags(tags.filter(tag => tag.id !== id));
    // const index = findTagIndex(id);
    // const cloneTags = JSON.parse(JSON.stringify(tags));
    // cloneTags.splice(index, 1);
    // setTags(cloneTags);
  };
  return {tags, setTags, findTag, updateTag, deleteTag, findTagIndex, addTag,getTagName};
};
export default useTags;