import { useState } from 'react';
import './App.css';

function App() {
  const [randomInput, setRandomInput] = useState("")

  const handleChange = (e) => {
    const random = e.target.value;
    setRandomInput(random);
  }
  return (
    <main className="App">
      <input 
        type="text"
        value={randomInput}
        placeholder="Random input"
        onChange={handleChange}
      />
      <br /><br />

      <p>{randomInput}</p>

    </main>
  );
}

export default App;
