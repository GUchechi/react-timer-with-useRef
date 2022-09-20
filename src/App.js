import { useRef, useState } from 'react';
import './App.css';

function App() {
  const [randomInput, setRandomInput] = useState("")
  const [seconds, setSeconds] = useState(0)
  const render = useRef(0)
  const timerId = useRef()
  const inputRef = useRef()

  const handleChange = (e) => {
    const random = e.target.value;
    setRandomInput(random);
    render.current++;
  }

    const startTimer = () => {
      timerId.current = setInterval(() => {
        render.current++;
        setSeconds( prev => prev + 1 );
      }, 1000);
    }

    const stopTimer = () => {
      clearInterval(timerId.current);
      timerId.current = 0;
    }

    const resetTimer = () => {
      stopTimer();
      if(seconds) {
        render.current++;
        setSeconds(0)
      }
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
      <br />

      <button onClick={focusOnInput}>Focus</button>

      <section>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={resetTimer}>Reset</button>
      </section>
      <br />
      <p>Seconds : {seconds}</p>
      <br />
      <p>{randomInput}</p>

    </main>
  );
}

export default App;
