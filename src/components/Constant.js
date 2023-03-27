import React, {useState} from 'react'

export default function Constant(props) {
    const [val, setVal] = useState("false");
    const onTrueClick = () => {
        setVal("true");
        props.onConstantResult(true);
    };
    const onFalseClick = () => {
        setVal("false");
        props.onConstantResult(false);
    };
  return (
    <div className="dropdown">
              <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  {val}
              </button>
              <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#" onClick={onTrueClick}>true</a></li>
                  <li><a className="dropdown-item" href="#" onClick={onFalseClick}>false</a></li>
              </ul>
    </div>
  )
}
