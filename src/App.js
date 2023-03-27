
import './App.css';
import Input_box from './components/Input_box';
import BottomComponent from './components/BottomComponent';
import ReactDOM from "react-dom";
import React, {useState} from 'react'

function App() {
  const map = new Map();
  const formDataChange = (data) => {
    if(map.has(data.uId)) {
      map.get(data.uId).name = data.name;
      map.get(data.uId).value = data.value;
    } else {
      map.set(data.uId, data);
    }
  };

  const [res, setRes] = useState(undefined);
  const finalRes = (data) => {
    setRes(data);
  };

  let id = 1;
  map.set(id, {name: "My Args", value: "false", uId:id});
  const handleButtonClick = () => {
    const rootElement = document.getElementById(id.toString());
    id++;
    const newId = id.toString();
    ReactDOM.render(<><Input_box onDataChange={formDataChange} uId={id}/><div id={newId}></div></>, rootElement);
    map.set(id, {name: "My Args", value: "false", uId:id});
  };

  const handleCancelButtonClick = () => {
    const rootElement = document.getElementById("dropDown");
    ReactDOM.render(<BottomComponent map={map} finalRes={finalRes} id="dropDown"/>, rootElement);
    finalRes(undefined);
  };

  return (
    <div>
      <div>
      <Input_box onDataChange={formDataChange} uId={id}/>
      </div>
      <div id="1"></div>
      <div>
      <button type="button" onClick={handleButtonClick} className="btn btn-outline-secondary">+ add args</button>
      </div>
      <br/>
      <BottomComponent map={map} finalRes={finalRes} id="dropDown"/>  
      <button type="button" onClick={handleCancelButtonClick} className="btn btn-outline-secondary"> X </button>
      <br/>
      <div>result : {res === undefined ? "undefined" : (res ? "true" : "false")}</div>
    </div>
  );
}

export default App;
