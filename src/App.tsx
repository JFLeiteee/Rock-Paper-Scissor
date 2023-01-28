import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [selected, setSelected] = useState<string>("");
  const [random, setRandom] = useState<string>("")
  const [result, setResult] = useState<string>("")

  useEffect(() => {
    setRandom(makeChoice());
    setResult(Game(random, selected));
  }, [random, selected]);

  function makeChoice(): string {
  let sorted = Math.floor(Math.random() * 3);
  if (sorted == 0) {
    return 'Rock';
  }
  else if (sorted == 1) {
    return 'Paper';
  }
  else {
    return 'Scissor';
  }
}

function Game(random: string, selected: string) {

  if(random == '' || selected == '') {
    return '';
  }

  else{
    // TIE CONDITION
    if(random === selected){
      alert('tie');
      return 'tie';
    }
    // WIN CONDITION
    else if(selected === 'Rock' && random === 'Scissor' || 
    selected === 'Scissor' && random === 'Paper' ||
    selected === 'Paper' && random === 'Rock') {
      alert('win');
      return 'win';
    }
    // LOSE CONDITION
    else if (selected === 'Rock' && random === 'Paper' ||
    selected === 'Paper' && random === 'Scissor' ||
    selected === 'Scissor' && random === 'Rock') {
      alert('lose');
      return 'lose';
    }
  }
}

  return (
    <main>
      <h1>Rock, Paper, Scissor!</h1>
      <p>Make your choice:</p>

      <div className='buttons'>
        <button className='rock-btn' value='0' onClick={() => { setSelected('Rock')}}>Rock</button>
        <button className='paper-btn'value='1' onClick={() => { setSelected('Paper')}}>Paper</button>
        <button className='scissor-btn' value='2' onClick={() => { setSelected('Scissor')}}>Scissor</button>
      </div>
    </main>
  )
}

export default App
