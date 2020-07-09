import Layout from '../components/Layout';
import React from 'react';
import styled from 'styled-components';
import {NumberPadSection} from '../money/NumberpadSection';
import {NoteSection} from '../money/NoteSection';
import { TagsSection } from 'money/TagsSection';
import {CategorySection} from '../money/CategorySetion';


const MyLayout = styled(Layout)`

  display:flex;
  flex-direction: column;
`;

function Money() {
  return (
    <MyLayout>

      <CategorySection/>

      <TagsSection/>
      <NoteSection/>



      <NumberPadSection/>
    </MyLayout>);
}

export default Money;