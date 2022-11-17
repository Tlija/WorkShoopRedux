import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add_value, decrement, increment } from "./JS/actions/counterActions";

export const Counter = () => {
 const count =useSelector((state)=>state.count)
 const dispatch=useDispatch()

 const [addvalue, setaddvalue] = useState(0)
 const handleKeypress=(e)=>{
if (e.key==='Enter') {
  dispatch(add_value(Number(addvalue)))
 }
}
  return (
    <div>
      <div>
        <button onClick={()=>dispatch(increment())}>+</button>
        <p>{count}</p>
        <button onClick={()=>dispatch(decrement())}>-</button>
      </div>
      <div>
        <input value={addvalue} type="number" onChange={(e)=>setaddvalue(e.target.value)} onKeyPress={handleKeypress} />
        <button onClick={()=>dispatch(add_value(Number(addvalue)))}>Submit</button>
      </div>
    </div>
  );
};
