import Layout from '../components/Layout';
import React, {useState} from 'react';
import {CategorySection} from '../money/CategorySetion';
import useRecords, {RecordItem} from '../hooks/useRecords';
import useTags from '../useTags';
import dayjs from 'dayjs';
import styled from 'styled-components';

const Item = styled.div`
h3{
padding: 0 16px;
line-height: 40px;
}

>div{
background: white;
display: flex;
justify-content: space-between;
line-height: 20px;
font-size: 18px;
padding:10px 16px ;

>.note{
display: block;
font-size: 16px;
color:#999;
margin-left:16px;
margin-right: auto;
}


>div{

}


}

`;


function Details() {
  const [category, setCategory] = useState<'+' | '-'>('-');
  const {records} = useRecords();
  const {getTagName} = useTags();
  const hash: { [key: string]: RecordItem[] } = {};
  const selectedRecords = records.filter(record => record.category === category);
  selectedRecords.forEach(item => {
      const key = dayjs(item.createAt).format('YYYY-MM-DD');
      if (!(key in hash)) {
        hash[key] = [];
      }
      hash[key].push(item);

    }
  );

  const array = Object.entries(hash).sort((a, b) => {
    if (a[0] === b[0]) return 0;
    if (a[0] > b[0]) return -1;
    if (a[0] < b[0]) return 1;
    return 0;
  });
  return (
    <Layout>
      <CategorySection value={category} onChange={value => {setCategory(value);}}/>
        {array.map((x) =>
          <Item key={x[0]}>
            {<h3>{x[0]}</h3>}
            {x[1].map(r =>
              <div key={r.createAt}>
                {r.tags.length>0 ? r.tags.map(tagId =>
                  <span key={tagId}>{getTagName(tagId)}</span>
                ): <span>其他</span>}
                {r.notes && <span className="note">{r.notes}</span>}
                {<span>￥{r.amount}</span>}
              </div>)}

          </Item>)
        }

          </Layout>
          );
          }

          export default Details;