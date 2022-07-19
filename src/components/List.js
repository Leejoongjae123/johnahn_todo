import React from 'react';
import {useEffect, useState} from 'react'
import styled from 'styled-components'

export default function List ({data, setData}) {
  console.log("List is rendering")
  let handleClick = (e)=>{
    console.log(e.target.value)
    let newData=data.filter(item=>item.id!==e.target.value)
    setData(newData)
  }
  
  let [checkedInputs, setCheckedInputs]=useState([])
  const changeHandler=(checked, id)=>{
    if(checked){
      setCheckedInputs([...checkedInputs,id])
    } else{
      setCheckedInputs(checkedInputs.filter((elem)=>elem !==id))
    }

  }

  console.log(checkedInputs)
  return (
    <>
      {
        data.map((item,index)=>{
          return(
              <div className='container flex h-20 items-center' key={index}>
                <input id={index} onChange={(e)=>{
                  changeHandler(e.currentTarget.checked,index)
                }}
                type="checkbox"
                checked={checkedInputs.includes(index)?true:false}/>
                <span className={checkedInputs.includes(index)?"line-through":"none"} value={item.completed}>{item.title}</span>
                <button className='bg-orange-300 w-5' value={item.id} onClick={handleClick}>X</button>
              </div>
          )
        })
      }      
    </>
  );
}
