// src/App.js

import React from "react";
import Layout from "./Layout"


function User(props) {
    console.log(props)
    return <Layout>
      여기는 레이아웃이 들어가는 곳이에요
    </Layout>
  }

function App() {
  return <User>안녕하세요</User>;
}
export default App;