import React, {useState} from 'react'

export default function Input_box(props) {
    const [val, setVal] = useState("false");
    const [text, setText] = useState("My Args");
    const handleOnChange = (event) => {
        setText(event.target.value);
        props.onDataChange({name: event.target.value, value: val, uId:props.uId});
    };
    const onTrueClick = () => {
        setVal("true");
        props.onDataChange({name: text, value: "true", uId:props.uId});
    };
    const onFalseClick = () => {
        setVal("false");
        props.onDataChange({name: text, value: "false", uId:props.uId});
    };
  return (
      <>
          <input className="form-control" id="input" value={text} onChange={handleOnChange} type="text"></input>
          <div className="dropdown">
              <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  {val}
              </button>
              <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#" onClick={onTrueClick}>true</a></li>
                  <li><a className="dropdown-item" href="#" onClick={onFalseClick}>false</a></li>
              </ul>
          </div>
      </>
  )
}
