
import React from 'react';
import Wrapper from './numberpadsection/Wrapper';
import generateOutput from './numberpadsection/generateOutput';
type Props={
  value:number
  onChange:(value:number)=>void
  onOk?:()=>void}

const NumberPadSection:React.FC<Props> =(props)=>{
  // const [Output,_setOutput]=useState('0')
  const Output=props.value.toString()
  const setOutput=(Output:string)=>{
    let value
    if(Output.length>=16){
   value= parseFloat(Output.slice(0,16))
    }else if(Output.length===0){
      Output='0'
     value=0
    }else{
      value=parseFloat(Output)
    }
   props.onChange(value)
  }
  const onClickButton=(e:React.MouseEvent)=>{
const text=(e.target as HTMLButtonElement).textContent
    if(text===null){
      return
    }
    if (text === 'OK') {

      return props.onOk
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