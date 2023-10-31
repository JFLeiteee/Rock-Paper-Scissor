import { useState, useEffect } from 'react';
import './App.css';
import RockHand from "./assets/ROCK.png"
import PaperHand from "./assets/PAPER.png"
import ScissorHand from "./assets/SCISSOR.png"

function App() {
  const [selected, setSelected] = useState<string>("");
  const [random, setRandom] = useState<string>("")
  const [result, setResult] = useState<string | undefined>("")
  const [isNewGame, setIsNewGame] = useState<boolean>(true)
  const [points, setPoints] = useState(0)

  const rockImg = document.querySelector(".rock-img")
  const paperImg = document.querySelector(".paper-img")
  const scissorImg = document.querySelector(".scissor-img")

  const RockImg = document.querySelector(".pc-rock-img");
  const PaperImg = document.querySelector(".pc-paper-img");
  const ScissorImg = document.querySelector(".pc-scissor-img");

  useEffect(() => {
    setRandom(makeChoice());
    setResult(Game(random, selected));
    appearSelected(selected);
  }, [selected]);

function makeChoice(): string {
  let sorted = Math.floor(Math.random() * 3);

  if (sorted == 0) {
    return 'Rock'
  }
  else if (sorted == 1) {
    return 'Paper'
  }
  else {
    return 'Scissor'
  }
}

function appearPcResult(random:string) {
  if(random === 'Rock'){
    RockImg?.classList.remove("disabled");
    PaperImg?.classList.add("disabled");
    ScissorImg?.classList.add("disabled");
  }
  else if(random === 'Paper'){
    PaperImg?.classList.remove("disabled");
    RockImg?.classList.add("disabled");
    ScissorImg?.classList.add("disabled");
  }
  else if (random === 'Scissor'){
    ScissorImg?.classList.remove("disabled");
    PaperImg?.classList.add("disabled");
    RockImg?.classList.add("disabled");
  }
}

function Game(random: string, selected: string) {
  let result: string;

  if(random === "" || selected === "") {
    return '';
  }

  else{
    appearPcResult(random);

    // TIE CONDITION
    if(random === selected){
      result = 'tied';
      return 'tied';
    }
    // WIN CONDITION
    else if(selected === 'Rock' && random === 'Scissor' || 
    selected === 'Scissor' && random === 'Paper' ||
    selected === 'Paper' && random === 'Rock') {
      result = 'won'
      setPoints(points => points + 1);
      return 'won';
    }
    // LOSE CONDITION
    else if (selected === 'Rock' && random === 'Paper' ||
    selected === 'Paper' && random === 'Scissor' ||
    selected === 'Scissor' && random === 'Rock') {
      result = 'lost';
      setPoints(0)
      return 'lost';
    }
  }
}

// APARECER A IMAGEM QUADO O USUARIO CLICAR
function appearSelected(selected:string) {
  if(selected == 'Rock'){
    rockImg?.classList.remove("disabled");
    paperImg?.classList.add("disabled");
    scissorImg?.classList.add("disabled");
  }
  else if (selected == 'Paper') {
    paperImg?.classList.remove("disabled");
    rockImg?.classList.add("disabled");
    scissorImg?.classList.add("disabled");
  }
  else if (selected == 'Scissor') {
    scissorImg?.classList.remove("disabled");
    paperImg?.classList.add("disabled");
    rockImg?.classList.add("disabled");
  }
}

function handleNewGame() {
  setIsNewGame(isNewGame => !isNewGame)

  if(isNewGame === false) {
    setResult("")
    setSelected("")
    paperImg?.classList.add("disabled");
    scissorImg?.classList.add("disabled");
    rockImg?.classList.add("disabled");

    PaperImg?.classList.add("disabled");
    ScissorImg?.classList.add("disabled");
    RockImg?.classList.add("disabled");

  } else {
    null
  }
}

  return (
    <main>
      <h1 className="title">Rock, Paper, Scissor!</h1>

      {
        isNewGame 
        ? 
        <>
          <p>Make your choice:</p>
          <div className='buttons'> 
            <button className='rock-btn' value='0' onClick={() => { setSelected('Rock'), handleNewGame()}}>Rock</button>
            <button className='paper-btn'value='1' onClick={() => { setSelected('Paper'), handleNewGame()}}>Paper</button>
            <button className='scissor-btn' value='2' onClick={() => { setSelected('Scissor'), handleNewGame()}}>Scissor</button>
          </div>        
        </>

        : null
      }

      <div className='results'>
        <div className='user-result'>
          <img src={RockHand} alt="ROCK HAND" className='rock-img disabled'/>
          <img src={PaperHand} alt="PAPER HAND" className='paper-img disabled' />
          <img src={ScissorHand} alt="SCISSOR HAND" className='scissor-img disabled'/>
        </div>

        {
          result
           ? <div className='game-result'>
              <h4>You...</h4>
              <h2 className='result'>{result.toUpperCase()}</h2>
              <div className="points"><p>{points}</p></div>
              <p className='play-again' onClick={() => handleNewGame()}>Play again?</p>
            </div>
          : null
        }

        <div className='pc-result'>
          <img src={RockHand} alt="ROCK HAND" className='pc-rock-img disabled'/>
          <img src={PaperHand} alt="PAPER HAND" className='pc-paper-img disabled' />
          <img src={ScissorHand} alt="SCISSOR HAND" className='pc-scissor-img disabled'/>
        </div>
      </div>
    </main>
  )
}

export default App
