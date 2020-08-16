import Layout from '../components/Layout';
import React, {useState} from 'react';
import {CategorySection} from '../money/CategorySetion';
import useRecords, {RecordItem} from '../hooks/useRecords';
import dayjs from 'dayjs';
import styled from 'styled-components';
import Icon from '../components/Icon';

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

const ErrorWrapper=styled.div`
display: flex;
flex-direction: column;
margin: 100px 0;

>span{
font-size: 18px;
margin: 0 auto;
}
>.icon{
margin: 10px auto;
width: 50px;
height:50px;
}
`
function Details() {
  const [category, setCategory] = useState<'+' | '-'>('-');
  const {records} = useRecords();
  const hash: { [key: string]: RecordItem[] } = {};
  const selectedRecords = records.filter(record => record.category === category);
  selectedRecords.forEach(item => {
      const key = dayjs(item.createAt).format('YYYY-MM-DD');
      if (!(key in hash)) {
        hash[key] = [];
      }
      hash[key].push(item);    }
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
      {array.length<=0?<ErrorWrapper><span>当前暂无记录</span>
      <Icon name={'错误'} />
      </ErrorWrapper>:''}
        {array.map((x) =>
          <Item key={x[0]}>
            {<h3>{x[0]}</h3>}
            {x[1].map(r =>
              <div key={r.createAt}>
                {r.tags.length>0 ? r.tags.map(tagName =>
                <span key={tagName}>{tagName}</span>
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