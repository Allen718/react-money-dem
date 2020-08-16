
import {useEffect, useState} from 'react';
import useUpdate from './useUpdate';
 export type RecordItem={
  tags:  string[],
  notes: string
  category: '+'|"-"
  amount: number
  createAt:string
}
type NewrecordItem=Omit<RecordItem ,'createAt'>
const useRecords=()=>{
  const[records,setRecords]=useState<RecordItem[]>([])
 const addRecords=(newRecord:NewrecordItem)=>{
    if(newRecord.amount===0){
      alert('请输入金额')
      return false
    }
 const record={...newRecord,createAt:new Date().toISOString()}
    setRecords([...records,record])
   return true
 }
 useEffect(()=>{
   setRecords(JSON.parse(localStorage.getItem('records')||'[]'))
 },[])
 useUpdate(()=>{
   window.localStorage.setItem('records',JSON.stringify(records))
 },[records])
  return {records,addRecords}
}
export default useRecords