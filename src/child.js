import React from 'react'

function child(age,name,children) {
  console.log(age)
  console.log(name)
  console.log(children)
  
    return (
    <div>child</div>
  )
}



// 이렇게 설정해놓으면 민약 props가 전달되지 않았을 때 기본값을 설정할 수 있습니다.
child.defaultProps={
	name: '기본 이름'
}

export default child