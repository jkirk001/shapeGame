import styles from './Modal.module.css';
function Modal({
  lose,
  show,
  setDataset,
  setShowModal,
  setUserChoice,
  setWin,
}) {
  const againHandler = () => {
    setWin(false);
    setDataset(null);
    setUserChoice(null);
    setShowModal(false);
  };
  return (
    <div
      style={!show ? { display: 'none' } : { display: 'grid' }}
      className={styles.ModalContainer}
    >
      {lose && (
        <div style={{ borderColor: 'red' }}>
          You lose!
          <div
            style={{ color: 'red' }}
            onClick={againHandler}
            className={styles.again}
          >
            Play again?
          </div>
        </div>
      )}
      {!lose && (
        <div>
          You win!
          <div onClick={againHandler} className={styles.againLose}>
            Play again?
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;
