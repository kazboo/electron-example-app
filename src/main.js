// import 使えないと怒られる
// import { app, BrowserWindow } from "electron";
const {app, BrowserWindow} = require('electron');

// main window
let mainWindow;

const createWindow = () => {
  mainWindow = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true
    },
    width: 800,
    height: 600
  });

  // main windowに表示するURLを指定する
  mainWindow.loadFile("index.html");

  // デベロッパーツールの起動
  mainWindow.webContents.openDevTools();

  // main windowが閉じられた時の処理
  mainWindow.on("close", () => {
    mainWindow = null;
  });
};

// 初期化が完了したときの処理
app.on("ready", createWindow);

// 全てのウィンドウが閉じたときの処理
app.on("window-all-closed", () => {
  // macOSの時以外はアプリケーションを終了させる
  if (process.platform !== "darwin") {
    app.quit();
  }
});

// アプリケーションがアクティブになったときの処理
app.on("activate", () => {
  // メインウィンドウが消えている場合は再度メインウィンドウを作成する
  if (mainWindow === null) {
    createWindow();
  }
});
