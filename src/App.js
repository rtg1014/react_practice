// src/App.js

import React from "react";
import { useState } from "react";
import { flushSync } from "react-dom";

function App(){
  const [num, setNum] = useState(0)
  // 1. 리턴문 위에서 만들어서 사용하는 방법
  const plusButton = () =>{
    const newNum = num + 1
    setNum(newNum)
  }
  
  return(
    <div>
      <div>
        지금 카운팅 되는 숫자 == {num}
      </div>

      <br />
<br />

{/* 1-1 위에서 만들어놓은 함수로직을 사용만 하기 */}
      <button onClick={plusButton} > + 함수버튼 </button>

{/* 2. 리턴문 안 - 태그 안쪽에서 함수 추가해서 실행하는 방법 */}
      <button onClick={()=>{
        const newNum = num - 1
        setNum(newNum)
      }} > - 함수버튼 </button>

<br />
<br />

{/*  3. 가장 심플하게 구현한 버튼 */}
<button onClick = {() => setNum(num + 1)}>심플 + 버튼</button>
<button onClick = {() => setNum(num - 1)}>심플 - 버튼</button> 
      
    </div>
  )
}

export default App;