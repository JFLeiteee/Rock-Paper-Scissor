import { useState, useEffect } from 'react';
import './App.css';
import RockHand from './assets/img/ROCK.png';
import PaperHand from './assets/img/PAPER.png';
import ScissorHand from './assets/img/SCISSOR.png';

function App() {
  const [selected, setSelected] = useState<string>("");
  const [random, setRandom] = useState<string>("")
  const [result, setResult] = useState<string>("")

  useEffect(() => {
    setRandom(makeChoice());
    setResult(Game(random, selected));
    appearSelected(selected);
  }, [selected]);

function makeChoice(): string {
  const rockImg = document.querySelector(".pc-rock-img")
  const paperImg = document.querySelector(".pc-paper-img")
  const scissorImg = document.querySelector(".pc-scissor-img")

  let sorted = Math.floor(Math.random() * 3);

  if (sorted == 0) {
    rockImg.classList.remove("disabled");
    paperImg.classList.add("disabled");
    scissorImg.classList.add("disabled");
    return 'Rock'
  }
  else if (sorted == 1) {
    paperImg.classList.remove("disabled");
    rockImg.classList.add("disabled");
    scissorImg.classList.add("disabled");
    return 'Paper'
  }
  else {
    scissorImg.classList.remove("disabled");
    paperImg.classList.add("disabled");
    rockImg.classList.add("disabled");
    return 'Scissor'
  }
}

function Game(random: string, selected: string) {

  if(random == '' || selected == '') {
    return '';
  }

  else{
    // TIE CONDITION
    if(random === selected){
      console.log('tie');
      return 'tie';
    }
    // WIN CONDITION
    else if(selected === 'Rock' && random === 'Scissor' || 
    selected === 'Scissor' && random === 'Paper' ||
    selected === 'Paper' && random === 'Rock') {
      console.log('win');
      return 'win';
    }
    // LOSE CONDITION
    else if (selected === 'Rock' && random === 'Paper' ||
    selected === 'Paper' && random === 'Scissor' ||
    selected === 'Scissor' && random === 'Rock') {
      console.log('lose');
      return 'lose';
    }
  }
}

// APARECER A IMAGEM QUADO O USUARIO CLICAR
function appearSelected(selected:string) {
  const rockImg = document.querySelector(".rock-img")
  const paperImg = document.querySelector(".paper-img")
  const scissorImg = document.querySelector(".scissor-img")

  if(selected == 'Rock'){
    rockImg.classList.remove("disabled");
    paperImg.classList.add("disabled");
    scissorImg.classList.add("disabled");
  }
  else if (selected == 'Paper') {
    paperImg.classList.remove("disabled");
    rockImg.classList.add("disabled");
    scissorImg.classList.add("disabled");
  }
  else if (selected == 'Scissor') {
    scissorImg.classList.remove("disabled");
    paperImg.classList.add("disabled");
    rockImg.classList.add("disabled");
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

      <div className='results'>
        <div className='user-result'>
          <img src={RockHand} alt="ROCK HAND" className='rock-img disabled'/>
          <img src={PaperHand} alt="PAPER HAND" className='paper-img disabled' />
          <img src={ScissorHand} alt="SCISSOR HAND" className='scissor-img disabled'/>
        </div>

        <div className='pc-result'>
          <img src={RockHand} alt="ROCK HAND" className='-pc-rock-img disabled'/>
          <img src={PaperHand} alt="PAPER HAND" className='pc-paper-img disabled' />
          <img src={ScissorHand} alt="SCISSOR HAND" className='pc-scissor-img disabled'/>
        </div>
      </div>
    </main>
  )
}

export default App
