import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";

function App() {
  const [message, setMessage] = useState('');

  console.log(process.env.REACT_APP_BE_URI)
    useEffect(() => {
        names()
    }, []);

  const names = async() => {
      const response = await fetch(process.env.REACT_APP_BE_URI);
      setMessage(await response.text())
  }

  return (
      <div className="App">
        <header className="App-header">
          <p>React FE presents: {message}</p>
        </header>
      </div>
  );
}

export default App;
