import { memo } from 'react';

function GameTop({ choiceHandler, styles }) {
  return (
    <>
      <h2>Make your choice</h2>
      <div className={styles.checkbox}>
        <div className='true' onClick={choiceHandler}>
          true
        </div>
        <div className='false' onClick={choiceHandler}>
          false
        </div>
      </div>
    </>
  );
}

export default memo(GameTop);
