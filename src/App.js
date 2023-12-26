import React from "react";
import { useState } from "react";
import "./App.css";

const App = () => {


  const [users, setUsers] = useState([
    { id: 1, name: "장원영", age: 20 },
    { id: 2, name: "윈터", age: 21 },
    { id: 3, name: "김채원", age: 22 },
    { id: 4, name: "로제", age: 23 },
    { id: 5, name: "하니", age: 24 },
  ])

  const [newName, setNewName] = useState('');
  const [newAge, setNewAge] = useState('');

  const oncChangeAge = (event) => {
    setNewAge(event.target.value);
  }

  // 추가하기 버튼을 클릭했을 때 실행되는 함수
  const clickAddButtonHandler = () => {
    const newUser = {
      id: users.length+1,
      name: newName,
      age: newAge
    }
    setUsers([...users, newUser]);
    
    alert("추가 버튼이 클릭되었습니다.")
  }

  // 삭제하기 버튼을 클릭했을 때 실행되는 함수
  // const clickDeleteButtonHandler = (id) => {
  //   alert('아이디를 삭제합니다')
  //   const newUsers = users.filter((item)=>{
  //     return item.id !== id;
  //   })
  //   setUsers(newUsers);
  // }

  // 삭제하기 버튼 - splice 사용
  const clickDeleteButtonHandler = (id) => {
    alert('아이디를 삭제합니다');
    const indexToDelete = users.findIndex((user) => user.id === id);
    const newUsers = [...users];
    newUsers.splice(indexToDelete, 1);
    setUsers(newUsers);
  };


  return (
    <div>
    <div>
      <br />
      <div>
        이름:&nbsp; 
      <input
      value={newName}
      onChange= {
        (event)=>{
          setNewName(event.target.value);
        }
      }
      />
      </div>
      <br />
      <br />

      <div> 나이:&nbsp;
      <input
      value = {newAge}
      onChange = {oncChangeAge}
      ></input>
      <br /><br />

      <button
      onClick={clickAddButtonHandler}
      >
        추가버튼
      </button>

      </div>

  
    </div>
    <div className="app-style">
      {users.map((item)=>{
        return(
          <div key = {item.id} className="component-style">
            {item.name} - {item.age}
            <button
            onClick={()=>clickDeleteButtonHandler(item.id)}
            >삭제</button>
          </div>
        )
      })}

    </div>
    </div>
  );
};

export default App;