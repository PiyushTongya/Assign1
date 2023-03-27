import React, {useState} from 'react'

export default function Argument(props) {
    const [val, setVal] = useState("...Select");
    const onTrueClick = (event) => {
        const id = Number(event.target.id);
        setVal(props.data.get(id).name);
        props.onConstantResult(props.data.get(id).value);
    };
  return (
    <>
      <div className="dropdown">
              <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  {val}
              </button>
              <ul className="dropdown-menu">
                    {Array.from(props.data, ([key, value]) => (
                        <li><a id={key} className="dropdown-item" href="# " onClick={onTrueClick}>{value.name}</a></li>
                    ))}
              </ul>
    </div>
    </>
  )
}
