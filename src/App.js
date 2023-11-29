// src/App.js

import React from "react";
import Layout from "./Layout"
import Child from "./child"

function App() {
  const name = "리액트";
return <Child
age = {10} name = {name}
>
  이름
</Child>
}
export default App;