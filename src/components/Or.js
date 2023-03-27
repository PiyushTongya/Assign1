import React from 'react'
import ReactDOM from "react-dom";
import BottomComponent from './BottomComponent';

export default function Or(props) {
    const s = true;
    const result = (data) => {
        props.onConstantResult(s | data);
      };

      let id = 100;

      const handleButtonClick = (event) => {
        const rootElement = document.getElementById(event.target.id);
        ReactDOM.render(< div id ={event.target.id}></div>, rootElement);
      };

  const handleAddButtonClick = () => {
    id++;
    const rootElement = document.getElementById(id.toString());
    ReactDOM.render(<>
        <div id={id*10}>
        <BottomComponent map={props.map} finalRes={result} id ={id}/>
        <button id={id*10} type="button" onClick={handleButtonClick} className="btn btn-outline-secondary"> X </button>
        </div> 
        <div id={id+1}></div>
        </>, rootElement);
  };

  return (
    <div>
       <div id={id*10}>
       <div id ={id}><BottomComponent map={props.map} finalRes={result} id ={id}/></div>
       <button id={id*10} type="button" onClick={handleButtonClick} className="btn btn-outline-secondary"> X </button>
       </div> 
        <div id={id+1}></div>
        <button type="button" onClick={handleAddButtonClick} className="btn btn-outline-secondary">+ add options</button>
    </div>
  )
}
