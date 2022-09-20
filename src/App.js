import { useRef, useState } from 'react';
import './App.css';

function App() {
  const [randomInput, setRandomInput] = useState("")
  const render = useRef(0)
  const inputRef = useRef()

  const handleChange = (e) => {
    const random = e.target.value;
    setRandomInput(random);
    render.current++;
  }

  const focusOnInput = () => {
    inputRef.current.focus();
  }

  return (
    <main className="App">
      <input 
        ref={inputRef}
        type="text"
        value={randomInput}
        placeholder="Random input"
        onChange={handleChange}
      />
      <p>Renders: {render.current}</p>
      <br /><br />
      <button onClick={focusOnInput}>Focus</button>
      <p>{randomInput}</p>

    </main>
  );
}

export default App;
