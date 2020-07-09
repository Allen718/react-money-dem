const generateOutput=(text:string,Output='0')=>{
  switch(text){
  case'0':
  case'1':
  case'2':
  case'3':
  case'4':
  case'5':
    case'6':
  case'7':
  case'8':
  case'9':
    if(Output==='0'){
    return text
    }else{
      return Output+text
    }
  case'删除':
    if(Output.length<=1){
     return '0'
    }else{
     return Output.slice(0,-1) || '0'
    }
  case'清空':
  return '0'
  case'.':
    if(Output==='0'){
  return Output+'.'
    }
    if(Output.indexOf('.')>=0){
      return Output
    }else{
      return Output+text
    }
    default:
      return '0';
  }
}
export default generateOutput

