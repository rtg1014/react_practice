
import React from 'react';


const ChildShark = (props) => {
  console.log("props",props);
  return <div>
    <div>
    나는 {props.family_names[1]} 의 손자 입니다.
    </div>
  <div>
      나는 {props.family_names[0]} 의 아들 입니다.
  </div>
  </div>
}


const FatherShark = (props) => {
  // 부모 컴포넌트에서 자식컴포넌트로 전달함
  const name = "아빠상어 김흥부";
  const grand_father_name = props.grand_father_props
  return <ChildShark family_names={[name,grand_father_name]} />;
}



const GrandFatherShark = () => {
  const grand_father = "할배 김놀부"
  return <FatherShark  grand_father_props = {grand_father}/>
}



function App() {
  return <GrandFatherShark />
}

export default App;