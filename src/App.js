import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
function App() {
 let[counter, setCounter]= useState(0)
 
 

  const addValue = () => {
     counter=counter+1;
     console.log("clicked" ,counter)
     setCounter(counter)
  }


  return (
    <div className="App">
      <header className="App-header">
      
<h1>  My page bro, my wish</h1>
      


      <h2>
        number of times clicked: {counter}
      </h2>

<button onClick={addValue}> Click me </button>

</header>

    </div>
  );
}

export default App;
