import React, { useContext } from 'react';
import { DataContext } from '../../store/DataContext';

// import { ReactComponent as Robot } from '../../icons/robot.svg';
import styles from './Info.module.css';
import { Robot } from 'phosphor-react';

const Info = () => {
  const { earthquakeArray, httpError } = useContext(DataContext);

  const earthquakeCount = earthquakeArray.length;

  let magCounter = {
    threeToFour: 0,
    fourToFive: 0,
    fiveToSix: 0,
    greaterThanSix: 0,
  };

  earthquakeArray.forEach((earthquake) => {
    if (earthquake.mag < 4) {
      magCounter = { ...magCounter, threeToFour: magCounter.threeToFour + 1 };
    } else if (earthquake.mag >= 4 && earthquake.mag < 5)
      magCounter = { ...magCounter, fourToFive: magCounter.fourToFive + 1 };
    else if (earthquake.mag >= 5 && earthquake.mag < 6)
      magCounter = { ...magCounter, fiveToSix: magCounter.fiveToSix + 1 };
    else if (earthquake.mag >= 6)
      magCounter = {
        ...magCounter,
        greaterThanSix: magCounter.greaterThanSix + 1,
      };
    else {
      console.log('震度計畫錯誤。');
    }
  });

  return (
    <section className={styles['info-container']}>
      <div className={styles.title}>
        <Robot />
        <span>系統小幫手</span>
      </div>
      <ul className={styles.list}>
        <li>共有：{earthquakeCount}筆資料</li>
        <li>
          震度{'<'}4：{magCounter.threeToFour}
        </li>
        <li>
          震度{'<'}5：{magCounter.fourToFive}
        </li>
        <li>
          震度{'<'}6：{magCounter.fiveToSix}
        </li>
        <li>震度6以上：{magCounter.greaterThanSix}</li>
      </ul>
      {httpError && <div className={styles.error}>{httpError}</div>}
    </section>
  );
};

export default Info;
