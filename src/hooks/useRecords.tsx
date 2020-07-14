
import {useEffect, useState} from 'react';
import useUpdate from './useUpdate';
type RecordItem={
  tags:  number[],
  notes: string
  category: '+'|"-"
  amount: number
  createAt:string
}
type NewrecordItem=Omit<RecordItem ,'createAt'>
const useRecords=()=>{
  const[records,setRecords]=useState<RecordItem[]>([])
 const addRecords=(newRecord:NewrecordItem)=>{
 const record={...newRecord,createAt:new Date().toISOString()}
    setRecords([...records,record])
   window.alert('添加成功')
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