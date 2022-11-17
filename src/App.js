import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { Counter } from "./Counter";
import { toggle } from "./JS/actions/counterActions";

function App() {
  const dispatch=useDispatch()
  const selector=useSelector((state)=>state.show_counter)
  return (
    <div className="App">
      <button onClick={()=>dispatch(toggle())}>Show</button>
     {
      selector?<Counter/>:'click here'
     }
    </div>
  );
}

export default App;
