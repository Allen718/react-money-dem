let id=JSON.parse(window.localStorage.getItem('maxId')||'0')||0;
console.log(id);
const createId=()=>{
  id+=1
  window.localStorage.setItem('maxId',JSON.stringify(id))
  return id
}
export default createId