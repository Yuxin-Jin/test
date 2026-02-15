const fs = require("fs");

// 读取 lyrics.json
const lyrics = fs.readFileSync("lyrics.json", "utf8");

// 转换成 JS 变量（确保无 BOM 且是 UTF-8 保存）
const scriptTag = `<script>const lyricsData = ${lyrics};</script>`;

// 读取 index.html
let html = fs.readFileSync("index.html", "utf8");

// 如果之前已经插入过，先去掉旧的
html = html.replace(/<script>const lyricsData =[\s\S]*?<\/script>/, "");

// 插入到 </body> 前
html = html.replace("</body>", scriptTag + "\n</body>");

// 保存
fs.writeFileSync("index.html", html, "utf8");

console.log("✅ 歌词已合并进 index.html");
