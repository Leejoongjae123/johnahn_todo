import React, {Component} from 'react'
import './App.css'
import styled from 'styled-components'
import todoData from './data/data'
import { useState,useEffect } from 'react'
import List from './components/List'
import Form from './components/Form'

export default function App () {
  console.log("App is rendering")
  let [data,setData]=useState([]);
  let [text,setText]=useState("");
  useEffect(() => {
    setData(todoData)
  }, []);






  return (
    <div className='flex items-center justify-center w-screen h-screen bg-blue-100'>
      <div className='w-full p-5 m-4 bg-white rounded shadow-md lg:w-3/4 lg:max-w-lg'>
        <div className='mb-3'>
          <h1>할 일 목록</h1>
        <List data={data} setData={setData}></List>
        <Form text={text} data={data} setData={setData} setText={setText}></Form>
          
        </div>
      </div>
    </div>
  );
}



