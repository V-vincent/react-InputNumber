import React, { useState } from "react";
import "./App.css";
import InputNumber from "./component/inputNumber";
function App() {
  const [value, setValue] = useState('aaa');
  return (
    <div>
      <span>受控组件：</span>
      <InputNumber value={value} onChange={e => {
        setValue(e);
       }} />
      <span>非受控组件：</span>
      <InputNumber defaultValue={value} onChange={e => { 

      }} />
    </div>
  )
}
export default App;
