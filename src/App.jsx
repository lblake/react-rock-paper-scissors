import './App.css';
import {
  FaRegHandPaper,
  FaRegHandRock,
  FaRegHandScissors,
} from 'react-icons/fa';
import styles from './App.module.css';
import { useState, useEffect } from 'react';

function App() {
  const [playerHand, setPlayerHand] = useState(0);

  const [computerHand, setComputerHand] = useState(0);

  const [timer, setTimer] = useState(3);
  const [runTimer, setRunTimer] = useState(false);
  const [results, setResults] = useState({
    winner: '',
    message: '',
  });

  useEffect(() => {
    if (runTimer && timer > 0) {
      setTimeout(() => {
        setTimer(timer - 1);
      }, 1000);
    } else if (runTimer && timer < 1) {
      setRunTimer(false);
      setTimer(3);
      play();
    }
  }, [runTimer, timer]);

  const selectOption = (handIndex) => {
    setPlayerHand(handIndex);
  };

  const generateComputerHand = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    setComputerHand(randomNumber);
  };

  const start = () => {
    setResults({ message: '', winner: '' });
    setRunTimer(true);
    generateComputerHand();
  };

  const play = () => {
    if (
      options[playerHand].name === 'rock' &&
      options[computerHand].name === 'rock'
    ) {
      setResults({ winner: 'No one won', message: 'We have a draw' });
    } else if (
      options[playerHand].name === 'paper' &&
      options[computerHand].name === 'paper'
    ) {
      setResults({ winner: 'No one won', message: 'We have a draw' });
    } else if (
      options[playerHand].name === 'scissors' &&
      options[computerHand].name === 'scissors'
    ) {
      setResults({ winner: 'No one won', message: 'We have a draw' });
    } else if (
      options[playerHand].name === 'rock' &&
      options[computerHand].name === 'paper'
    ) {
      setResults({ winner: 'Computer', message: 'Paper beats rock!!' });
    } else if (
      options[playerHand].name === 'rock' &&
      options[computerHand].name === 'scissors'
    ) {
      setResults({ winner: 'Player', message: 'Rock beats scissors!!' });
    } else if (
      options[playerHand].name === 'paper' &&
      options[computerHand].name === 'rock'
    ) {
      setResults({ winner: 'Player', message: 'Paper beats rock!!' });
    } else if (
      options[playerHand].name === 'paper' &&
      options[computerHand].name === 'scissors'
    ) {
      setResults({ winner: 'Computer', message: 'Scissors beats paper!!' });
    } else if (
      options[playerHand].name === 'scissors' &&
      options[computerHand].name === 'rock'
    ) {
      setResults({ winner: 'Computer', message: 'Rock beats scissors!!' });
    } else if (
      options[playerHand].name === 'scissors' &&
      options[computerHand].name === 'paper'
    ) {
      setResults({ winner: 'Player', message: 'Scissors beats paper!!' });
    }
  };

  const options = [
    { name: 'rock', icon: <FaRegHandRock size={60} /> },
    { name: 'paper', icon: <FaRegHandPaper size={60} /> },
    { name: 'scissors', icon: <FaRegHandScissors size={60} /> },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.titleCtn}>
        <h1>ROCK,PAPER,SCISSORS</h1>
        <p>React Game</p>
      </div>
      <div className={styles.scoreCtn}>
        <div className={styles.score}>
          <h3>Player</h3>
          <p>Score: 0 </p>
        </div>
        <div className={styles.score}>
          <h3>Computer</h3>
          <p>Score: 0</p>
        </div>
      </div>
      <div className={styles.results}>
        <div className={styles.playerHand}>
          {runTimer && (
            <div className={styles.playerShake}>{options[0].icon}</div>
          )}
          {results?.winner && (
            <>
              <p id='rockIcon'>{options[playerHand].icon}</p>
              <p>{options[playerHand].name}</p>
            </>
          )}
        </div>

        <div className={styles.midCol}>
          {runTimer && <p className={styles.timer}>{timer}</p>}
          {results?.winner && (
            <>
              <p className={styles.resultsWinner}>Winner: {results.winner}</p>
              <p className={styles.resultsMessage}>{results.message}</p>
            </>
          )}
        </div>

        <div className={styles.computerHand}>
          {runTimer && (
            <div className={styles.computerShake}>{options[0].icon}</div>
          )}

          {results?.winner && (
            <>
              <p id='rockIcon'>{options[computerHand].icon}</p>
              <p>{options[computerHand].name}</p>
            </>
          )}
        </div>
      </div>
      <div className={styles.choiceBtnCtn}>
        <button
          className={`${styles.choiceBtn} ${styles.bounce} ${
            playerHand === 0 ? styles.activeChoice : ''
          }`}
          onClick={() => selectOption(0)}
        >
          <FaRegHandRock size={60} />
          Rock
        </button>
        <button
          className={`${styles.choiceBtn} ${styles.bounce} ${
            playerHand === 1 ? styles.activeChoice : ''
          }`}
          onClick={() => selectOption(1)}
        >
          <FaRegHandPaper size={60} />
          Paper
        </button>
        <button
          className={`${styles.choiceBtn} ${styles.bounce} ${
            playerHand === 2 ? styles.activeChoice : ''
          }`}
          onClick={() => selectOption(2)}
        >
          <FaRegHandScissors size={60} />
          Scissors
        </button>
      </div>
      <button className={styles.playerBtn} onClick={start}>
        Play
      </button>
    </div>
  );
}

export default App;
