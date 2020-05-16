# 素材與資源
- Material Icons
  - [Material Icons Guide (使用文件)](https://google.github.io/material-design-icons/)
  - [Material Icons Icons(圖示列表)](https://material.io/resources/icons/?style=baseline)
- Google Fonts
  - [Lato](https://fonts.google.com/specimen/Lato)
  - [Roboto Mono](https://fonts.google.com/specimen/Roboto+Mono?query=robo)



# npm 與 Gulp 前端工具、bower 插件指令，執行指令依序輸入
- `npm install -g bower`
- `npm install`
- `bower install`：透過 bower 前端套件下載至 `bower_components` 資料夾內。
- `gulp`：執行開發環境
- `gulp --env production`：輸出打包整個專案，處理包括
  - 去除註解
  - 壓縮圖片
  - 壓縮單行程式碼
  - 去除 JavaScript `console.log()` 等測試相關內容。


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