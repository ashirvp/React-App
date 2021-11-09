import {useState} from 'react'
import Employee from './Employee'
function App() {
  const [count,setCount]=useState(0)
  const addCount=()=>{
    setCount(count+1)
    
  }
  let emp = [
    { name: 'Ashir', age: 21 },
    { name: 'Arun', age: 22 },
    { name: 'Amal', age: 23 },
  ]
  return (
    <div className="App">
      <button onClick={addCount}>Click</button>
     {
       emp.map((obj,index)=>{
         return(
          <Employee key={index} {...obj} />
         )
       })
     }
    </div>
  );
}

export default App;

