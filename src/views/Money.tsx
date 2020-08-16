import Layout from '../components/Layout';
import React, {useState} from 'react';
import styled from 'styled-components';
import {NumberPadSection} from '../money/NumberpadSection';
import {NoteSection} from '../money/NoteSection';
import {TagsSection} from 'money/TagsSection';
import {CategorySection} from '../money/CategorySetion';
import useRecords from '../hooks/useRecords';
import {Date} from '../components/Date';
import dayjs from 'dayjs';


const MyLayout = styled(Layout)`
  display:flex;
  flex-direction: column;
`;
type Category = '+' | '-';

const Money: React.FC = () => {
  const defaultForm={
    tags: [] as string[],
    notes: '',
    category: '-' as Category,
    amount: 0,
    createAt:dayjs().format('YYYY-MM-DD')  as string
  }
  const [selected, setSelected] = useState(defaultForm);
  type Selected = typeof selected
  const onChange = (obj: Partial<Selected>) => {
    setSelected({...selected, ...obj});
  };

  const {addRecords}=useRecords()
 const onSubmit=()=>{
   if( addRecords(selected)){
     window.alert('保存成功')
     setSelected(defaultForm)
   }

 }
  return (
    <MyLayout >
      <CategorySection value={selected.category}
                       onChange={(value) => {onChange({category: value})}}/>

       <TagsSection value={selected.tags}
                   onChange={(tags) => {
                     onChange({tags});
                   }
                   }/>
      <Date value={selected.createAt}
            onChange={(value)=>{onChange({createAt:value})}}/>
      <NoteSection value={selected.notes
      } onChange={(value) => {
        onChange({notes: value});
      }}/>
      <NumberPadSection value={selected.amount}
                        onChange={(Output) => {
                          onChange({amount: Output});
                        }}
                        onOk={onSubmit}
                       />
    </MyLayout>);
};

export default Money;