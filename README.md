# 連結頁面
- [模組與資源列表頁](https://gmwu185.github.io/layout-training-week-05-dashboard/)
- [Assignment](https://gmwu185.github.io/layout-training-week-05-dashboard/assignment.html)
- [Admin](https://gmwu185.github.io/layout-training-week-05-dashboard/admin.html)

# 素材與資源
- [Adobe XD 設計稿連結](https://xd.adobe.com/view/bd869667-ead5-4620-4329-ee0709cfef9e-cbb7/grid/)
- Google Fonts
  - [Lato](https://fonts.google.com/specimen/Lato)
  - [Roboto Mono](https://fonts.google.com/specimen/Roboto+Mono?query=robo)
<!-- - Material Icons
  - [Material Icons Guide (使用文件)](https://google.github.io/material-design-icons/)
  - [Material Icons Icons(圖示列表)](https://material.io/resources/icons/?style=baseline) -->



# npm 與 Gulp 前端工具、bower 插件指令，執行指令依序輸入
## 前端套件安裝
- `npm install -g bower`：安裝全域 bower 套件管理。
- `npm install`：執行安裝 `package.json` 內的 mpn 套件列表。
- `bower install`：透過 bower 前端套件下載至 `bower_components` 資料夾內。
## gulp 指令
- `gulp`：執行開發環境
- `gulp build`：輸出打包整個專案，處理包括
  - 去除註解
  - 壓縮圖片
  - 壓縮單行程式碼
  - 去除 JavaScript `console.log()` 等測試相關內容。
<!-- - ` --env production` -->


# 使用前端工具
## bower
bower 引入 jQuery 套件，透過 main-bower-files 整合進專案中使用。
## jade 處理 HTML Template
  - extent 共用 Template
  - 拆分區塊讓 include 重覆呼叫使用
  - 透過 .josn 檔，使用 jade 迴圈產生 table tr 的迴圈結構。
  - 透過 .josn 檔，jade 使用 if else 與 jade 迴圈判斷目前頁面於選單中加入 .active 樣式名稱 (index 不在判斷中)。
  - index 為 jade 與 scss 模組與資源的列表頁，讓 jade include 所有的區塊模組，除了可以了解所有資源，也可以先透過區塊切分後的模組，確任模組與模組間的相依性是否正常。
## Bootstrap Scss 與樣式命名
  - 使用 Bootstrap 4 的 scss 為基底整合樣式使用，修改變數與相關的樣式模組，整理進對應的資料夾結構中。
  - 較可獨立的樣式以前綴命名管理，盡可能抽出以 Bootstrap 4 scss 的基底樣式，另外如果以後要用於其他的專案或是其他框架中也較有可能方便整合。


# 資料夾結構
- `inbox`：用來放置不重要不需加入版控的資料，像是參考試用插件、參考用文件，或是未整理暫放素材等等…
- Sass / Scss 資料結構：參考 [sass-7-1-pattern.scss (sass資料夾模版)](https://gist.github.com/rveitch/84cea9650092119527bc)
  - `methods`：Scss 相關的函式、mixin、變數為主，若內容過多會在拆分相關檔額或是資料夾分類。
  - base：像是 `_reset` 或是 `_typography` 放置區。
  - `components`：元件內的樣式，像是按鈕或是卡片列表等等…
  - `layout`：全站共用樣式，`_navigation`、`_grid` 等等…
  - `pages`：獨立頁面專用或是少量頁面共用為主。
  - `utils`：工具類型樣式分類為主，比較 [sass-7-1-pattern.scss (sass資料夾模版)](https://gist.github.com/rveitch/84cea9650092119527bc) 放置 sass 相關函式內容為主不太相同。
  - `vendors`：放置插件、套件、框架為主的樣式分類，像是 bootstrap 取出的客製修改的 Scss 檔存放於此，用來取代 node_module 內對應 Scss 檔。


# 前綴與命名
* `.l` : 共用全站區塊或架構 (layout)，例如：`l-sidebarNav`、`.l-footer` 共用表頭尾樣式
* `.p` : 特定頁面使用 (page)
* `.c` : 組件化用於多頁面使用 (components)
* `.js` : 受 JavaScript 所操作組件對象或節點，另外也可視為直接由 JS 操作的樣式名稱。
* `.u` : 工具類樣式，用於調整細部架構或於 HTML 特定元素使用特定斷點等相關樣式 (utils)，與主題樣式只有依附關係所分類獨立。


# 其他
- 主要對應目標裝為桌機尺寸，目前以 1200px 為主 (沒做行動裝置的規劃)，使用 Bootstrap 4 斷點 mixin ，分為 `@include media-breakpoint-up()` (對應 `min-width` ) 與 `@include media-breakpoint-down()` (對應 `max-width`)，切分點 `lg` 來說 `-up()` 對應的是 `min-width: 992px`，而 `-down()` 對應的是 `max-width: 1199.98px`。
- 認識 .`webp` 格式圖檔，以點陣為主用於取代 `.jpg` 與 `.png` 的方案，檔案小所帶的色彩與細節資訊優於網路傳輸，缺點是目前在相容性上也只有於主流的瀏覽器為主才可使用。
- `New Admin` 與 `Edit Admin ` 的 `modal` 中的 `Access Level` `<select>` Tag 元素樣式處理：
  -  `<select>` Tag 內的 `required` 屬性，判斷子層的 `option` 的` value=''` 與 `disabled` 屬性有沒有符合，如果有的話就不顯示 select Tag 的 `:required `樣式設定。
  - `:invalid` 用於即時改變樣式，驗證 `<input>` content 是否符合該 `<input>` 類型 (input type)。