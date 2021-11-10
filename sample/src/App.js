import Counter from "./Counter";
import {useState} from 'react'
function App() {

  const [state, setstate] = useState(false)
  return (

    <div className="App">
      <h1 onClick={()=>setstate(!state)}>Show / Hide</h1>
      {state &&<Counter />}

    </div>


  );
}

export default App;

