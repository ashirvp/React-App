import './app.css'
import Header from './components/Header';
const mydata='India';
function App() {
  return (
    <div>
      <h1 className='hello' style={{color:'blue'}}>Hello World</h1>
      <p>my country is {mydata}</p>
      <Header data={mydata} />
    </div>

  );
}

export default App;

