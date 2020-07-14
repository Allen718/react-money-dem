import Layout from '../components/Layout';
import React, {useState} from 'react';
import {CategorySection} from '../money/CategorySetion';
import useRecords from '../hooks/useRecords';
import useTags from '../useTags';
import dayjs from 'dayjs'
import styled from 'styled-components';
const Item=styled.div`

>div{
display: flex;
justify-content:space-between;
line-height: 20px;
font-size: 18px;
padding:10px 16px ;
background: white;
>.note{
display: block;
color:#999;
margin-left:16px;
margin-right: auto;
}

}

`
// dayjs(r.createAt).format('YYYY年MM月DD日')
function Statistics() {
  const [category,setCategory]=useState<"+"|"-">('-')
  const {records}=useRecords()
  const{getTagName}=useTags()
  console.log(records)
  return(
    <Layout>
     <CategorySection value={category} onChange={value => {setCategory(value)}}/>
     <Item>
       {records.map(r=>
        <div key={r.createAt}>
          {r.tags.map(tagId=>
            <span >{getTagName(tagId)}</span>
          )}
          {r.notes&&<span className="note">{r.notes}</span>}
          {<span>￥{r.amount}</span>}
        </div>)
       }
     </Item>
    </Layout>
  )
}
export default Statistics