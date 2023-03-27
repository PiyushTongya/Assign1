import React, {useState} from 'react'
import Constant from './Constant';
import Argument from './Arguments';
import And from './And';
import Or from './Or';
import ReactDOM from "react-dom";

export default function BottomComponent(props) {
  const result = (data) => {
    props.finalRes(data);
  };

  const onConstantClick = () => {
    const rootElement = document.getElementById(props.id.toString());
    ReactDOM.render(<><Constant onConstantResult={result} /></>, rootElement);
    props.finalRes(false);
  };

  const onArgumentClick = () => {
    const rootElement = document.getElementById(props.id.toString());
    ReactDOM.render(<><Argument onConstantResult={result}  data={props.map} /></>, rootElement);
  };

  const onAndClick = () => {
    const rootElement = document.getElementById(props.id.toString());
    ReactDOM.render(<><And onConstantResult={result}  map={props.map} /></>, rootElement);
  };

  const onOrClick = () => {
    const rootElement = document.getElementById(props.id.toString());
    ReactDOM.render(<><Or onConstantResult={result}  map={props.map} /></>, rootElement);
  };

  return (
    <div>
      <div id={props.id} className="dropdown">
              <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  select...
              </button>
              <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href=" #" onClick={onConstantClick}>constant</a></li>
                  <li><a className="dropdown-item" href=" #" onClick={onArgumentClick}>argument</a></li>
                  <li><a className="dropdown-item" href=" #" onClick={onAndClick}>and</a></li>
                  <li><a className="dropdown-item" href=" #" onClick={onOrClick}>or</a></li>
              </ul>
      </div>
    </div>
  )
}
