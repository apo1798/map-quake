# MapQuake 地震地圖

#### [網站連結](https://apo1798.github.io/map-quake/)

#### [v1 網站連結](https://apo1798.github.io/map-quake/)

### 地震地圖。結合地震 API 和 React Leaflet，圖像化全世界的地震，調整日期與震度客製化你想要的地震資料。

![website image](/website.png)

### API 與工具庫

- 地震 API 使用美國地質調查局(United States Geological Survey, 簡稱 USGS)資料。
- Next.js 13 app router
- React Leaflet, Leaflet, OpenStreetMap
- React Hook Form, Zod
- TanStack Query
- Jotai
- TailwindCSS, HeadlessUI

---

詳細可見「網站介紹」下的「更新記事 Change Log」

#### 2023/05/29 更新記事

- CRA 改為 Next.js 13 app router
- 使用 React Hook Form, Zod 表單處理
- useEffect 抓資料改成使用 TanStack Query
- Redux Toolkit 改成 Jotai 為全域狀態管理
- TailwindCSS 替代 CSS Module、搭配 HeadlessUI

#### 2022/04/12 更新記事

- 使用 Redux Toolkit 替代 React Context API，分成多個 slice。
- 減少 CSS media query 使用。
- 嘗試使用 React Helmet。
- 網站圖標加上背景，讓容易在瀏覽器黑暗模式辨識。
- 增加 OG 標籤。
- 導覽列使用響應式漢堡選單。

  ![Example of preview of this site](/og_display.png)
