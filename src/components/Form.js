import React from 'react';
import {useEffect, useState} from 'react'

export default function Form ({text,data, setText, setData}) {
  console.log("Form is rendering")
  let inputText=(event)=>{
    setText(event.target.value)
  }
  
  let submitText=(event)=>{
    event.preventDefault()
    let lengthData=data.length-1
    let newId=(parseInt(data[lengthData].id)+1).toString()
    let newOne={
      id:newId,
      title:text,
      completed:false,
    }
    let newData=[...data,newOne]
    setData(newData)
    setText("")
  }

  return (
    <form className='flex'>
      <input className='flex-3'
        type="text"
        name="value"
        value={text}
        placeholder="해야할 일을 입력하세요"
        onChange={inputText}
        />
      <input className='flex-1'
        type="submit"
        value="입력"
        onClick={submitText}
      />
  </form>
  );
}
