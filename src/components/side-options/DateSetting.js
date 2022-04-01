import React, { useContext } from 'react';
import { DataContext } from '../../store/DataContext';
import { ReactComponent as Calendar } from '../../icons/calendar.svg';

import styles from './DateSetting.module.css';

const dateValidChecker = (toDate, fromDate) => {
  const timeGap = new Date(toDate) - new Date(fromDate);
  if (timeGap === 0) return '日期至少要相差一天';
  if (timeGap < 0) return '起始日期需早於截止日期';
  return false;
};

const today = new Date().toISOString().split('T')[0];

const DateSetting = () => {
  const { toDate, setToDate, fromDate, setFromDate } = useContext(DataContext);

  // useEffect(() => {
  //   console.log(fromDate, toDate);

  //   // TODO HTTP REQUEST
  // }, [fromDate, toDate]);

  const fromDateHandler = (event) => {
    setFromDate(event.target.value);
    console.log(toDate);
  };
  const toDateHandler = (event) => {
    setToDate(event.target.value);
  };

  const dateErrorMessage = dateValidChecker(toDate, fromDate);

  return (
    <>
      <div className={styles.title}>
        <Calendar />
        <label htmlFor='from-date'>UTC時間</label>
      </div>
      <div className={styles['date-input']}>
        <label htmlFor='from-date'>從</label>
        <input
          type='date'
          onChange={fromDateHandler}
          value={fromDate}
          id='from-date'
          min='1980-01-01'
          max={toDate}
        />
      </div>
      <div className={styles['date-input']}>
        <label htmlFor='to-date'>至</label>
        <input
          type='date'
          onChange={toDateHandler}
          id='to-date'
          value={toDate}
          min={fromDate}
          max={today}
        />
      </div>
      {dateErrorMessage && <p className={styles.error}>{dateErrorMessage}</p>}
    </>
  );
};

export default DateSetting;
