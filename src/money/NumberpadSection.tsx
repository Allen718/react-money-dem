
import React, {useState} from 'react';
import Wrapper from './numberpadsection/Wrapper';
import generateOutput from './numberpadsection/generateOutput';
const NumberPadSection=()=>{
  const [Output,_setOutput]=useState('0')
  const setOutput=(Output:string)=>{
    if(Output.length>=16){
      Output= Output.slice(0,16)
    }else if(Output.length===0){
      Output='0'
    }
    _setOutput(Output)
  }
  const onClickButton=(e:React.MouseEvent)=>{
const text=(e.target as HTMLButtonElement).textContent
    if(text===null){
      return
    }
    if (text === 'OK') {
      // TODO
      return;
    }
    if ('0123456789.'.split('').concat(['删除', '清空']).indexOf(text) >= 0) {
      setOutput(generateOutput(text, Output));
    }
  }
  return (
    <Wrapper>
      <div className="output">{Output}</div>
      <div className="pad" onClick={
        onClickButton
      }>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>删除</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>清空</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button className="ok">ok</button>
        <button className="zero">0</button>
        <button>.</button>
      </div>
    </Wrapper>
  )
}
export {NumberPadSection}