import React from 'react';

import styles from './AboutContent.module.css';

const AboutContent = () => {
  return (
    <main className={styles['text-container']}>
      <ul className={styles.list}>
        <h2>地震地圖</h2>
        <li>
          結合地震 API 和 Leaflet、OpenStreet
          Map，圖像化全世界的地震，調整日期與震度客製化你想要的地震資料。
        </li>
      </ul>

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
            Bad Request」。可以試著減少時間軸度、亦或增加震度再試一次。
          </div>
        </li>
      </ul>
      <ul className={styles.list}>
        <h2>原由</h2>
        <li>
          被台灣時間3月23日半夜地震搖到驚醒的我，想到可以結合地震API和網課使用的Leaflet圖像化資料。這就是地震地圖的誕生。
        </li>
      </ul>
    </main>
  );
};

export default AboutContent;
