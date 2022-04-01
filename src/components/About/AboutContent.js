import React from 'react';

import styles from './AboutContent.module.css';

const AboutContent = () => {
  return (
    <main className={styles['text-container']}>
      <ul className={styles.list}>
        <h2>技術介紹</h2>
        <li>
          <h3>1. 地震API</h3>
          <div>
            資料源自美國地質調查局(United States Geological Survey)。
            <a
              href='https://earthquake.usgs.gov/fdsnws/event/1/'
              target='_blank'
              rel='noopener noreferrer'
              className={styles.link}
            >
              連結
            </a>
            至其官方API文件。
          </div>
        </li>
        <li>
          <h3>2. 地圖框架</h3>
          <div>
            使用
            <a
              href='https://react-leaflet.js.org/'
              target='_blank'
              rel='noopener noreferrer'
              className={styles.link}
            >
              React Leaflet
            </a>
            。抓取地震資料後生成地震標誌。並依照震度具不同的視覺呈現。
          </div>
        </li>
      </ul>

      <ul className={styles.list}>
        <h2>使用說明</h2>
        <li>
          <h3>1. 時間</h3>
          <div>
            本地圖顯示時間均為協調世界時(Universal Time Coordinated)，簡稱UTC。
          </div>
        </li>
        <li>
          <h3>2. 資料數量限制</h3>
          <div>
            根據其文件，事件數量限制為20,000筆。若搜尋範圍太大將會被視為「400
            Bad Request」。
          </div>
        </li>
      </ul>
    </main>
  );
};

export default AboutContent;
