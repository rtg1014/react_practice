// src/App.js

import React from "react";
import Layout from "./Layout"
import Child from "./child"
import { useState } from "react";
import { flushSync } from "react-dom";

function App() {

  function onClick() {
    alert('로그인 되었습니다.');
  }

  function onChangeName() {
    setName('이름 변경됨');
  }

  const [name, setName] = useState('뉴진스의');
  console.log('name은 ',name)

  
  return(
    <>

    <button onClick={function() {
      alert('로그인 되었습니다.');
      setName('하입보이요');
    }}
    
    >로그인</button>
    <br/>

    {name}
    <br/>


    </>
  ) 

}
export default App;