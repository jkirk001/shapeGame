import { useEffect, useState } from 'react';
import styles from './App.module.css';
import GameTop from './components/GameTop';
import Modal from './components/Modal/Modal';
import ShapesContainer from './components/ShapesContainer/ShapesContainer';
import { shapes, colors } from './data/data'; //!import data

function App() {
  const [dataset, setDataset] = useState(null);
  const [win, setWin] = useState(false);
  const [userChoice, setUserChoice] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    //? run if dataset is null
    if (dataset === null) {
      const data = [];
      for (let i = 0; i < 16; i++) {
        const random1 = Math.floor(Math.random() * shapes.length);
        const random2 = Math.floor(Math.random() * colors.length);
        const shape = [shapes[random1], colors[random2]];
        data.push(shape);
      }
      setDataset(data);

      //? just in case we need the actual num of each shape/color
      const x = {};
      const counts = data.map((item) => {
        const [shape, color] = item;
        if (x[`${shape}${color}`]) return (x[`${shape}${color}`] += 1);
        return (x[`${shape}${color}`] = 1);
      });
      //? sets win condition to true if a shape/color appears 4+ times
      for (let num of counts) {
        if (num >= 4) setWin(true);
      }
    }
  }, [dataset]);

  //? if user makes a choice, bring up modal
  useEffect(() => {
    if (userChoice == null) return;
    setShowModal(true);
  }, [userChoice, win]);

  //? handles user choice
  const choiceHandler = (e) => {
    if (e.target.className === 'true') {
      setUserChoice(true);
    }
    if (e.target.className === 'false') {
      setUserChoice(false);
    }
  };

  return (
    <div className={styles.App}>
      <Modal
        // logic that tells modal if it was a win or lose
        lose={win === userChoice ? false : true}
        //All of these are for resetting after win/lose
        show={showModal}
        setDataset={setDataset}
        setShowModal={setShowModal}
        setWin={setWin}
        setUserChoice={setUserChoice}
      />
      <div className={styles.container}>
        <GameTop styles={styles} choiceHandler={choiceHandler} />
        <div className={styles.displayGrid}>
          <ShapesContainer dataset={dataset} />
        </div>
      </div>
    </div>
  );
}

export default App;
