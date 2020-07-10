import Layout from '../components/Layout';
import React, {useState} from 'react';
import styled from 'styled-components';
import {NumberPadSection} from '../money/NumberpadSection';
import {NoteSection} from '../money/NoteSection';
import {TagsSection} from 'money/TagsSection';
import {CategorySection} from '../money/CategorySetion';
const MyLayout = styled(Layout)`
  display:flex;
  flex-direction: column;
`;
type Category = '+' | '-';
const Money: React.FC = () => {
  const [selected, setSelected] = useState({
    tags: [] as string[],
    notes: '',
    category: '-' as Category,
    amount: 0

  });
  type Selected = typeof selected
  const onChange = (obj: Partial<Selected>) => {
    setSelected({...selected, ...obj});
  };
  return (
    <MyLayout>
      <CategorySection value={selected.category}
                       onChange={(value) => {onChange({category: value});}}
      />
      {/*{selected.tags.join(',')}*/}
      {/*<hr/>*/}
      {/*{selected.notes}*/}
      {/*<hr/>*/}
      {/*{selected.category}*/}
      {/*<hr/>*/}
      {/*/!*{selected.amount}*!///测试代码*/}
      <TagsSection value={selected.tags}
                   onChange={(tags) => {
                     onChange({tags});
                   }
                   }/>
      <NoteSection value={selected.notes
      } onChange={(value) => {
        onChange({notes: value});
      }}/>
      <NumberPadSection value={selected.amount}
                        onChange={(Output) => {
                          onChange({amount: Output});
                        }}/>
    </MyLayout>);
};

export default Money;