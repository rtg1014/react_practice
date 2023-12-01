// src/App.js

import React from "react";
import { useState } from "react";
import { flushSync } from "react-dom";

function App() {

  const [id, setId] = useState("")
  const [password, setPassword] = useState("")

  // id 필드가 변경되었을대 호출되는 함수
  const onChangeIdHandler = (event) => {
    setId(event.target.value)
  }

  // password 필드가 변경되었을때 호출되는 함수
  const onchangePasswordHandler = (event) => {
    setPassword(event.target.value)
  }

  // 아이디랑 비밀번호가 잘 변경되는지 확인
  console.log('id : ',id)
  console.log('pw : ',password)


  const loginClick = () => {
    alert(`고객님이 입력하신 아이디는 ${id} 비밀번호는 ${password} 입니다.`)
    setId("")
    setPassword("")
  }



  return(
    <div>
      <br />
      <div>
        아이디 : <input type='id' value ={id} onChange={onChangeIdHandler} />
      </div>
      <br />

      <div>
        비밀번호 : <input type="password" value = {password} onChange={onchangePasswordHandler}/>
      </div>
      <br />
      <div>
      <button onClick={loginClick}> 로그인 </button>

      </div>

    </div>
  )
}

export default App;